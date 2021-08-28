# Ethereum Paper Wallet

The Ethereum Paper Wallet standalone HTML is based on the good work at: https://github.com/ryepdx/ethaddress.org/pull/37

## How to use

Follow the following guide https://forkdrop.io/running-bitaddress-tool-on-secure-offline-tails-system explaing how to use https://github.com/pointbiz/bitaddress.org on Tails OS. The approach to use the Ethereum Paper Wallet standalone HTML is the same as for the `bitaddress.org` in the article.

## Handling & safety

To safeguard the generated wallets you must print or otherwise record the Ethereum address and private key. It is important to make a backup copy of the private key and store it in a safe location.

If you are familiar with PGP you can download the ZIP archive containing all-in-one index HTML page and check that you have an authentic version from the author of the current repository by matching the SHA256 hash of the ZIP archive and the included within index HTML with the SHA256 hash available in the their file names.

If you leave/refresh the all-in-one index HTML page or press the "Generate Wallet!" button then a new private key will be generated and the previously displayed private key will not be retrievable. Your Ethereum private key should be kept a secret. Whomever you share the private key with has access to spend all the Eth coins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.
