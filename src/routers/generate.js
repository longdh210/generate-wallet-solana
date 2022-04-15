const { Keypair } = require("@solana/web3.js");
const { binary_to_base58 } = require('base58-js');
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    let keypair = Keypair.generate();
    const privateKey = binary_to_base58(keypair.secretKey);
    const wallet = {
        publicKey: keypair.publicKey.toBase58(),
        privateKey: privateKey
    }
    res.json(wallet);
})

module.exports = router;