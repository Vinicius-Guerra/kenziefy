"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionReturnSchema = exports.sessionBodyCreateSchema = exports.accountReturnSchema = exports.accountPayloadCreateSchema = exports.accountSchema = exports.musicianPayloadSchema = exports.musicianBodyCreateSchema = exports.musicianSchema = exports.trackBodyCreateSchema = exports.trackRetrieveSchema = exports.trackPayloadSchema = exports.trackSchema = exports.albumPayloadCreateSchema = exports.albumSchema = exports.bandPayloadCreateSchema = exports.bandSchema = void 0;
var band_schemas_1 = require("./band.schemas");
Object.defineProperty(exports, "bandSchema", { enumerable: true, get: function () { return band_schemas_1.bandSchema; } });
Object.defineProperty(exports, "bandPayloadCreateSchema", { enumerable: true, get: function () { return band_schemas_1.bandPayloadCreateSchema; } });
var album_schemas_1 = require("./album.schemas");
Object.defineProperty(exports, "albumSchema", { enumerable: true, get: function () { return album_schemas_1.albumSchema; } });
Object.defineProperty(exports, "albumPayloadCreateSchema", { enumerable: true, get: function () { return album_schemas_1.albumPayloadCreateSchema; } });
var track_schemas_1 = require("./track.schemas");
Object.defineProperty(exports, "trackSchema", { enumerable: true, get: function () { return track_schemas_1.trackSchema; } });
Object.defineProperty(exports, "trackPayloadSchema", { enumerable: true, get: function () { return track_schemas_1.trackPayloadSchema; } });
Object.defineProperty(exports, "trackRetrieveSchema", { enumerable: true, get: function () { return track_schemas_1.trackRetrieveSchema; } });
Object.defineProperty(exports, "trackBodyCreateSchema", { enumerable: true, get: function () { return track_schemas_1.trackBodyCreateSchema; } });
var musician_schema_1 = require("./musician.schema");
Object.defineProperty(exports, "musicianSchema", { enumerable: true, get: function () { return musician_schema_1.musicianSchema; } });
Object.defineProperty(exports, "musicianBodyCreateSchema", { enumerable: true, get: function () { return musician_schema_1.musicianBodyCreateSchema; } });
Object.defineProperty(exports, "musicianPayloadSchema", { enumerable: true, get: function () { return musician_schema_1.musicianPayloadSchema; } });
var account_schemas_1 = require("./account.schemas");
Object.defineProperty(exports, "accountSchema", { enumerable: true, get: function () { return account_schemas_1.accountSchema; } });
Object.defineProperty(exports, "accountPayloadCreateSchema", { enumerable: true, get: function () { return account_schemas_1.accountPayloadCreateSchema; } });
Object.defineProperty(exports, "accountReturnSchema", { enumerable: true, get: function () { return account_schemas_1.accountReturnSchema; } });
var session_schemas_1 = require("./session.schemas");
Object.defineProperty(exports, "sessionBodyCreateSchema", { enumerable: true, get: function () { return session_schemas_1.sessionBodyCreateSchema; } });
Object.defineProperty(exports, "sessionReturnSchema", { enumerable: true, get: function () { return session_schemas_1.sessionReturnSchema; } });
