export function getBalanceEndpoint(wallet: string) {
    return `https://arweave.net/wallet/${wallet}/balance`;
}

export function getViewblockEndpoint(txId: string) {
    return `https://v2.viewblock.io/arweave/tx/${txId}`;
}

export function getTxEndpoint(txId: string) {
    return `https://arweave.net/${txId}`;
}