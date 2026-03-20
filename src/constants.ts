/**
 * network identifiers for Lightning Network (Bitcoin)
 */
export const LIGHTNING_MAINNET_CAIP2 = "bip122:000000000019d6689c085ae165831e93";
export const LIGHTNING_TESTNET_CAIP2 = "bip122:000000000933ea01ad0ee984209779ba";

/**
 * Supported Lightning network CAIP-2 identifiers
 */
export const LIGHTNING_NETWORKS = [LIGHTNING_MAINNET_CAIP2, LIGHTNING_TESTNET_CAIP2] as const;

/**
 * The asset identifier for satoshis (smallest Bitcoin unit)
 */
export const LIGHTNING_ASSET = "BTC";

/**
 * Supported x402 protocol version
 */
export const SUPPORTED_X402_VERSION = 2;
