import CreateCardUseCase from "./createCardUseCase";
import CardRepository from "../repository/cardRepository";
import CardUserData from "../dto/cardUserData";
import Card from "../entity/card";
import {getUserIdByToken} from "../service/getUserIdByToken";

export default class CreateCardWithUserIdUseCase implements CreateCardUseCase {
    _cardRepository: CardRepository;

    constructor(cardRepository: CardRepository)
    {
        this._cardRepository = cardRepository;
    }
    execute(card: CardUserData, opts: {userToken: string}): Card | false {
        const cardToDatabase = {
            question: card.question,
            answer: card.answer,
            tag: card.tag
        };

        return this._cardRepository.createCard(cardToDatabase, opts);
    }
}