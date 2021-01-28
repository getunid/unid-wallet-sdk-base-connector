import { UNiDNotImplementedError, UNiDNotCompatibleError } from "./error"
import { Id, MnemonicKeyringModel } from "./model"

interface Context<T> {
    client: T,
    encrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    decrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    encryptionKey: string,
}

export class BaseConnector<T> {
    protected context: Context<T>

    constructor(context: Context<T>) {
        this.context = context

        if (typeof(context.encryptionKey) !== 'string') {
            throw new UNiDNotCompatibleError()
        }
        if (context.encryptionKey.length !== 64) {
            throw new UNiDNotCompatibleError()
        }
    }

    public async insert(payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>> {
        throw new UNiDNotImplementedError()
    }

    public async update(id: string, payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>> {
        throw new UNiDNotImplementedError()
    }

    public async findByDid(did: string): Promise<Id<MnemonicKeyringModel> | undefined> {
        throw new UNiDNotImplementedError()
    }

    public async deleteById(payload: MnemonicKeyringModel): Promise<MnemonicKeyringModel> {
        throw new UNiDNotImplementedError()
    }
}