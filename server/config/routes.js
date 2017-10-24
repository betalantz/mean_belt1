const path = require("path")

const users = require("./../controllers/users.js")
const games = require('./../controllers/games.js')

module.exports = app => {
    app.post("/login", users.login)
    app.get("/logout", users.logout)
    app.get('/login_stat', users.login_stat)
    app.post('/addQuestion', games.addQuestion)
    app.get('/getQuestions', games.get_all)
    app.post('/updateScore', users.setScore)
    app.get('/get_users', users.getUsers)
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}