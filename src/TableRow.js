import React from "react";
import TabelCol from "./TabelCol";
export default function TableRow({ arr, row, selected, setSelected }) {
  return (
    <>
      <tr>
        {arr.map((item, index) => {
          return (
            <TabelCol
              col={"col:" + (index + 1)}
              key={index}
              row={row}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </tr>
    </>
  );
}
