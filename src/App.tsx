import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState('');

  function revealAge() {
    const currentYear = new Date().getFullYear();

    if (!name || !birthYear) {
      setAge('Por favor, preencha todos os campos.');
      return;
    }else {
      const realAge = currentYear - Number(birthYear);
      setAge(`${name}, sua idade é ${realAge} anos.`);
      return;
    }
    
    
  }
 
  return (
    
      <div className='container'>
        <h1 className='title'>Descubra sua Idade</h1>

        <div className='card'>
          <label className='subtitle'>Digite seu nome</label>
          <input 
          type="text" 
          placeholder='Digite seu nome' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

          <label className='subtitle'>Digite o ano do seu nascimento</label>
          <input 
          type="number" 
          placeholder='Digite o ano do seu nascimento' 
          value={birthYear} 
          onChange={(e) => setBirthYear(e.target.value)} />


          <br />
        <button className='btn' onClick={revealAge}>Descobrir Idade</button>
        </div>

        {age && <p className='result'>{age}</p>}


      </div>
      
  )
}

export default App
