import { useState } from "react";

const UseStateOne = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [color, setColor] = useState("white");

  const countUp = () => {
    setCount(count + 1);
  };

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const toggleBtn = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const addItem = () => {
    setItemList([...itemList, newItem]);
    setNewItem("");
  };
  return (
    <>
      <h4>1번</h4>
      <div>{count}</div>
      <button onClick={countUp}>증가</button>
      <h4>2번</h4>
      <input type="text" value={input} onChange={inputChange} />
      <p>{input}</p>
      <h4>3번</h4>
      <p>Status: {toggle ? "ON" : "OFF"}</p>
      <button onClick={toggleBtn}>Toggle</button>
      <h4>4번</h4>
      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>5번</h4>
      <div style={{ backgroundColor: color, padding: "20px" }}>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          BLUE
        </button>
        <button
          onClick={() => {
            setColor("pink");
          }}
        >
          PINK
        </button>
        <button
          onClick={() => {
            setColor("red");
          }}
        >
          RED
        </button>
      </div>
    </>
  );
};

export default UseStateOne;
