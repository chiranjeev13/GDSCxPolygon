
## Installation

- Clone this Repository open it in VSCode(or any other editors) and then open terminal and run

```bash
  npm install --force
```

- After this is done succesfully
goto ```contracts``` folder and in the file ```demoERC20.sol``` 

```solidity
constructor() ERC20("Your_Name", "GDSC") {
    _decimals = 10 ** 18;
    mintTo = msg.sender;
  }
```
- in here Replace ```Your_Name``` with your first name "Dont add long names it might fail"

- Now rename the ```.env.sample``` to ```.env```
and open it 

- Replace ```PRIVATE_KEY= /*your private key here*/``` with your metamask private key of your account

then run ``` npx hardhat compile```

You should see ```Compiled 6 Solidity files successfully``` in the terminal

now run
```
npx hardhat run scripts/deploy.js --network "zkEVM_testnet"
```

- You should see something Like this

```Contract Address : 0x23F65252551D30cf8C77FFDdA2873F4835Bb476A (yours will be different)```

- The hex which will be generate is your ***Contract Address*** on zkEVM testnet

#### Woila !!! You have succesfully deployed your ERC20 smart Contract on Polygon zk-EVM.

- Now its time to mint the tokens in your account

To do that 

in ```scripts``` folder goto ```mint.js``` 

```javascript
const contractAddress = "/* your contract address */" ;
```

- put the ***contract address*** you just got above



```js
const amount = 20; /* amount of tokens to mint */
```
- put the no of tokens you want to mint

then run 
```bash 
npx hardhat run scripts/mint.js
```
- After succesfully executing you should see something simillar to this

```bash 
{
  nonce: 2,
  gasPrice: BigNumber { _hex: '0x02faf080', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x012b52', _isBigNumber: true },
  to: '0x23F65252551D30cf8C77FFDdA2873F4835Bb476A',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  data: '0xa0712d680000000000000000000000000000000000000000000000000000000000000014',
  chainId: 1442,
  v: 2920,
  r: '0x1853e445e8a227c9436764e250d4fda372ef036e9834357d49219d09c9206034',
  s: '0x7263d5e60668fcf6c8acf4ba5f57a4c20b6f62b842e151b81e1e2fc03a1ce8bf',
  from: '0x2D1c0c0d7a57dfeCb964B4D4C81BF5885e47588C',
  hash: '0x0f9042cb42146bfdb31793dcb62dddb7366ffe2896943ed9341f461a1bb25b59',
  type: null,
  confirmations: 0,
  wait: [Function (anonymous)]
}
```

- Now to Claim the **Giveaway Prize** you need to send me some of your Tokens

To do that 

- open ```transfer.js``` file in ```scripts``` put in your ***contract address*** just as you did in mint.js
```js
const contractAddress = "/* your contract address */";
```

- change the amount 
```js
const amount = ethers.utils.parseUnits("2"/* token amount */, 18);
```

and then run

```npx hardhat run scripts/transfer.js```

- if succesfully done you should see something like this 

```js
{
  nonce: 3,
  gasPrice: BigNumber { _hex: '0x02faf080', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0xd9b0', _isBigNumber: true },
  to: '0x23F65252551D30cf8C77FFDdA2873F4835Bb476A',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  data: '0xa9059cbb000000000000000000000000546f82f5ef2fd82f26ff8b5ef8ac9f14b953424e0000000000000000000000000000000000000000000000000000000000000002',
  chainId: 1442,
  v: 2920,
  r: '0x95ea106471d974beaacd9685428518781fdb9f61365807f6a0256a43844ac493',
  s: '0x0732298229e5a30f77c229c6f41ed00d7cba7fe408adce160b031971a916349f',
  from: '0x2D1c0c0d7a57dfeCb964B4D4C81BF5885e47588C',
  hash: '0xb1ee378f6d804130807b6056d80209902ad35be4a1038163e910524fc4316061',
  type: null,
  confirmations: 0,
  wait: [Function (anonymous)]
}
```


