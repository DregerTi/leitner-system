import {FastifyInstance} from "fastify";
import {isValidCardUserData} from "./service/isValidCardUserData";
import CardController from "../controller/cardController";
import CreateCardWithUserIdUseCase from "../../application/useCases/createCardWithUserIdUseCase";
import {JsonCardRepository} from "../../infrastructure/repository/jsonCardRepository";

async function cardRoutes(fastify: FastifyInstance, options: object) {
    fastify.post('/cards', async (request, reply) => {
        const card = request.body;
        const userToken = request.headers.authorization;
        if (!isValidCardUserData(card) || undefined === userToken) {
            reply.code(400)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send("Bad Request");
        } else {
            const cardController = new CardController(new CreateCardWithUserIdUseCase(new JsonCardRepository()));
            const createdCard = cardController.createCard(card, userToken);
            if (false === createdCard) {
                reply.code(400)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send("Invalid information");
            } else {
                reply.code(201)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send(
                        createdCard
                    );
            }
        }
    })
}

export default cardRoutes;