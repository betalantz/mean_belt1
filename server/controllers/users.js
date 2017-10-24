const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
	getUsers: (req, res) => {
		User.find()
			.then(users => {
				res.json(users)
			})
			.catch(err => {
				console.log("User.find error", err)
				res.status(500).json(err)
			})
	},

	login: (req, res) => {
        let new_user = new User(req.body)

        new_user.save()
            .then(() => {
                req.session.user = new_user
                console.log('New user in session:', req.session.user.name);
                res.json(true)
            })
            .catch(err => {
                console.log("User save error", err)
                res.status(500).json(err)
            })
    },
			

	login_stat: (req, res) => {
		if(req.session.user){
            console.log(req.session.user, 'is logged in');
            res.json(req.session.user)
		} else {
			res.status(401).json(false)
		}
	},

	logout: (req, res) => {
		req.session.destroy()
        console.log('user logged out');
        res.redirect("/")
	},
	setScore: (req, res) => {
		let id = req.session.user._id
		console.log(id)
		let score = req.body.score
		console.log(score);
		let perc = Math.floor((score/3)*100)
		console.log(perc);
		User.update({_id: id}, {score: score, percent: perc}) .then ((err, user) => {
			if(err){
				console.log('Update score error in controller', err);
				res.json(true)
			} else {
				console.log('player score updated at ctrl');
				res.json(true)
			}
		})
	}
}