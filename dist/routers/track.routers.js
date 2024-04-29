"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackRouter = void 0;
const express_1 = require("express");
const track_controllers_1 = require("../controllers/track.controllers");
exports.trackRouter = (0, express_1.Router)();
const trackController = new track_controllers_1.TrackControllers();
exports.trackRouter.get("", trackController.list);
exports.trackRouter.get("/:trackId", trackController.retrieve);
