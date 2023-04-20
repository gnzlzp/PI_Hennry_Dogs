import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/Home/HomePage.jsx";
import Detail from "./views/Detail/Detail";
import Form2 from "./views/Form/Form2";

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
				{/* <Route exact path={"/form"} element={<Form/>} /> */}
				<Route exact path={"/form"} element={<Form2/>} cl/>
			</Routes>
		</div>
	);
}

export default App;
