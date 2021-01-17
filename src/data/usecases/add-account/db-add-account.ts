import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount
{
  private readonly encrypt: Encrypter

  constructor(encryptor: Encrypter)
  {
    this.encrypt = encryptor
  }

  async add(account: AddAccountModel): Promise<AccountModel>
  {
    await this.encrypt.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
