import CardUserData from "../../application/dto/cardUserData";
import CreateCardUseCase from "../../application/useCases/createCardUseCase";
import Card from "../../application/dto/card";
import AnswerCardUseCase from "../../application/useCases/answerCardUseCase";
import GetQuizzByDayUseCase from "../../application/useCases/getQuizzByDayUseCase";
import GetCardsByTagsUseCase from "../../application/useCases/getCardsByTagsUseCase";

export default class CardController {
    _createCardUseCase: CreateCardUseCase;
    _answerCardUseCase: AnswerCardUseCase;
    _quizzCardUseCase: GetQuizzByDayUseCase;
    _cardsByTagsUseCase: GetCardsByTagsUseCase;
    constructor(useCase: CreateCardUseCase, answerCardUseCase: AnswerCardUseCase,
                quizzCardUseCase: GetQuizzByDayUseCase, cardsByTagsUseCase: GetCardsByTagsUseCase) {
        // @ts-ignore
        this._createCardUseCase = useCase;
        this._answerCardUseCase = answerCardUseCase;
        this._quizzCardUseCase = quizzCardUseCase;
        this._cardsByTagsUseCase = cardsByTagsUseCase;
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

    getCardsByTags(tags: string[]): Card[] {
        return this._cardsByTagsUseCase.execute(tags);
    }
}