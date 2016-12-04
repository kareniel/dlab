const crypto = require('crypto')
const sha = d => crypto.createHash('sha256').update(d).digest('hex')
const ripemd = d => crypto.createHash('ripemd160').update(d).digest('hex')

const hash256 = d => sha(sha(d)).toString()
const hash160 = d => ripemd(sha(d))

let h = hash256(process.argv[2])
console.log(h)

// const blockId = hash256(block.header)
// const transactionId = hash256(transaction)