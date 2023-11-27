import { useState } from "react";
import { Menu, Form } from "semantic-ui-react";
import { useAuth } from "../context/AuthContext";

function LogIn() {
  const { logIn } = useAuth();
  const [activeItem, setActiveItem] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    logIn(email, password, activeItem === "signup");
  }
  return (
    <>
      <Menu widths="2">
        <Menu.Item
          active={activeItem === "signup"}
          onClick={() => setActiveItem("signup")}
        >
          Sign Up
        </Menu.Item>
        <Menu.Item
          active={activeItem === "signin"}
          onClick={() => setActiveItem("signin")}
        >
          Sign In
        </Menu.Item>
      </Menu>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <Form.Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Form.Button>
          {activeItem === "signup" && "Sign Up"}
          {activeItem === "signin" && "Sign In"}
        </Form.Button>
      </Form>
    </>
  );
}

export default LogIn;
