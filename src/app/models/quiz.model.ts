import { QuizQuestion } from './quiz-question.model'

export class Quiz {
    constructor(
        private questions: QuizQuestion[]
    ) {}

    getQuestions() {
        return [...this.questions];
    }
}