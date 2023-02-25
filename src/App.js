import React, { createContext, useContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Muskan"}>
        <LastName.Provider value={"Mittal"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
