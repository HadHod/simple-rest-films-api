import express, { Router, Response, Request } from 'express';
import { getFilms } from '../db/films';

const router: Router = express.Router();

/**
 * @api {get} /api/films Request Films list
 * @apiName GetFilms
 * @apiGroup Films
 *
 * @apiSuccess {Film[]} list of objects of the Film.
 */
router.get('/films', (_req: Request, res: Response) => {
    res.json(getFilms());
});

/**
 * @api {get} /api/films/:id Request User information
 * @apiName GetFilms
 * @apiGroup Films
 *
 * @apiParam {Number} id Films unique ID.
 *
 * @apiSuccess {Film} objects of the Film.
 */
router.get('/films/:id', (req: Request, res: Response) => {
    const film = getFilms().find(f => f.id === req.params.id);
    if (film) {
        res.json(film);
    } else {
        res.status(404).send(`No film with id: ${req.params.id}`);
    }
    
});

export default router;
