export interface HexKeyPair {
    public : string,
    private: string,
}

export type Id<T> = T & { _id: string }

export interface MnemonicKeyringModel {
    did?     : string,
    sign     : HexKeyPair,
    update   : HexKeyPair,
    recovery : HexKeyPair,
    encrypt  : HexKeyPair,
    mnemonic?: string,
    seed     : string,
}

export abstract class BaseConnector {
    abstract insert(payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>>
    abstract update(id: string, payload: MnemonicKeyringModel): Promise<Id<MnemonicKeyringModel>>
    abstract findByDid(did: string): Promise<Id<MnemonicKeyringModel> | undefined>
    abstract deleteById(payload: MnemonicKeyringModel): Promise<MnemonicKeyringModel>
}