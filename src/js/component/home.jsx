import React, { useEffect, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [startCountDown, setStartCountDown] = useState(false);

	useEffect(() => {
		let timerId;

		if (startCountDown) {
			timerId = setInterval(() => {
				setSeconds(current => current - 1);
				// Si no se va a negativo
				if (seconds <= 1) {
					setStartCountDown(false);
				}
			}, 1000);

		} else {
			timerId = setInterval(() => {
				setSeconds(current => current + 1);
			}, 1000);
		}

		// Limpiamos los intervalos para que no se añadan los timers uno encima de otro (?)
		return () => clearInterval(timerId);
	})

	const handleCountdownInput = (evt) => {
		if (evt.target.value !== "") {
			setSeconds(evt.target.value);
			setStartCountDown(true);
		}
	}

	return (
		<>
			<SecondsCounter seconds={seconds} />
			<div className="row mt-3 ms-2">
				<div class="col-4">
					<input type="number" className="form-control" on={handleCountdownInput} />
				</div>
			</div>

		</>
	);
};

export default Home;
