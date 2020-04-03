const mongoose = require('mongoose');


const quizSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        questions: [
            {
            question: {type: String, required: true},
            options: [String],
            answerIndex: {type: Number, required: true}
            }
        ]
    }
);

module.exports = mongoose.model('Quiz', quizSchema);