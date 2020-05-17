import express, { Router, Response, Request } from 'express';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('Hello world!');
});

export default router;
