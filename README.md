# Hello World web
Simple hello world web application that uses an existing HelloWorld contract on testnet to demonstrate the easy of calling a script and gettin information from the Flow network. For this example the user does not need a wallet. If the user wanted to mutate chain data they would need a wallet to sign transactions. [More Information](https://developers.flow.com/)

# Web 
 The web layer uses nextjs and tailwind. This is not a requirement, developers can use any web technologies they want.

# Middle laryer FCL
FCL is used to communicate with the Flow network. [More information](https://developers.flow.com/tools/clients)

# Flow blockchain 
Flow runs on smart contracts written in Cadance. [More information](https://developers.flow.com/cadence)

# Getting started
```
git clone https://github.com/onflow/hello-world-web.git
cd hello-world-web
npm install
npm run dev

```
Open a web browser and go to `http://localhost:3000` to see the very simple UI. 
 - click the "Query Contract" button to use fcl to call the HelloWorld contract to get the greeting.
 - The greeting is displayed as the result

 That is very simple to call a smart contract.
 