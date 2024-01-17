"use client"
import '../config/fcl'
import { useState } from 'react'
import { getGreeting } from '../cadence/readHelloWorld'
import { updateGreeting } from '../cadence/updateHelloWorld'
// @ts-ignore
import * as fcl from "@onflow/fcl"

export default function HelloWorld() {
    const DEFAULT_GREETING = "Hello World!"
    const ALT_GREETING = "New Greeting :)"
    const [greeting, setGreeting] = useState<string>("")
    const [txId, setTxId] = useState<string>("")
    const [status, setStatus] = useState<string>("")
 
    const queryMyGreeting = async () => {
        const greeting = await getGreeting()
        setGreeting(greeting)
    }
    const updateMyGreeting = async (args: { greeting: string }) => {
        setStatus("Resolving...")
        const txId = await updateGreeting(args)
        setTxId(txId)
        // @ts-ignore
        fcl.tx(txId).subscribe((txId) => {
            if (fcl.tx.isSealed(txId)) {
                setStatus("Finished, query contract to see updated greeting")
                return true
            }
            setStatus("Transaction is Processing")
            return false
        })
    }
    const clearDisplay = () => {
        setGreeting("")
        setTxId("")
        setStatus("")
    }
    const displayTxId = (id: string) => {
        return id.slice(0, 5) + "..." + id.slice(-5);
    }
    return (
        <div className="flex flex-grow flex-col w-[200px] items-center text-center">
           <span className="m-5 w-1/2 bold text-gray-700">Simple web application to demonstrate how to interact with a HelloWorld contract on testnet using FLIX. Start with <b>Query Contract</b></span> 
           <button className="m-1 w-1/4 bg-blue-500 text-white p-1 rounded" onClick={() => clearDisplay()}>Clear Display</button>
           <hr className="w-1/2 m-4" />
           <span className="flex text-lg">Read HelloWorld greeting</span> 
            <button className="m-1 w-1/2 bg-blue-500 text-white p-1 rounded" onClick={queryMyGreeting}>Query Contract</button>
            <div className='flex flex-col p-2 text-lg items-center'>
                <div className='flex flex-row'>
                <span className="font-semibold text-gray-700 px-4">Greeting Value: </span>
                <span className="text-gray-400">{greeting}</span>
                </div>
            </div>
            {greeting && (
                <div className='w-1/2 flex text-md text-md text-gray-400'>
                    Congratulations!, you queried the HelloWorld contract on testnet.
                </div>
            )}

            <hr className="w-1/2 m-4" />
            <span className="m-5 w-1/2 bold text-gray-700">Change HelloWorld contract greeting to &quot;{ALT_GREETING}&quot; or reset the greeting back to &quot;{DEFAULT_GREETING}&quot;</span> 
            <span className="flex text-lg">Update HelloWorld greeting</span>
            <button className="m-1 w-1/2 bg-blue-500 text-white p-1 rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200" disabled={greeting === ALT_GREETING} onClick={() => updateMyGreeting({ greeting: ALT_GREETING})}>Change Greeting</button>
            <button className="m-1 w-1/2 bg-blue-500 text-white p-1 rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200" disabled={greeting === DEFAULT_GREETING} onClick={() => updateMyGreeting({ greeting: DEFAULT_GREETING})}>Reset Greeting</button>

            {txId && (
                <div className='w-1/2 flex flex-col text-center text-md text-gray-400'>
                    Congratulations!, you updated the HelloWorld contract on testnet.
                    <div>Transaction ID: {displayTxId(txId)}</div>
                    <div>{status}</div>
                </div>
            )}

        </div>
    )
}