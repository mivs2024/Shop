import React, { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Context } from '..';
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const logIn = () => {
        navigate("/login")
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={"/"}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate("/admin")}
                        >
                            Админ панель
                        </Button>
                        <Button style={{marginLeft: '30px'}} 
                            variant={"outline-light"}
                            onClick={() => logOut()}
                           
                           
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button  variant={"outline-light"} 
                            onClick={() => logIn()}
                         >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;