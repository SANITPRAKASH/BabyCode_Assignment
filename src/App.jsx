
import './App.css'
import { Card } from './components/ui/card'
import { Button } from './components/ui/button'

function App() {
 

  return (
    <>
       <div className="min-h-screen bg-gray-50 p-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">IELTS Practice App</h1>
        <Button>Get Started</Button>
      </Card>
    </div>
    </>
  )
}

export default App
