
/**
    This binding file was auto generated based on FLIX template v1.0.0. 
    Changes to this file might get overwritten 
**/

import * as fcl from "@onflow/fcl"
//@ts-ignore
import cdc from "../scripts/ReadHelloWorld.cdc"
 
/**
* Calls script to get message from HelloWorld contract
* @returns { Promise<string> } Promise resolves to the response of the script
*/

export async function getHelloWorldGreeting() {
  const info = await fcl.query({
    cadence: cdc,
  });

  return info
}