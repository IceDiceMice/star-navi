import React, { useState } from "react";

export default function TabelItem({ col, row, selected, setSelected }) {
  const [hover, setHover] = useState(false);

  const enterHandler = () => {
    setHover(!hover);
    if (!hover) {
      setSelected([...selected, `${row} ${col}`]);
    } else {
      const newArr = selected.filter((item) => {
        return item !== `${row} ${col}`;
      });
      setSelected(newArr);
    }
  };
  return (
    <td
      onMouseEnter={enterHandler}
      style={{ backgroundColor: hover ? "blue" : "white", padding: "30px" }}
    ></td>
  );
}
