import "./App.css";
import React from "react";
import { Route, Switch, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home/HomePage.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
	const {pathname} = useLocation()
	return (
		<div className="App">
			{pathname !== '/' && <NavBar />}
			<Switch>
				<Route exact path={"/"} component={Login} />
				<Route exact path={"/dogs"} component={HomePage} />
				<Route exact path={"/detail"} component={Detail} />
				<Route exact path={"/form"} component={Form} />
			</Switch>
		</div>
	);
}

export default App;
