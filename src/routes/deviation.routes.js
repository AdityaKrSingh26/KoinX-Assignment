import { Router } from 'express';

import {
    deviationController
} from '../controllers/deviation.controllers.js';

const router = Router();

router.get('/', deviationController);

export default router;