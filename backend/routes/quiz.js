const express = require('express');

const router = express.Router();

const Quiz = require('../models/quiz');

router.post("", (req, res) => {
    const quiz = new Quiz({
        title: req.body.title,
        questions: req.body.questions
    });

    quiz.save().then(createdQuiz => {
        res.status(201).json({
            message: 'quiz added successfully',
            quizId: createdQuiz._id
        });
    })

});

router.put('/:id', (req, res) => {
    const quiz = new Quiz({
        _id: req.body.id,
        title: req.body.title,
        questions: req.body.questions
    });

    Quiz.updateOne({_id: req.params.id}, quiz).then((result) =>{
        res.status(200).json({
            message: "update successful"
        });
    }).catch( () => {
        console.log('failed');
    })
}); 

router.get('', (req, res) => {
    Quiz.find()
        .then((fetchedQuizzes) => {
            res.status(201).json({
                message: 'quizzes fetched successfully',
                quizzes: fetchedQuizzes
            })
        })
});

router.get('/:id', (req, res) => {

    Quiz.findById(req.params.id).then(quiz => {
        if (quiz) {
            res.status(200).json(quiz);
        } else {
            res.status(404).json({message: 'quiz not found'})
        }
    })
});

router.delete('/:id', (req, res) => {
    Quiz.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json({
                message: 'quiz deleted'
            });
        })
});

module.exports = router;