import express, { Router, Response, Request } from 'express';
import films from '../db/films';

const router: Router = express.Router();

router.get('/movies', (_req: Request, res: Response) => {
    res.json(films);
});

router.get('/movies/:id', (req: Request, res: Response) => {
    const film = films.find(f => f.id === req.params.id);
    if (film) {
        res.json(film);
    } else {
        res.status(404).send(`No film with id: ${req.params.id}`);
    }
    
});

export default router;
