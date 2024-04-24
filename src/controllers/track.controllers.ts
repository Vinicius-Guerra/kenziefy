import { Request, Response } from "express";
import { TrackService } from "../services";
import { status } from "../utils/httpStatusCode";

export class TrackControllers {
    private service = new TrackService();

    public list = async (req: Request, res: Response): Promise<Response> => {
        const tracks = this.service.list();
        return res.status(status.HTTP_200_OK).json(tracks);
    };

    public listByAlbum = async (req: Request, res: Response): Promise<Response> => {
        const albumId = Number(req.params.id);
        const tracks = await this.service.listByAlbumId(albumId);

        return res.status(status.HTTP_200_OK).json(tracks);
    };

    public create = async (req: Request, res: Response): Promise<Response> => {
        const payload = { ...req.body, albumId: Number(req.params.id) };
        const track = await this.service.create(payload);

        return res.status(status.HTTP_201_CREATED).json(track);
    };

    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const trackId = Number(req.params.trackId);
    
        const tracks = await this.service.retrieve(trackId);
        return res.status(status.HTTP_200_OK).json(tracks);
    };
}

export const trackController = new TrackControllers();