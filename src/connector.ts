import { Id, MnemonicKeyringModel } from "./model"

interface Context<T> {
    client: T,
    encrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    decrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
}

export abstract class BaseConnector<T> {
    protected context: Context<T>

    constructor(context: Context<T>) {
        this.context = context
    }

    abstract insert(payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>>
    abstract update(id: string, payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>>
    abstract findByDid(did: string): Promise<Id<MnemonicKeyringModel> | undefined>
    abstract deleteById(payload: MnemonicKeyringModel): Promise<MnemonicKeyringModel>
}