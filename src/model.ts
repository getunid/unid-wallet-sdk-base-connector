export type Id<T> = T & { _id: string }

export interface HexKeyPair {
    public : string,
    private: string,
}

export interface MnemonicKeyringModel {
    did?     : string,
    sign     : HexKeyPair,
    update   : HexKeyPair,
    recovery : HexKeyPair,
    encrypt  : HexKeyPair,
    mnemonic?: string,
    seed     : string,
}