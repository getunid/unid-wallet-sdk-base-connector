import { UNiDNotImplementedError } from "./error"
import { Id, MnemonicKeyringModel } from "./model"

interface Context<T> {
    client: T,
    encrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    decrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
}

export class BaseConnector<T> {
    protected context: Context<T>

    constructor(context: Context<T>) {
        this.context = context
    }

    public insert(payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>> {
        throw new UNiDNotImplementedError()
    }

    public update(id: string, payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>> {
        throw new UNiDNotImplementedError()
    }

    public findByDid(did: string): Promise<Id<MnemonicKeyringModel> | undefined> {
        throw new UNiDNotImplementedError()
    }

    public deleteById(payload: MnemonicKeyringModel): Promise<MnemonicKeyringModel> {
        throw new UNiDNotImplementedError()
    }
}