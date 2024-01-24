import {BrowserRouter } from "react-router-dom";
import useRoutes from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userApi";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";



const App = observer(() => {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   console.log(user)
  check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  const routes = useRoutes();
  return (
    <BrowserRouter>
<NavBar />
    {routes}
  </BrowserRouter>
  );
})

export default App;
