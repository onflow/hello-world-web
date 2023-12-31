"use client"
import '../config/fcl'
import { useState } from 'react'
import { getHelloWorldGreeting } from '../cadence/bindings/getHelloWorld'

export default function HelloWorld() {
    const [greeting, setGreeting] = useState(null)
 
    const queryGreeting = async () => {
        const greeting = await getHelloWorldGreeting()
        setGreeting(greeting)
    }
    
    return (
        <div className="flex flex-col w-[200px]">
            <button className="m-1 bg-blue-500 text-white p-1 rounded" onClick={queryGreeting}>Query Contract</button>
            <button className="m-1 bg-blue-500 text-white p-1 rounded" onClick={() => setGreeting(null)}>Clear</button>
            <div className='flex flex-col text-center p-4 text-lg h-24'>
                <span className="font-semibold text-gray-700 px-4">Result:</span>
                <span className="text-gray-400">{greeting}</span>
            </div>
            {greeting && (
                <div className='flex flex-col text-center p-4 text-lg h-24'>
                    Congrates!, you have successfully queried the HelloWorld contract on testnet.
                </div>
            )}
        </div>
    )
}