import { Router, Request, Response } from 'express';

const router = Router();

export const registerTemplate = () => {
    const router = Router();

    router.get('/', async (req: Request, res: Response) => {
        res.status(200).json({ "hey": "there" });
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const id = req.params.id;
        res.status(200).json({ "id": id });
    });

    router.post('/', async (req: Request, res: Response) => {
        const body = req.body;
        res.status(200).json(body);
    });

    router.put('/:id', async (req: Request, res: Response) => {
        const body = req.body;
        res.status(200).json(body);
    });

    return router;
};