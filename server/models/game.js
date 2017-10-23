const mongoose = require("mongoose")

const AnswerSchema = mongoose.Schema({
    answer: String,
    isCorr: {type: Boolean, default: false}
})
const QuestionSchema = mongoose.Schema({
    question: String,
    answers: [AnswerSchema]
})

mongoose.model("Question", QuestionSchema)