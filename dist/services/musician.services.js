"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicianService = void 0;
const database_1 = require("../database/database");
const schemas_1 = require("../schemas");
class MusicianService {
    musician = database_1.prisma.musician;
    create = async (payload) => {
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
        };
        return schemas_1.musicianSchema.parse(newMusician);
    };
}
exports.MusicianService = MusicianService;
