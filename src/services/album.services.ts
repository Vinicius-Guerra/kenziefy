import { Album } from "@prisma/client";
import { prisma } from "../database/database";
import { albumSchema } from "../schemas";

export class AlbumService {
    private album = prisma.album;

    public list = async (): Promise<Array<Album>> => {
        const albums = await this.album.findMany();

        return albumSchema.array().parse(albums);
    }
}