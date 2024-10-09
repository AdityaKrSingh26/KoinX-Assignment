import { Router } from 'express';

import {
    statsController
} from '../controllers/stats.controllers.js';

const router = Router();

router.get('/', statsController);

export default router;