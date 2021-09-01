# Ethereum Paper Wallet


There are two Ethereum Paper Wallets standalone HTML under [wallets/](wallets/): 

1. [wallets/ethaddress.org-SHA256-51c0c2e3a517c55d9ab79ebf260490308d536a21931430f8b5f143dd4ce64eec.zip](wallets/ethaddress.org-SHA256-51c0c2e3a517c55d9ab79ebf260490308d536a21931430f8b5f143dd4ce64eec.zip) - the good work at: https://github.com/ryepdx/ethaddress.org/pull/37

2. [wallets/bip39-standalone-SHA256-2c09ab47dde66488fc1b115fbac107952c3519fa4ea8d2945605dc631a502b5d.html](wallets/bip39-standalone-SHA256-2c09ab47dde66488fc1b115fbac107952c3519fa4ea8d2945605dc631a502b5d.html) - the good work of [@iancoleman](https://github.com/iancoleman) at: https://github.com/iancoleman/bip39/releases/tag/0.5.3.

   *Do note*: the SHA-256 in the aforementioned HTML filename (i.e.: `2c09ab47dde66488fc1b115fbac107952c3519fa4ea8d2945605dc631a502b5d`) is different to the SHA-256 in Ian's [release page](https://github.com/iancoleman/bip39/releases/tag/0.5.3) (i.e.: `ea1884e523aede48e48806f165a614d272ea62dd411c05634c14e217d62032a7`) because I [modified the HTML page](https://github.com/azagniotov/ethereum-paper-wallet/commit/f37c4912e28bac9856281096f81513234323040d) to enable printable view for the generated key pairs which include also the respective QR codes, inspired by https://github.com/pointbiz/bitaddress.org.

   The modifications are not the most elegant code, so please excuse me for that. Check git history to see what has changed for the bip39-standalone HTML

## How to use

Follow the following guide https://forkdrop.io/running-bitaddress-tool-on-secure-offline-tails-system explaing how to use https://github.com/pointbiz/bitaddress.org on Tails OS. The approach to use the Ethereum Paper Wallet standalone HTML is the same as for the `bitaddress.org` in the article.

## Handling & safety

To safeguard the generated wallets you must print or otherwise record the Ethereum address and private key. It is important to make a backup copy of the private key and store it in a safe location.

If you are familiar with PGP you can download the ZIP archive containing all-in-one index HTML page and check that you have an authentic version from the author of the current repository by matching the SHA256 hash of the ZIP archive and the included within index HTML with the SHA256 hash available in the their file names.

If you leave/refresh the all-in-one index HTML page or press the "Generate Wallet!" button then a new private key will be generated and the previously displayed private key will not be retrievable. Your Ethereum private key should be kept a secret. Whomever you share the private key with has access to spend all the Eth coins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.
