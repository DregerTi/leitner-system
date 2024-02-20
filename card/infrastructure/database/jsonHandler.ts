import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import CardEntity from "../../application/entity/cardEntity";

export const CARD_ENTITY_JSON_NAME = __dirname + '/data/card.json';
export enum CreationStatus {
    OK = 0,
    ERROR
}
export class JsonHandler {
    getData(entity: typeof CARD_ENTITY_JSON_NAME, params: {
        attribute: string,
        value: string,
    }[] | null): any {
        const data = JSON.parse(fs.readFileSync(entity, 'utf-8'));
        if (null === params) {
            return data;
        }
        return data.filter((user: CardEntity) => {
            return params.every(param => {
                // @ts-ignore
                return user[param.attribute] === param.value;
            })
        })
    }
    getDataByOr(entity: typeof CARD_ENTITY_JSON_NAME, params: {
        attribute: string,
        value: string,
    }[]): any {
        const data = JSON.parse(fs.readFileSync(entity, 'utf-8'));
        return data.filter((user: CardEntity) => {
            return params.some(param => {
                // @ts-ignore
                return user[param.attribute] === param.value;
            })
        })
    }

    createData(entity: typeof CARD_ENTITY_JSON_NAME, value: object): string | CreationStatus.ERROR {
        try {
            const data = this.getData(CARD_ENTITY_JSON_NAME, null)
            // @ts-ignore
            value.id = uuidv4();
            data.push(value);
            fs.writeFileSync(entity, JSON.stringify(data));
            // @ts-ignore
            return value.id;
        } catch (e) {
            return CreationStatus.ERROR;
        }
    }

    updateData(entity: typeof CARD_ENTITY_JSON_NAME, value: object, cardId: string): CreationStatus.ERROR|string {
        try {
            const data = this.getData(CARD_ENTITY_JSON_NAME, null)
            const index = data.findIndex((card: CardEntity) => card.id === cardId);
            if (index === -1) {
                return CreationStatus.ERROR;
            }
            data[index] = value;
            fs.writeFileSync(entity, JSON.stringify(data));
            return cardId;
        } catch (e) {
            return CreationStatus.ERROR;
        }
    }
}