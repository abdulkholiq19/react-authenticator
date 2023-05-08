import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<nav className="navbar bg-dark">
				<div className="container-fluid py-2">
					<h6 className="appName">
						React User Authentication</h6>
				</div>
			</nav>
      {/* <div className=""> */}
			<LoginButton />
			<LogoutButton />
      {/* </div> */}
		</>
	);
}

export default App;
