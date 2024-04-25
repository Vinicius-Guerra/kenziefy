import { Router } from "express";
import { AccountControllers } from "../controllers";
import { AccountService, accountService } from "../services/account.services";
import { auth, ensure, ensureAccount } from "../middlewares";
import { accountPayloadCreateSchema } from "../schemas";
import { container } from "tsyringe";

export const accountRouter = Router();
container.registerSingleton("AccountService", AccountService);
const accountControllers = container.resolve(AccountControllers);

accountRouter.post(
    "",
    ensure.bodyIsValid(accountPayloadCreateSchema),
    accountControllers.create
);

accountRouter.get(
    "",
    // auth.isAuthenticated,
    // auth.isAccountOwner
    accountControllers.list
);

accountRouter.get(
    "/:accountId",
    auth.isAuthenticated,
    auth.isAccountOwner,
    accountControllers.retrieve
);

