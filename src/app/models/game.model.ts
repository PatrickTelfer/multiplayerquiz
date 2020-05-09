import { GameState } from './GameState';
import { Player } from '../models/player.model'

export class GameData {
    constructor(
        private gameState: GameState,
        private host: boolean,
        private answer: string,
        private score: number,
        private topPlayers: Player[],
        private currentQuestion: string,
        private options: string[]
    ) { }

    isHost() {
        return this.host;
    }

    isQuestionState() {
        return this.gameState == GameState.Question;
    }

    isAnswerState() {
        return this.gameState == GameState.Answer;
    }

    isResultState() {
        return this.gameState == GameState.Result;
    }

    isFinalState() {
        return this.gameState == GameState.Final;
    }
}