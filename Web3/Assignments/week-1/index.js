const crypto = require('crypto');

let arr[];
for(let i=0; i<5;i++){


    arr.push(i);



const hash = crypto.createHash('sha256').update(arr[i]).digest('hex');

}
console.log(hash);