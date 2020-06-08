import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import "./App.css";

function App() {
	const idleTimerRef = useRef(null);
	const [isUserIdle, setIsUserIdle] = useState(false);

	const userIdle = (state) => {
		setIsUserIdle(state);
	};

	return (
		<div className="App">
			<IdleTimer
				ref={idleTimerRef}
				timeout={3000}
				onIdle={() => userIdle(true)}
				onActive={() => userIdle(false)}
			></IdleTimer>
			{isUserIdle ? <h1>User is idle</h1> : <h1>User is active</h1>}
		</div>
	);
}

export default App;
