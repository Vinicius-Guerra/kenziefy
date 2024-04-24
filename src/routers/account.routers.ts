import { Router } from "express";
import { AccountControllers } from "../controllers";
import { accountService } from "../services/account.services";
import { auth, ensure, ensureAccount } from "../middlewares";
import { accountPayloadCreateSchema } from "../schemas";

export const accountRouter = Router();

const accountControllers = new AccountControllers(accountService);

accountRouter.post("", ensure.bodyIsValid(accountPayloadCreateSchema), ensureAccount.usernameIsUnique(accountService), accountControllers.create);

accountRouter.get("", accountControllers.list);

accountRouter.get("/:accountId",auth.isAuthenticated, auth.isAccountOwner, accountControllers.retrieve);

