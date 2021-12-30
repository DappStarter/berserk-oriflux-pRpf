require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note saddle essay grid glove fun gentle'; 
let testAccounts = [
"0x7dec67d14ca957437b5e7a0660ccbcb114c9065ffffa351faf7262e1a3923962",
"0x82eec5daa22ee2b70db00a5470a6f69c5c405461f614bc7589d00f33c47409bf",
"0x1499ee1b7de974db0b871622523b691bf70db5ec01f213ddfc76ed9428de39c2",
"0x8d1cf5d0497a147b692f6d80a6055dd9e1fc7e890a8fc5b9d012bbd58f1b582e",
"0x88b5f3892291f2d2ff4be2c9340b9fcaa824362f730ef261301d95a1808bd351",
"0x9c3a3001d63108a7b3666d07d2c2597852b34e4c201e64c4d5f9c76ea72241f8",
"0x073adfca9299db530a7c0af6814cb5d78518af975221fa43f79b6cd323a21c9d",
"0x5caf6ea2276501c16b6b2022783fc48bfbd0783fb0c344857061915d5791c46c",
"0xe78418bd23c47cfa44eeb96a6cda69595a1b6f525d598fe705e0a8d2b7b078a2",
"0x68b2e079d3e7ac089e2f8f6eaec8f454f60fdcf3630e6733e0f6709778f4495d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


