"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = require("express");
const account_controllers_1 = require("../controllers/account.controllers");
const account_services_1 = require("../services/account.services");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const ensure_middleware_1 = require("../middlewares/ensure.middleware");
const schemas_1 = require("../schemas");
const tsyringe_1 = require("tsyringe");
exports.accountRouter = (0, express_1.Router)();
tsyringe_1.container.registerSingleton("AccountService", account_services_1.AccountService);
const accountControllers = tsyringe_1.container.resolve(account_controllers_1.AccountControllers);
exports.accountRouter.post("", ensure_middleware_1.ensure.bodyIsValid(schemas_1.accountPayloadCreateSchema), accountControllers.create);
exports.accountRouter.get("", 
// auth.isAuthenticated,
// auth.isAccountOwner
accountControllers.list);
exports.accountRouter.get("/:accountId", auth_middleware_1.auth.isAuthenticated, auth_middleware_1.auth.isAccountOwner, accountControllers.retrieve);
