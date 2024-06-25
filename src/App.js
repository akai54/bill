import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Tip text={"How did you like the service ?"} tip={tip} setTip={setTip} />
      <Tip
        text={"How did your friend like the service ?"}
        tip={friendTip}
        setTip={setFriendTip}
      />
      <Total
        bill={bill}
        avgTip={(tip + friendTip) / 2}
        total={total}
        setTotal={setTotal}
      />
      <Reset
        setBill={setBill}
        setTip={setTip}
        setFriendTip={setFriendTip}
        setTotal={setTotal}
      />
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <h2 style={{ display: "inline", marginRight: "10px" }}>
        How much was the bill ?
      </h2>
      <input
        type="text"
        placeholder="bill..."
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ text, tip, setTip }) {
  return (
    <div>
      <h2 style={{ display: "inline", marginRight: "10px" }}>{text}</h2>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0} key={0}>
          0%
        </option>
        <option value={5} key={5}>
          5%
        </option>
        <option value={10} key={10}>
          10%
        </option>
        <option value={15} key={15}>
          15%
        </option>
        <option value={20} key={20}>
          20%
        </option>
      </select>
    </div>
  );
}

function Total({ bill, avgTip, total, setTotal }) {
  setTotal(bill + avgTip);
  return (
    <div>
      <h1>
        You pay {total}€ ({bill}€ + {avgTip}€ tip)
      </h1>
    </div>
  );
}

function Reset({ setBill, setTip, setFriendTip, setTotal }) {
  function reset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
    setTotal(0);
  }

  return <button onClick={reset}>Reset</button>;
}

export default App;
