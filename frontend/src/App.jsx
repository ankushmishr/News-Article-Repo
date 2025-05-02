import React from 'react'
import { Button } from "@/components/ui/button"
const App = () => {
  return (
    <>
     <h1 className="text-5xl font-bold underline text-red-500">
      Hello world!
    </h1>
    <Button className="bg-red-300" variant="ghost">Click me</Button>
    </>
  )
}

export default App
