import express from 'express';
import { userSignup } from '../controller/userController.js';

const router =express.Router();

router.post('/signup', userSignup);

export default router;