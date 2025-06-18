import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <p className='text-5xl font-bold text-blue-600'>Hey bhendi</p>
      
      {/* Test Tailwind Classes */}
      <div className="p-8 space-y-4">
        <h1 className="text-xl font-bold text-blue-600">Tailwind Test</h1>
        <p className="text-gray-700 bg-yellow-200 p-3 rounded">This should have yellow background</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Red Button
        </button>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          Green Box
        </div>
      </div>
    </div>
  )
}

export default App
