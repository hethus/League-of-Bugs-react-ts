import { useState } from 'react';
import { Toaster } from 'react-hot-toast'
import './App.css'
import Router from './router'

const App = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Router logged={logged} setLogged={setLogged}/>
    </div>
  )
}

export default App
