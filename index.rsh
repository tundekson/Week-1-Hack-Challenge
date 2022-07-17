'reach 0.1'
'use strict'




// create the main Reach App here
export const main = Reach.App(() = {

    // define Alices Participant interact interface
    // which functions/values does just Alice need?
    // their signatures go here
    const Alice = Participant('Alice', {
		//specify Alice's interact interface here
      ...Common,
      getSwap: Fun([], Tuple(Token, UInt, Token, UInt, UInt)),
      getNft: Fun([], object({
        nftId: Token
      })),
      showAddress: Fun([Address], Null),
      getAddr: Fun([], Address),
	  });
   

    // define Bobs Participant interact interface
    // which functions/values does just Bob need?
    // their signatures go here
    const Bob = Participant('Bob', {
      ...Common,
      acceptSwap: Fun([Token, UInt, Token, UInt], Bool),
		//specify Bob's interact interface here
	  });
    
    
    // create a standard informTimeout function
    // have each Alice, Bob interact with the timeout
    const Common = {
      seeTimeout: Fun([], Null),
      seeTransfer: Fun([], Null),
    };
    

    // initialize your Reach app here
    init();

    // Alice only in her local step
    Alice.only(() => {
      const [ tokenA, amtA, tokenB, amtB, time ] = declassify(interact.getSwap());
      assume(tokenA != tokenB); });
    Alice.publish(tokenA, amtA, tokenB, amtB, time);
    commit();
    Alice.pay([ [amtA, tokenA] ]);
    // gets Bobs address from the front end
     const addr = getAddress();
    // gets asset ID from the front-end
    // sets the swap quantity
    // sets a deadline
    // don't forget to declassify this information
    
    // Alice publishes these values, pays her portion of the swap (asset)
    Alice.publish()
    // create a Set for bobsAddress here
    const bobsAddress = new Set();
    // use insert to insert the known address into the Set
    bobsAddress.insert(Bob);
 

    // commit to this information
    commit()

    // Bob only in his local step
    // check that this bob is the right address
    // prompt to accept or reject swap quantity
   
    // pay swap quantity
    // implement timeout here

    // make the transfer between Alice and Bob
   

    // commit to this information
    commit()

    
    // share results of swap with each Alice and Bob

}

