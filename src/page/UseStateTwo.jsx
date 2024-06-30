import { useState } from "react";

const UseStateTwo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const content = ["Content 1", "Content 2", "Content 3"];

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(`Email:${email}, Password: ${password}`);
  };

  return (
    <>
      <h4>1번</h4>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>로그인</button>
      </form>
      <hr />
      <h4>2번</h4>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{content[activeTab]}</div>
    </>
  );
};

export default UseStateTwo;
