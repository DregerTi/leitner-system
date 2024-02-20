import CreateCardUseCase from "./createCardUseCase";
import CardRepository from "../repository/cardRepository";
import CardUserData from "../dto/cardUserData";
import CardEntity from "../entity/cardEntity";

export default class CreateCardWithUserIdUseCase implements CreateCardUseCase {
    _cardRepository: CardRepository;

    constructor(cardRepository: CardRepository) {
        this._cardRepository = cardRepository;
    }
    execute(card: CardUserData, opts: { userToken: string }): CardEntity | false {
        const cardToDatabase = {
            question: card.question,
            answer: card.answer,
            tag: card.tag
        };

        return this._cardRepository.createCard(cardToDatabase, opts);
    }
}