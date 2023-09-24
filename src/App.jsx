import { useState } from 'react'
import Buttonwrapper from './components/Buttonwrapper';
function App() {
  const [color, setColor] = useState("olive");
  return (
        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
          <Buttonwrapper setColor={setColor}></Buttonwrapper>
        </div>
  )
}

export default App