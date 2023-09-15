"use client"
// Import FCL config
import './config/fcl'
import Head from 'next/head'

import HelloWorld from "./components/helloWorld";


export default function Home() {
  return (
    <div className="flex flex-col min-h-[95vh]">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Welcome to Flow, Simple Hello World Example</h1>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <HelloWorld />        
      </main>

      <footer className="bg-blue-600 text-white p-4 mt-auto">
        Learn more about Flow, head over to the
        <a className="text-lg underline px-1" href="https://developers.flow.com/" 
          target="_blank"
          rel="noopener noreferrer"
        >
         developer documentation
        </a>
      </footer>
    </div>
  )  
}
