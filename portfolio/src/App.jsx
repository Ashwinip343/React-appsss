
import './App.css'

import Sidenav from './components/sidenav';
import { Navbar } from './components/navbar';
import { Contentbro } from './components/Contentbro';
import { Buttonss } from './components/Buttonss';
function App() {
  const [updatee, setupdatee] = useState("okayyyy its me")
  return (
    <div>
   
     
      <div className='flex flex-row' >     
      <Navbar/>
      <Sidenav/>  

      <div flex flex-col>
      <Contentbro />
      <Buttonss/>
        </div>    
 

      </div>
     
    

    </div>
  )
}

export default App;
