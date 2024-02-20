import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import Card from "../../application/entity/card";

export const CARD_ENTITY_JSON_NAME = __dirname + '/data/card.json';
export enum CreationStatus {
    OK = 0,
    ERROR
}
export class JsonHandler {
    getData(entity: typeof CARD_ENTITY_JSON_NAME, params: {
        attribute: string,
        value: string
    }[]|null): any {
        const data = JSON.parse(fs.readFileSync(entity, 'utf-8'));
        if (null === params) {
            return data;
        }
        return data.filter((user: Card) => {
            return params.every(param => {
                // @ts-ignore
                return user[param.attribute] === param.value;
            })
        })
    }

    createData(entity: typeof CARD_ENTITY_JSON_NAME, value: object): string|CreationStatus.ERROR {
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
}