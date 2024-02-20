import CardUserData from "../../../application/dto/cardUserData";

export const isValidCardUserData = (request: any): request is CardUserData => {
    return 'question' in request && 'answer' in request && 'tag' in request;
}