/**
    This binding file was auto generated based on FLIX template v1.1.0. 
    Changes to this file might get overwritten.
    Note fcl version 1.9.0 or higher is required to use templates. 
**/

import * as fcl from "@onflow/fcl"
const flixTemplate = "https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/UpdateHelloWorld.template.json"

interface UpdateGreetingParams {
  greeting: string;
}

/**
* updateGreeting: Update the greeting on the HelloWorld contract
* @param string greeting - 
* @returns {Promise<string>} - Returns a promise that resolves to the transaction ID
*/
export async function updateGreeting({greeting}: UpdateGreetingParams): Promise<string> {
  const transactionId = await fcl.mutate({
    template: flixTemplate,
    args: (arg, t) => [arg(greeting, t.String)]
  });

  return transactionId
}




