import CardUserData from "../../application/dto/cardUserData";
import { JsonCardRepository } from "../../infrastructure/repository/jsonCardRepository";
import CreateCardUseCase from "../../application/useCases/createCardUseCase";
import CreateCardWithUserIdUseCase from "../../application/useCases/createCardWithUserIdUseCase";
import Card from "../../application/dto/card";
import AnswerCardUseCase from "../../application/useCases/answerCardUseCase";
import GetQuizzByDayUseCase from "../../application/useCases/getQuizzByDayUseCase";

export default class CardController {
    _createCardUseCase: CreateCardUseCase;
    _answerCardUseCase: AnswerCardUseCase;
    _quizzCardUseCase: GetQuizzByDayUseCase;
    constructor(useCase: CreateCardUseCase, answerCardUseCase: AnswerCardUseCase, quizzCardUseCase: GetQuizzByDayUseCase) {
        // @ts-ignore
        this._createCardUseCase = useCase;
        this._answerCardUseCase = answerCardUseCase;
        this._quizzCardUseCase = quizzCardUseCase;
    }
    createCard(card: CardUserData, userToken: string): boolean | Card {
        const cardEntity = this._createCardUseCase.execute(card, { userToken: userToken });

        if (cardEntity) {
            return {
                id: cardEntity.id,
                category: cardEntity.category,
                question: cardEntity.question,
                answer: cardEntity.answer,
                tag: cardEntity.tag
            };
        }

        return false;
    }

    answerCard(cardId: string, isCorrectAnswer: boolean): boolean {
        return this._answerCardUseCase.execute(cardId, isCorrectAnswer);
    }

    getQuizzCards(date: Date): Card[] {
        return this._quizzCardUseCase.execute(date);
    }
}