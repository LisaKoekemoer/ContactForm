import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Success from './components/Success';

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [contactData, setContactData] = useState({});

  function handleSuccess(data){ 
    setIsSuccess(true);
    setContactData(data);
  }

  useEffect(() =>{
    if(isSuccess){
      const timer = setTimeout( () => setIsSuccess(false), 8000 );
      return () => clearTimeout(timer);
    }
  }, [isSuccess])



  return (
    <>
    <main>
      <h1>Contact Us</h1>
      <Form onSuccess={handleSuccess} />    
      {isSuccess && <Success contactData={contactData}/> }
    </main>
    </>
  );
}

export default App;
