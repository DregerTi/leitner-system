import {CategoryEnum} from "../enum/categoryEnum";
import CardUserData from "./cardUserData";

export default interface Card extends CardUserData {
    id: string,
    category: CategoryEnum
}