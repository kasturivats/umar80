import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route, Link} from 'react-router-dom'
import LinkRouter from "./LinkRouter";
import HomeContainer from "./containers/HomeContainer";
import FooterContainer from "./containers/FooterContainer";


function App(){
	return (
		<div className="App">

<LinkRouter/>
				<Routes>
					<Route exact path="/" element={<HomeContainer />}></Route>
					<Route path="/footer" element={<FooterContainer />}></Route>

				</Routes>



		</div>
	)
}


	export default App;