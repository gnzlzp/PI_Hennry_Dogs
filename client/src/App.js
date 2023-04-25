import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/Home/HomePage.jsx";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";

function App() {
	const {pathname} = useLocation()
	return (
		<div className="App">
			<div className="compNav">
			{pathname !== '/' && <NavBar />}
			</div>
			<Routes>
				<Route exact path={"/"} element={<Landing/>} />
				<Route exact path={"/dogs"} element={<HomePage/>} />	
				<Route exact path={"/detail/:id"} element={<Detail/>} />
				<Route exact path={"/form"} element={<Form/>} />
			</Routes>
		</div>
	);
}

export default App;
