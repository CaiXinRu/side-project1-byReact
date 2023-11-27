import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Form } from "semantic-ui-react";
import axios from "axios";

function LogIn() {
  const apiUrl = `https://todoo.5xcamp.us`;
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (activeItem === "signup") {
      axios
        .post(`${apiUrl}/users`, {
          user: {
            email: email,
            password: password,
          },
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (activeItem === "signin") {
      axios
        .post(`${apiUrl}/users/sign_in`, {
          user: {
            email: email,
            password: password,
          },
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.headers.authorization);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
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
