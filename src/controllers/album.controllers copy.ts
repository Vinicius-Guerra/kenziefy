import { Request, Response } from "express";
import { AlbumService } from "../services";
import { status } from "../utils/httpStatusCode";



export class AlbumControllers {
    
    private service = new AlbumService();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const album = await this.service.create(req.body);

        return res.status(status.HTTP_201_CREATED).json(album);
    };

    public list = async (req: Request, res: Response): Promise<Response> => {
        const albums = await this.service.list();

        return res.status(status.HTTP_200_OK).json(albums);
    };
};

export const albumController = new AlbumControllers();