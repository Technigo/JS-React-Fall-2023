import { useState } from "react";

export const Data = () => {
  // Primitive Data Types
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Arrays
  const [items, setItems] = useState([]);

  // Objects
  const [user, setUser] = useState({ name: "", age: 0 });

  // Complex Data Structures
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ]);

  // Functions
  const [callback, setCallback] = useState(() =>
    console.log("Default function")
  );

  return (
    <div className="data">
      {/* Number */}
      <div className="section">
        <p>➕ Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      {/* String */}
      <div className="section">
        <p>👋🏻 Text: {text}</p>
        <button onClick={() => setText(text + " Hello")}>Append "Hello"</button>
      </div>

      {/* Boolean */}
      <div className="section">
        {isVisible ? <p>Visibile 👀</p> : null}
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Visibility
        </button>
      </div>

      {/* Arrays */}
      <div className="section list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => setItems([...items, "🐏"])}>Add Item</button>
      </div>

      {/* Objects */}
      <div className="section">
        <p>👦 Name: {user.name}</p>
        <p>🪪 Age: {user.age}</p>
        <button onClick={() => setUser({ ...user, name: "John" })}>
          Set Name to "John"
        </button>
        <button onClick={() => setUser({ ...user, age: 30 })}>
          Set Age to 30
        </button>
      </div>

      {/* Complex Data Structures */}
      <div className="section list">
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setUsers([...users, { name: "Charlie", age: 35 }])}
        >
          Add User Charlie
        </button>
      </div>

      {/* Functions */}
      <div className="section">
        <button onClick={callback}>Run Callback</button>
        <button
          onClick={() => setCallback(() => console.log("Updated function"))}
        >
          Update Callback
        </button>
      </div>
    </div>
  );
};
