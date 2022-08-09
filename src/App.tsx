import { Toaster } from 'react-hot-toast'
import './App.css'
import Router from './router'

const App = () => {

  return (
    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
<link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      <Router />
    </div>
  )
}

export default App
