import { useState } from 'react';
import './App.css';
import Home from "./Home"
import Navbar from './Navbar';
import ThankYou from './ThankYou';

function App() {
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {submit ? <ThankYou /> : <Home setSubmit={setSubmit} />}
    </div>
  );
}

export default App;
