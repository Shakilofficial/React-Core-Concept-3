import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

// Context Create and export
export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond";

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Money: {money} </p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Gold">
          <section className="flex">
            <Father asset={asset}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/* 
<------ Context API ------->

1. Create a context and export it.
2. Add provider for the context with a value. value could be anything
3. UseContext to access value in the Context API. 

*/
