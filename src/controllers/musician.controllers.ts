import { Request, Response } from "express";
import { MusicianService } from "../services";
import { status } from "../utils/httpStatusCode";

export class MusicianControllers {
    private service = new MusicianService();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const payload = { ...req.body, bandId: Number(req.params.bandId) };
        const musician = await this.service.create(payload);
    
        return res.status(status.HTTP_201_CREATED).json(musician);
      };
};

export const musicianController = new MusicianControllers();