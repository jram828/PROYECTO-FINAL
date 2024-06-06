import { Router } from "express";
import {
  getreviewsHandler,
  postreviewsHandler,
} from "../handlers/reviewsHandlers.js";

const reviewsRouter = Router();

reviewsRouter.get("/", getreviewsHandler);

reviewsRouter.post("/", postreviewsHandler);

export default reviewsRouter;
