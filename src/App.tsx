import React, { useState, useEffect } from 'react';
import BudgetForm from './Components/BudgetForm';
import Expenses from './Components/Expenses';

const App: React.FC = () =>  {

  const [statedBudget, setStatedBudget] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);

  useEffect((): void => {
    setRemaining(statedBudget);
  }, [statedBudget]);

  return (
    <div className="container">
      <header>
        <h1 className="text-white">Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {statedBudget === 0 
        ? (<BudgetForm 
            setStatedBudget={setStatedBudget}
          />)
        : (<Expenses 
            statedBudget={statedBudget}
            remaining={remaining}
            setRemaining={setRemaining}
          />)}
      </div>
    </div>
  );
}

export default App;
