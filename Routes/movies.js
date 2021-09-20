import express from 'express';
import {homeroute,add_movie,update_movie} from './render.js';
const router = express.Router();

router.get('/mymovies',homeroute)

router.get('/add-movie',add_movie)

router.get('/update-movie',update_movie)

export default router;