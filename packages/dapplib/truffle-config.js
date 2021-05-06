require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name release sad solid include arena equal genius'; 
let testAccounts = [
"0xae018d9dd012a1bd51a9e3574a099ab1a4c100985cc7ab9f4d8f9e646495e86a",
"0x5aec4b4856b93569d3d1d3e31e0d6361d3892fc828698389e089e2654bdac8ac",
"0x811ca896d86563b3eb237c303153bc8b149d99c56c1cf15d7d1abaa2f6b7408b",
"0x37a16cc93db8614d59b023dd51f24de995154f964e494bf5c95f08657b5d33c7",
"0x10835c96d7bfab4599eaac5a012c8885d55a549750a2943957007bbea3bdb7f4",
"0xa4ae3e134194c9e9d8405806c6da04eea58b8a4f0405cccf7d297fab4e4f39de",
"0x2d238d1b85389392b3a1abfd3ab60ba86bda99e70f43879eac51c58489ef0678",
"0x9317a64d0e5e54b51f20687cfb8a76bac7d1ae8aae59276b46f250bd0e3ccc28",
"0x79e481b265c97fed6882179b39a8b029000f81a0264c6fa2362c35753af2eaae",
"0x8560bf7fd78d68b168c414c127bdcacc49693638e5738d72c8d65e813e2e7ee6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
