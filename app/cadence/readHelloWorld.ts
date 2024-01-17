/**
    This binding file was auto generated based on FLIX template v1.1.0. 
    Changes to this file might get overwritten.
    Note fcl version 1.9.0 or higher is required to use templates. 
**/

import * as fcl from "@onflow/fcl"
const flixTemplate = "https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/ReadHelloWorld.template.json"


/**
* getGreeting: Call HelloWorld contract to get greeting
* @returns {Promise<string>} - 
*/
export async function getGreeting(): Promise<string> {
  const info = await fcl.query({
    cadence: "",
    // @ts-ignore, fcl needs to be updated to support templates urls along with template as an object
    template: flixTemplate,
    
  });

  return info
}





