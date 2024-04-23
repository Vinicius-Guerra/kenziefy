import { prisma } from "../database/database";
import { Album, AlbumPayloadCreate } from "../interfaces/album.interfaces";
import { albumSchema } from "../schemas";

export class AlbumService {
    private album = prisma.album;

    public list = async (): Promise<Array<Album>> => {
        const albums = await this.album.findMany();

        return albumSchema.array().parse(albums);
    };

    public create = async (payload: AlbumPayloadCreate): Promise<Album> => {
        const newAlbum = await this.album.create({ data: payload });

        return albumSchema.parse(newAlbum);
    };


}