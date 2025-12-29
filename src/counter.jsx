import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
export default Counter;

export function Example() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}

export function AuthExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in</p>
      )}
    </>
  );
}


