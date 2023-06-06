import  express  from "express";
import { checkforemail, deleteproduct, login, otpchecknumber, product, register } from "../Controllers/UserController.js";


const router =express.Router();

router.post('/register',register);

router.post('/checkforemail',checkforemail);

router.post ('/otpchecknumber',otpchecknumber);

router.post('/login',login);

router.post('/product', product);

router.post('/deleteproduct',deleteproduct);



export default router;