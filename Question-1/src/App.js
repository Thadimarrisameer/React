import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
    return (
      <>
        <Navbar title="TextUtils" About="About Us" />
        <div className="container my-4 mb-10">
        <TextForm title="Enter The Text"/>
        </div>
        
      </>
    );
}


export default App;