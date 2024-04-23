import { hash } from "bcrypt";
import { prisma } from "../database/database";
import { AccountPayloadCreate, AccountReturn, IAccountService } from "../interfaces/account.interfaces";
import { accountReturnSchema } from "../schemas";

export class AccountService implements IAccountService {
    private account = prisma.account;

    public isUsernameUnique = async (username: string): Promise<boolean> =>  {
        const foundUser = await this.account.findFirst({ where: { username } })

        return Boolean(foundUser);
    };

    public list = async (): Promise<Array<AccountReturn>> => {
        const accounts = await this.account.findMany();

        return accountReturnSchema.array().parse(accounts);
    };

    public create = async (
        payload: AccountPayloadCreate
      ): Promise<AccountReturn> => {
        payload.password = await hash(payload.password, 10);

        const newAccount = await this.account.create({ data: payload });

        return accountReturnSchema.parse(newAccount);
    };

    public retrieve = async (accountId: number): Promise<AccountReturn> => {
        const account = await this.account.findFirst({ where: { id: accountId }});

        return accountReturnSchema.parse(account);
    };

};

export const accountService = new AccountService();