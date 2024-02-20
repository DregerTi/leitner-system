import {CARD_ENTITY_JSON_NAME, CreationStatus, JsonHandler} from "../database/jsonHandler";
import CardRepository from "../../application/repository/cardRepository";
import CardUserData from "../../application/dto/cardUserData";
import {getUserIdByToken} from "../../application/service/getUserIdByToken";
import Card from "../../application/entity/card";
import {CategoryEnum} from "../../application/enum/categoryEnum";

export class JsonCardRepository implements CardRepository {
    _jsonHandler = new JsonHandler();

    createCard(card: CardUserData, opts: {userToken: string}): false | Card {
        const userId = getUserIdByToken(opts.userToken);
        console.log(userId);
        const cardWithUserId = {
            ...card,
            userId: userId,
            lastAnswerDateToString: new Date().toISOString(),
            category: CategoryEnum.FIRST,
        };

        const cardUuid = this._jsonHandler.createData(CARD_ENTITY_JSON_NAME, cardWithUserId);
        if (cardUuid === CreationStatus.ERROR) {
            return false;
        }

        return new Card(cardUuid, cardWithUserId.question, cardWithUserId.answer, cardWithUserId.tag, cardWithUserId.category, cardWithUserId.lastAnswerDateToString, cardWithUserId.userId);
    }
}