import express from 'express';
import { newAdress, showData } from '../controllers/mainController.js';

const router = express.Router();

router.route("/add").post(newAdress);

router.route("/show").get(showData);

export default router;