import './App.css';
import FormComponent from './common/FormComponent';
import Navbar from './common/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <div className='Sidebar'>
            <FormComponent/>
        </div>
        <div className='Display'>

        </div>

      </div>
    </>
  );
}

export default App;
