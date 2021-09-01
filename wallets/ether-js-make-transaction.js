// import ethers.js
const ethers = require('ethers')


let privateKey = '0x.....'
let senderAddress = '0x........'


// let privateKey = '0x.....'
// let senderAddress = '0x.....'


// network: using the Rinkeby testnet
// let network = 'rinkeby'
let network = null

// provider: Infura or Etherscan will be automatically chosen
let provider = ethers.getDefaultProvider(network)

// Create a wallet instance
let wallet = new ethers.Wallet(privateKey, provider)

let receiverAddress = '0x.......'

// Ether amount to send
let originalAmountInEther = '0.0004'


function sendTokens(originalAmountInEther, receiverAddress, senderAddress) {

    const transaction = {
        from: senderAddress,
        to: receiverAddress,
        value: ethers.utils.parseEther(originalAmountInEther),
        //nonce: provider.getTransactionCount(senderAddress, "latest")
    }
    console.dir(transaction)
    try {
        wallet.sendTransaction(transaction).then((transactionReceipt) => {
            console.dir(transactionReceipt)
            console.log("Send finished!")
        })
    } catch (error) {
        console.error("Failed to send!!", error)
    }
}

sendTokens(originalAmountInEther, receiverAddress, senderAddress)

// let sendTransaction = true

// console.log(ethers.utils.parseUnits("0.001", "gwei"));

// wallet.estimateGas(tx)
//     .then((estimateObj) => {
//        let gasLimitAsBigNumber = ethers.BigNumber.from(estimateObj)
//        let originalAmountInEtherAsBigNumber = ethers.utils.parseEther(originalAmountInEther)
//        console.log('originalAmountInEther: ', originalAmountInEther)
//        console.log('originalAmountInEtherAsBigNumber: ', originalAmountInEtherAsBigNumber)
//
//        let sendableAmountAsBigNumber = originalAmountInEtherAsBigNumber.sub(gasLimitAsBigNumber)
//        console.log('Estimated transaction gas limit: ', gasLimitAsBigNumber)
//        console.log('sendableAmountAsBigNumber: ', sendableAmountAsBigNumber)
//     })
//
// wallet.estimateGas(tx)
//     .then((estimateObj) => {
//         let gasLimitAsBigNumber = ethers.BigNumber.from(estimateObj)
//         let originalAmountInEtherAsBigNumber = ethers.utils.parseEther(originalAmountInEther)
//         console.log('originalAmountInEther: ', originalAmountInEther)
//         console.log('originalAmountInEtherAsBigNumber: ', originalAmountInEtherAsBigNumber)
//
//         let sendableAmountAsBigNumber = originalAmountInEtherAsBigNumber.sub(gasLimitAsBigNumber)
//         console.log('Estimated transaction gas limit: ', gasLimitAsBigNumber.toString)
//         console.log('sendableAmountAsBigNumber: ', sendableAmountAsBigNumber)
//
//         if (sendTransaction) {
//            console.log('ATTENTION: about to send transaction ...')
//
//            tx.value = sendableAmountAsBigNumber.sub(gasLimitAsBigNumber)
//            tx.gasLimit = gasLimitAsBigNumber
//            console.log('Final transaction object before sending: ', tx)
//
//            wallet.sendTransaction(tx)
//                .then((txObj) => {
//                   // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
//                   // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
//                   console.log('Sent transaction. TxHash: ', txObj.hash)
//                   return Promise.resolve(txObj);
//                })
//         } else {
//            console.log('ATTENTION: sending transaction is disabled')
//            return Promise.resolve(estimateObj);
//         }
//     })


// function sendTokens(originalAmountInEther, receiverAddress, senderAddress, privateKey) {
//
//     let originalTokensAmount = ethers.utils.parseEther(originalAmountInEther)
//
//     provider.getGasPrice().then((currentGasPrice) => {
//         let sendableTokensAmount = originalTokensAmount.sub(currentGasPrice)
//
//         const transaction = {
//             from: senderAddress,
//             to: receiverAddress,
//             value: sendableTokensAmount,
//             nonce: provider.getTransactionCount(senderAddress, "latest"),
//             gasLimit: ethers.BigNumber.from("0x5208"), // 21000,
//             gasPrice: currentGasPrice
//         }
//         console.dir(transaction)
//         try {
//             wallet.sendTransaction(transaction).then((transactionReceipt) => {
//                 console.dir(transactionReceipt)
//                 console.log("Send finished!")
//             })
//         } catch (error) {
//             console.error("Failed to send!!", error)
//         }
//     })
// }
