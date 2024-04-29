"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandInMemoryService = exports.BandInMemoryService = void 0;
const schemas_1 = require("../schemas");
const bandsDB = [];
const genNextId = () => {
    const lastBand = bandsDB.sort((a, b) => a.id - b.id).at(-1);
    if (lastBand) {
        return lastBand.id + 1;
    }
    return 1;
};
class BandInMemoryService {
    list = async () => {
        console.log("LIST BAND IN MEMORY SERVICE");
        return schemas_1.bandSchema.array().parse(bandsDB);
    };
    create = async (payload) => {
        const newBand = {
            id: genNextId(),
            foundedAt: payload.foundedAt || null,
            ...payload,
        };
        bandsDB.push(newBand);
        console.log("CREATE BAND IN MEMORY SERVICE");
        return schemas_1.bandSchema.parse(newBand);
    };
}
exports.BandInMemoryService = BandInMemoryService;
exports.bandInMemoryService = new BandInMemoryService();
