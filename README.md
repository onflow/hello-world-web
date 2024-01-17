This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
# or
yarn dev
```

## Cadence

How to use remote FLIX template json files

## Generate
Using a separate HelloWorld repository [HelloWorld FLIX](https://github.com/onflow/hello-world-flix/)

Use these urls to create cadence binding files
- https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/ReadHelloWorld.template.json
- https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/UpdateHelloWorld.template.json


### Read HelloWorld greeting

Read the HelloWorld greeting. The following command will generate a binding file aka `package` file in TypeScript, javaScript is also supported.
```shell
flow flix package https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/ReadHelloWorld.template.json --lang ts --save cadence/readHelloWorld.ts
```

### Update HelloWorld greeting
As another example, generate TypeScript to update the HelloWorld greeting
```shell
flow flix package https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/UpdateHelloWorld.template.json --lang ts --save cadence/updateHelloWorld.ts
```
This commands were run form the `app` directory but can be run as part of a build process and `--save` tells the command where to store the resulting files

### Releases
`hello-world-flix` uses releases so the template files have been versioned. This makes the template files more reliable.
 - Read HelloWorld greeting: 
 https://raw.githubusercontent.com/onflow/hello-world-flix/v0.1.0/cadence/templates/ReadHelloWorld.template.json
 - Update HelloWorld greeting: 
 https://raw.githubusercontent.com/onflow/hello-world-flix/v0.1.0/cadence/templates/UpdateHelloWorld.template.json