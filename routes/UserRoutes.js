import  express  from "express";
import { checkforemail, login, otpchecknumber, register } from "../Controllers/UserController.js";


const router =express.Router();

router.post('/register',register);

router.post('/checkforemail',checkforemail);

router.post ('/otpchecknumber',otpchecknumber);

router.post('/login',login)



export default router;