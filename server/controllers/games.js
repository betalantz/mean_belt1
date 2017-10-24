const mongoose = require("mongoose")
const Question = mongoose.model("Question")

module.exports = {
    addQuestion: (req, res) => {
        let question = new Question(req.body)
        console.log(question)
        question.answers.push({answer: req.body.corrAnswer, isCorr: 'true'})
        question.answers.push({answer: req.body.fake1})
        question.answers.push({answer: req.body.fake2})
        console.log('new question in ctrl, prior to save', question)
        question.save()
            .then(() => {
                res.json(true)
            })
            .catch(err => {
                console.log('Question save error', err)
                res.status(500).json(err)
            })
    },
    get_all: (req, res) => {
        Question.find({})
            .then(results => {
                res.json(results)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    
}