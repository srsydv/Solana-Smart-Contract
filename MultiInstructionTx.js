import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    Keypair,
    PublicKey
} from "@solana/web3.js";
import { MemoProgram } from "@solana/spl-memo"; // Import memo program


// Public keys
const fromPubKey = new PublicKey("AQ2RxNLhwvsDHjDzEra7VohN7qmAJHDGYBMy48gBmJwM");
const toPubKey1 = new PublicKey("5oNJCWz97PKpNuTqo8A63Bjms1bDa8tNRskqBdE48TP3");


// Connection to Solana Devnet
const connection = new Connection("https://api.devnet.solana.com", "confirmed");


// Create a transaction
const transaction = new Transaction();


// Amount to send in lamports
const LAMPORTS_TO_SEND = 5000;


// First transfer instruction - sending SOL
const sendSolInstruction1 = SystemProgram.transfer({
    fromPubkey: fromPubKey,
    toPubkey: toPubKey1,
    lamports: LAMPORTS_TO_SEND
});
transaction.add(sendSolInstruction1);


// Second instruction - adding a memo
const memoInstruction = MemoProgram.writeUtf8(
    fromPubKey,
    "Hello from Solana transaction!"
);
transaction.add(memoInstruction);


// Secret key as Uint8Array
const secretKey = Uint8Array.from([
    35, 205, 86, 198, 18, 33, 90, 52, 166, 248, 167, 119, 35, 242, 27, 98,
    10, 228, 18, 124, 137, 129, 101, 99, 231, 17, 41, 77, 61, 121, 249, 82,
    139, 159, 40, 123, 171, 140, 234, 102, 21, 133, 151, 196, 84, 165, 12,
    17, 175, 25, 249, 42, 20, 169, 211, 238, 229, 214, 201, 50, 46, 128, 211, 212
]);


// Create sender Keypair
const senderKeyPair = Keypair.fromSecretKey(secretKey);


// Send and confirm transaction
(async () => {
    try {
        const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeyPair]);
        console.log("Transaction confirmed with signature:", signature);
        console.log(`Explorer URL: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
    } catch (error) {
        console.error("Transaction failed:", error);
    }
})();


