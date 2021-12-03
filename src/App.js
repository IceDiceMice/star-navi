import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("pickMode");
  const [arr, setArr] = useState([]);
  const [selected, setSelected] = useState([]);

  const getData = async () => {
    const responce = await fetch("http://demo1030918.mockable.io/");
    const data = await responce.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    const arrOfIndex = [];
    if (mode !== "pickMode") {
      for (let i = 1; i <= data[mode].field; i++) {
        arrOfIndex.push(i);
      }
    }
    setArr(arrOfIndex);
  };

  return (
    <div className="app-container">
      <div className="game-container">
        <div className="game-controllers">
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="pickMode" hidden>
              Pick Mode
            </option>
            <option value="easyMode">Easy Mode</option>
            <option value="normalMode">Normal Mode</option>
            <option value="hardMode">Hard Mode</option>
          </select>
          <button onClick={handleClick}>Start</button>
        </div>
        <table>
          <tbody>
            {arr.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  row={"row:" + (index + 1)}
                  arr={arr}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="hovered-squares">
        <h1>Hovered squares</h1>
        <div className="hs-body">
          {selected.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
