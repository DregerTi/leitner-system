import Fastify from 'fastify'
import userRoutes from "./user/interface/http/userRoutes";
import cardRoutes from "./card/interface/http/cardRoutes";
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true
})

fastify.register(cors, {
    origin: '*'
})
fastify.register(userRoutes)
fastify.register(cardRoutes)

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})