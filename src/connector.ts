import { UNiDNotImplementedError, UNiDNotCompatibleError } from "./error"
import { Id, MnemonicKeyringModel } from "./model"

interface Context<T> {
    client: T,
    encrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    decrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    encryptionKey: string,
}

interface InternalContext<T> {
    client: T,
    encrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    decrypter(content: Buffer, secret: Buffer): Promise<Buffer>,
    secret: Buffer,
}

export abstract class Connector {
    abstract insert(payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>>
    abstract update(id: string, payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>>
    abstract findByDid(did: string): Promise<Id<MnemonicKeyringModel> | undefined>
    abstract deleteById(payload: MnemonicKeyringModel): Promise<MnemonicKeyringModel>
}

export class BaseConnector<T> implements Connector {
    protected context: InternalContext<T>

    constructor(context: Context<T>) {
        if (typeof(context.encryptionKey) !== 'string') {
            throw new UNiDNotCompatibleError()
        }
        if (context.encryptionKey.length !== 64) {
            throw new UNiDNotCompatibleError()
        }

        this.context = {
            client   : context.client,
            encrypter: context.encrypter,
            decrypter: context.decrypter,
            secret   : Buffer.from(context.encryptionKey, 'hex'),
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