import { Router} from "express";
import { CreateUserControllers } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { isAuthenticadet } from "./middleware/isAuthenticadet";


const router = Router();

//-- Rotas --
router.post('/users', new CreateUserControllers().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAuthenticadet, new DetailUserController().handle)

//-- ROTAS CATEGORY
router.post('/category', isAuthenticadet, new CreateCategoryController().handle )

export { router };






