import { prisma } from "../database/database";
import { Musician, MusicianPayload } from "../interfaces/musician.interfaces";
import { musicianSchema } from "../schemas";


export class MusicianService {
    private musician = prisma.musician;

    public create = async (payload: MusicianPayload): Promise<Musician> => {
        const newMusician = {
            firsName: payload.firstName,
            lastName: payload.lastName,
            groupMembers: {
                create: {
                    joined: payload.joined,
                    left: payload.left,
                    band: {
                        connect: {
                            id: payload.bandId
                        }
                    }
                }
            }
        }
        return musicianSchema.parse(newMusician);
    };
}
