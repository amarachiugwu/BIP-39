var ethers = require('ethers');  
var crypto = require('crypto');


// creating 5 addresses from a 5 random private keys
var addressList = [];
for (let index = 4; index < 5; index++) {
    
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    var wallet = new ethers.Wallet(privateKey);

    addressList.push({
        'privateKey':privateKey,
        'address':wallet.address,
    });

}

console.log(addressList);

// run node address in your console to print address and corresponding private key
