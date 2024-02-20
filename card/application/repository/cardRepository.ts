import CardUserData from "../dto/cardUserData";
import CardEntity from "../entity/cardEntity";

export default interface CardRepository {
    createCard(card: CardUserData, opts: {}): false | CardEntity;
    updateCard(card: CardUserData, cardId: string): false | string;
    getCardById(cardId: string): false | CardEntity;
    getAllCards(): CardEntity[];
}