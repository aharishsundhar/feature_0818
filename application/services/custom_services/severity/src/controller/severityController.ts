import { Request, Response } from 'express';
import { severityService } from '../service/severityService';
import { CustomLogger } from '../config/Logger'
let severity = new severityService();

export class severityController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
severity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
severity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpCreate');
    })}


}