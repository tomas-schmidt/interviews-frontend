import { Router } from 'express';
import itemsRouter from './items.routes';
import { addToCart } from "../controllers/items";

const routes = Router();

routes.use('/', itemsRouter);
routes.post('/add-to-cart', async (req, res, next) => {
  await addToCart(req.body.item.id);
});

export default routes;