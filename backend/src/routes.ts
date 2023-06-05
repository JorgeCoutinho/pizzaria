import { Router } from "express";
import multer from "multer";
import { CreateUserControllers } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { isAuthenticadet } from "./middleware/isAuthenticadet";

import uploadConfig from './config/multer';

//const uploud = multer(uploadConfig.uploud("./tmp"))
const upload = multer(uploadConfig.upload("./tmp"));



const router = Router();



//-- Rotas --
router.post('/users', new CreateUserControllers().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticadet, new DetailUserController().handle)

//-- ROTAS CATEGORY
router.post('/category', isAuthenticadet, new CreateCategoryController().handle)
router.get('/categgory', isAuthenticadet, new ListCategoryController().handle)

//-ROTAS PRODUCT
router.post('/product', isAuthenticadet, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticadet, new ListByCategoryController().handle)

export { router };







