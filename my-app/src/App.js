
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Top from './components/Top';
import Cat from './components/Cat';


function App() {
  return (
    <div>
    
    <Navbar title="E-commerce"/>
        
    <Offers />
    <Cat />
    <Top />
    
    
    </div>
  );
}

export default App;
