import express from 'express';
import { logInAdmin, logoutAdmin, signUpAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/signupAdmin', signUpAdmin); //

router.post('/loginAdmin', logInAdmin); //
 
router.post('/logoutAdmin', logoutAdmin); //

export default router;