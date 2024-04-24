import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/database";
import { status } from "../utils/httpStatusCode";

export class EnsureBandMiddleware {
    public bodyExists = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const foundBand = await prisma.band.findFirst({
            where: {
                id: req.body.bandId,
            },
        });

        if(!foundBand) {
            return res.status(status.HTTP_404_NOT_FOUND).json({ message: "Band not found." });
        };

        res.locals = { foundBand }

        return next();
    };
}

export const ensureBand = new EnsureBandMiddleware();