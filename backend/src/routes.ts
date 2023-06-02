import { Router } from "express";
import { CreateUserControllers } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { isAuthenticadet } from "./middleware/isAuthenticadet";


const router = Router();

//-- Rotas --
router.post('/users', new CreateUserControllers().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticadet, new DetailUserController().handle)

//-- ROTAS CATEGORY
router.post('/category', isAuthenticadet, new CreateCategoryController().handle)
router.get('/categgory', isAuthenticadet, new ListCategoryController().handle)

//-ROTAS PRODUCT
router.post('/product', isAuthenticadet, new CreateProductController().handle)


export { router };







