import { FastifyInstance } from "fastify";
import { checkNumber } from "../middleware/check_number";
import { calculateRoute } from "./controllers/calculate";
import { resultRoute } from "./controllers/result";

export async function appRoutes(app: FastifyInstance) {
  app.get("/result", resultRoute);
  app.post(
    "/calculate",{preHandler: [checkNumber]},calculateRoute);
}
