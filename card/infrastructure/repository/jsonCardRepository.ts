import { CARD_ENTITY_JSON_NAME, CreationStatus, JsonHandler } from "../database/jsonHandler";
import CardRepository from "../../application/repository/cardRepository";
import CardUserData from "../../application/dto/cardUserData";
import {getUserIdByToken} from "../../application/service/getUserIdByToken";
import CardEntity from "../../application/entity/cardEntity";
import {CategoryEnum} from "../../application/enum/categoryEnum";

export class JsonCardRepository implements CardRepository {
    _jsonHandler = new JsonHandler();

    createCard(card: CardUserData, opts: {userToken: string}): false | CardEntity {
        const userId = getUserIdByToken(opts.userToken);
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

        return new CardEntity(cardUuid, cardWithUserId.question, cardWithUserId.answer, cardWithUserId.tag, cardWithUserId.category, cardWithUserId.lastAnswerDateToString, cardWithUserId.userId);
    }

    updateCard(card: CardUserData, cardId: string): false | string {
        const cardWithUserId = {
            ...card,
            lastAnswerDateToString: new Date().toISOString(),
        };

        const cardUuid = this._jsonHandler.updateData(CARD_ENTITY_JSON_NAME, cardWithUserId, cardId);
        if (cardUuid === CreationStatus.ERROR) {
            return false;
        }

        return cardId;
    }

    getCardById(cardId: string): false | CardEntity {
        let card = this._jsonHandler.getData(CARD_ENTITY_JSON_NAME, [{
            attribute: "id",
            value: cardId
        }]);
        if (card === CreationStatus.ERROR) {
            return false;
        }
        card = card[0];
        return new CardEntity(card.id, card.question, card.answer, card.tag, card.category, card.lastAnswerDateToString, card.userId);
    }

    getAllCards(): CardEntity[] {
        const cards = this._jsonHandler.getData(CARD_ENTITY_JSON_NAME, null);
        return cards.map((card: any) => new CardEntity(card.id, card.question, card.answer, card.tag, card.category, card.lastAnswerDateToString, card.userId));
    }

    getCardsByTags(tags: string[]): CardEntity[] {

        const cards = this._jsonHandler.getDataByOr(CARD_ENTITY_JSON_NAME, tags.map(tag => {
            return {
                attribute: "tag",
                value: tag
            }
        }));
        return cards.map((card: any) => new CardEntity(card.id, card.question, card.answer, card.tag, card.category, card.lastAnswerDateToString, card.userId));
    }
}