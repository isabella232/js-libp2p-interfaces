export type InMessage = {
    from?: string | undefined;
    receivedFrom: string;
    topicIDs: string[];
    seqno?: Uint8Array | undefined;
    data: Uint8Array;
    signature?: Uint8Array | undefined;
    key?: Uint8Array | undefined;
};
export type PublicKey = import("libp2p-crypto").PublicKey;
/**
 * Returns the PublicKey associated with the given message.
 * If no, valid PublicKey can be retrieved an error will be returned.
 *
 * @param {InMessage} message
 * @returns {Promise<PublicKey>}
 */
export function messagePublicKey(message: InMessage): Promise<PublicKey>;
/**
 * Signs the provided message with the given `peerId`
 *
 * @param {PeerId} peerId
 * @param {Message} message
 * @returns {Promise<Message>}
 */
export function signMessage(peerId: import("peer-id"), message: any): Promise<any>;
export const SignPrefix: any;
/**
 * Verifies the signature of the given message
 *
 * @param {InMessage} message
 * @returns {Promise<boolean>}
 */
export function verifySignature(message: InMessage): Promise<boolean>;
//# sourceMappingURL=sign.d.ts.map