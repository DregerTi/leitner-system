import CardUserData from "../../application/dto/cardUserData";
import {JsonCardRepository} from "../../infrastructure/repository/jsonCardRepository";
import CreateCardUseCase from "../../application/useCases/createCardUseCase";
import CreateCardWithUserIdUseCase from "../../application/useCases/createCardWithUserIdUseCase";
import Card from "../../application/dto/card";

export default class CardController
{
    _createCardUseCase: CreateCardUseCase;
    constructor(useCase: CreateCardUseCase) {
        // @ts-ignore
        this._createCardUseCase = useCase;
    }
    createCard(card: CardUserData, userToken: string): boolean|Card {
        const cardEntity = this._createCardUseCase.execute(card, {userToken: userToken});

        if(cardEntity) {
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
}