import React from 'react';
import PageContainer from './components/PageContainer';
import './App.css';

function App() {
    // Define a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <PageContainer />
    </div>
  )
}

export default App;