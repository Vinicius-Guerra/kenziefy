import { prisma } from "../database/database";
import { Band, BandPayloadCreate, IBandService } from "../interfaces/band.interfaces";
import { bandSchema } from "../schemas";

export class BandServices implements IBandService {
    private band = prisma.band;

    public list = async (): Promise<Array<Band>> => {
        const bands = await this.band.findMany();

        return bandSchema.array().parse(bands);
    };

    public create = async (payload: BandPayloadCreate): Promise<Band> => {
        const newBand = await this.band.create({ data: payload });
        console.log(newBand);
    
        return bandSchema.parse(newBand);
      };
}

export const bandService = new BandServices();
