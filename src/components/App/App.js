import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import Lab from '../../pages/Lab/Lab';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/lab" element={<Lab />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
