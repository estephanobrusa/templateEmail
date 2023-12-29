import { Router } from 'express';
import { registerTemplate } from './route.template';

const router = Router();

export const registerRoutes = () => {
    const router = Router();
    router.use('/', registerTemplate());

    return router;
};

export default registerRoutes;