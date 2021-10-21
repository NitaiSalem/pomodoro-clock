import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle, faUndo } from '@fortawesome/fontawesome-free-solid';
import TimerControls from './TimerControls';

const Pomodoro = () => {
	const [sessionLength, setSessionLength] = useState(25);
	const [breakLength, setBreakLength] = useState(5);
	const [isRunning, setIsRunning] = useState(false);
	const [minutes, setMinutes] = useState(sessionLength);
	const [seconds, setSeconds] = useState(0);
	const [timerLabel, settimerLabel] = useState('Session');
	const myAudio = useRef();

	const updateTime = () => {
		if (isRunning) {
			if (minutes === 0 && seconds === 0) {
				setSeconds(0);
				setMinutes(() => (timerLabel === 'Session' ? breakLength : sessionLength));
				settimerLabel((timerLabel) => (timerLabel === 'Session' ? 'Break' : 'Session'));
			} else {
				if (seconds === 0) {
					setSeconds(59);
					setMinutes((minutes) => minutes - 1);
				} else {
					setSeconds((seconds) => seconds - 1);
				}
			}
		}
	};

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			myAudio.current.play();
			setTimeout(() => myAudio.current.pause(), 3000);
			setTimeout(() => (myAudio.current.currentTime = 0), 3000);
		}
		const myTimer = setTimeout(updateTime, 1000);
		return function cleanUp() {
			clearTimeout(myTimer);
		};
	});

	const handleBreakIncrement = () => {
		if (breakLength < 60 && !isRunning) {
			setBreakLength(breakLength + 1);
			setSeconds(0);
		}
	};
	const handleBreakDecrement = () => {
		if (breakLength > 1 && !isRunning) {
			setBreakLength(breakLength - 1);
			setSeconds(0);
		}
	};
	const handleSessionIncrement = () => {
		if (sessionLength < 60 && minutes < 60 && !isRunning) {
			setSessionLength(sessionLength + 1);
			setMinutes(minutes + 1);
			setSeconds(0);
		}
	};
	const handleSessionDecrement = () => {
		if (sessionLength > 1 && minutes > 1 && !isRunning) {
			setSessionLength(sessionLength - 1);
			setMinutes(minutes - 1);
			setSeconds(0);
		}
	};

	const ToggleStartStop = () => {
		setIsRunning((isRunning) => !isRunning);
	};

	const resetTimer = () => {
		setSessionLength(25);
		setBreakLength(5);
		setMinutes(25);
		setSeconds(0);
		setIsRunning(false);
		settimerLabel('Session');
		myAudio.current.pause();
		myAudio.current.currentTime = 0;
	};

	return (
		<div id="pomodoro-container" className="pomodoro-container">
			<h2 className="title">Pomodoro Clock</h2>

			<TimerControls
				handleBreakDecrement={handleBreakDecrement}
				handleBreakIncrement={handleBreakIncrement}
				breakLength={breakLength}
				handleSessionDecrement={handleSessionDecrement}
				handleSessionIncrement={handleSessionIncrement}
				sessionLength={sessionLength}
			/>
			<div className="tomato">
				<div id="tomatoTop" /> <div id="tomatoFill" />
				<h2 id="timer-label"> {timerLabel}</h2>
				<p id="time-left">
					{minutes < 10 ? `0${minutes}:` : `${minutes}:`}
					<span>{seconds < 10 ? `0${seconds}` : `${seconds}`} </span>
				</p>
			</div>

			<div className="bottom-buttons-container">
				<button id="start_stop" onClick={ToggleStartStop}>
					<FontAwesomeIcon icon={faPlayCircle} />
					<FontAwesomeIcon icon={faPauseCircle} />
				</button>
				<button id="reset" onClick={resetTimer}>
					<FontAwesomeIcon icon={faUndo} />
				</button>
			</div>
			<audio
				id="beep"
				ref={myAudio}
				src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
				type="audio"
			>
			</audio>
		</div>
	);
};

export default Pomodoro;
