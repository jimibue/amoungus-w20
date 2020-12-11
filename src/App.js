import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import MyContainer from "./pages/MyContainer";
import NavBar from "./pages/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <MyContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:id" component={User} />
            <Route
              component={() => (
                <>
                  <h1>404</h1>
                </>
              )}
            />
          </Switch>
        </MyContainer>
      </Container>
    </>
  );
}

export default App;
