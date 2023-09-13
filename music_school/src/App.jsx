import './App.css'
import Sidebar from './Components/Sidebar'
import MainRoutes from './Routes/mainRoutes'

function App() {

  return (
    <>   
    <div className='flex'>
      <Sidebar/>
      <main className='w-full border-l-[2px]'><MainRoutes/></main>
    </div>
    </>
 
  )
}

export default App
