// necessary imports
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

// don’t forget ask if prompting terminal inputs
console.log("Are you accepting terminal inputs? ");

// create getBalance arrow function here
// store it in a const
const getBalance = async (tokenX, who) => {
  const amt = await stdlib.balanceOf(who, tokenX.id);
  return `${fmt(amt)} ${tokenX.sym}`; };

// Get token balance of the participants
const getBalances = async (who) =>
`${await getBalance(tokenA, who)} & ${await getBalance(tokenB, who)}`;


// set constant for stdlib
const stdlib = loadStdlib();

// use ask to check who is calling the contract

// conditional for who is calling
// display to console the result

// create startingBalance constant
// don't forget to parseCurrency
startingBalance = stdlib.parseCurrency(100);

// create new test account
// store it in a constant for the account
console.log("Creating a test account for Alice and Bob");
const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

console.log("Launching...");

// check beforeBalance
// Get the intial balance of the participants
const beforeAlice = await getBalances(accAlice);
const beforeBob = await getBalances(accBob);

// log account information + balance to the console
console.log(`Alice has ${beforeAlice}`);
console.log(`Bob has ${beforeBob}`);

// create NFT ID via launchToken here
// supply: 1
const zNFT = await stdlib.launchToken(accAlice, "mecky", "NFT", { supply: 1});
const nftId = zNFT.id;

const params = {nftId};

// conditional to determine the contract caller
// set the contract information depending on Deployer or Attacher
if ( trusted ) {
  console.log(`Alice transfers to Bob honestly`);
  await stdlib.transfer(accAlice, accBob, amtA, tokenA.id);
  console.log(`Bob transfers to Alice honestly`);
  await stdlib.transfer(accBob, accAlice, amtB, tokenB.id);
} else {
  console.log(`Alice will deploy the Reach DApp.`);
  const ctcAlice = accAlice.contract(backend);
  console.log(`Bob attaches to the Reach DApp.`);
  const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// create Common participant interact interfact
  let success = undefined;
  const Common = (who) => ({
      seeTimeout: () => {
        success = false;
        console.log(`${who} saw a timeout`); },
      seeTransfer: () => {
        success = true;
        console.log(`${who} saw the transfer happened`); },
    });

// create interact interfaces here
// these should mirror each Participants relevant backend functins / values
let interact;
if (isAlice) {
  // Alice interact interface goes here
} else {
  // Bobs interact interface goes here
}

// check which participant is calling
// attach appropriate backend
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log("Starting backends...");

// await participant interact function

// calculate after balance
const afterAlice = await getBalances(accAlice);
const afterBob = await getBalances(accBob);

// display balance
// Alice and Bob balance after the transaction
console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}`);

// done asking

