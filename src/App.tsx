import React, { useState } from 'react';
import Header from './components/Header/Header.tsx';
import UserInput from './components/UserInput/UserInput.tsx';
import Results from './components/Results/Results.tsx';
import type { Investment } from './util/type-utils.ts';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState<Investment>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: +value,
    }));
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid input data.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
