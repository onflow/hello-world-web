"use client"
// Import FCL config
import './config/fcl'
import Head from 'next/head'

import HelloWorld from "./components/helloWorld";


export default function Home() {
  return (
    <main className="grid grid-flow-row m-24 gap-40">
      <div className="text-xl flex justify-center">
        Welcome to Flow, Hello World Example
      </div>

      <div className="flex justify-center">
        <HelloWorld />        
      </div>
      <div className='flex justify-center'>
        <a className="text-xl underline m-24" href="https://developers.flow.com/" 
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn more about Flow
        </a>
      </div>
    </main>
  )
}
