import { Request, Response} from 'express'
import db from '../database/connection';

export default class ConnectionController{
    async index(req: Request, res: Response){
        try {
            const totalConnections = await db('connections').count('* as total');

            const { total } = totalConnections[0]
    
            return res.json({ total });
        } catch (err){
           return console.log(err)
        }
    }

    async create(req: Request, res: Response){
        try {
            const { user_id } = req.body;

            await db('connections').insert({
                user_id,
            })
            return res.status(201).send();
        }catch(err){
            console.log(err)
        }
        }
}
