import { QuizQuestion } from './quiz-question.model'

export interface Quiz {
    id: string,
    title: string,
    questions: QuizQuestion[]   
}