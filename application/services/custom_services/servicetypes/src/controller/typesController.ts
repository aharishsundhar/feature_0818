import { Request, Response } from 'express';
import { typesService } from '../service/typesService';
import { CustomLogger } from '../config/Logger'
let types = new typesService();

export class typesController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
types.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
types.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpCreate');
    })}


}