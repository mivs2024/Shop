import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Context } from "..";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { login, registration } from "../http/userApi";

const Auth = observer(() => {

  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === '/login'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
        let data;
        if (isLogin) {
            data = await login(email, password);
        } else {
            data = await registration(email, password);
        }
        user.setUser(user)
        user.setIsAuth(true)
       navigate("/")
    } catch (e) {
        alert(e.response.data.message)
    }

}

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          {isLogin ?
            <div className="mt-5" style={{ marginTop: '30px' }}>
              Нет аккаунта? <NavLink to='/registration'>Зарегистрируйся!</NavLink>
            </div>
            :
            <div className="mt-5">
              Есть аккаунт? <NavLink to='/login'>Войдите!</NavLink>
            </div>
          }
          <Button
            variant={"outline-success"}
            onClick={click}
          >
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>

        </Form>
      </Card>
    </Container>
  );
});

export default Auth;