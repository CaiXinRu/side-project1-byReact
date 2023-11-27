import { useState, useEffect } from "react";
import { Menu, Search, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const apiUrl = `https://todoo.5xcamp.us`;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // 使用!!轉換為布林值
  };

  function logOut() {
    const token = localStorage.getItem("token");
    axios
      .delete(`${apiUrl}/users/sign_out`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        checkLoginStatus();
      })
      .catch((error) => console.log(error.response));
  }

  return (
    <Container>
      <Menu>
        <Menu.Item as={Link} to="/">
          Delusional World
        </Menu.Item>
        <Menu.Item>
          <Search />
        </Menu.Item>
        <Menu.Menu position="right">
          {isLoggedIn ? (
            <>
              <Menu.Item as={Link}>會員</Menu.Item>
              <Menu.Item onClick={logOut}>Log Out</Menu.Item>
            </>
          ) : (
            <Menu.Item as={Link} to="/login">
              Log In
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    </Container>
  );
}

export default Header;
