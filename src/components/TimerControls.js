import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid';

const TimerControls = ({handleBreakDecrement,handleBreakIncrement,breakLength,handleSessionDecrement, handleSessionIncrement,sessionLength})=> {
return(
    <div className='timer-controls-container'>
    <div className='break-container'>
        <p id="break-label">Break Length</p>
      
        <div className="timer-controls">     
          <button id='break-decrement' onClick={handleBreakDecrement}> <FontAwesomeIcon icon={faArrowDown} size='2x' /></button>
            <p id='break-length'>{breakLength}</p>
           <button id='break-increment' onClick={handleBreakIncrement}><FontAwesomeIcon icon={faArrowUp} size='2x' /></button>
        </div>
    </div>

    <div className='session-container'>
        <p id="session-label">Session Length</p>
        <div className='timer-controls'>
            <button id='session-decrement' onClick={handleSessionDecrement}><FontAwesomeIcon icon={faArrowDown} size='2x' /></button>
            <p id="session-length">{sessionLength}</p>
            <button id='session-increment' onClick={handleSessionIncrement}><FontAwesomeIcon icon={faArrowUp} size='2x' /></button>
        </div>
    </div>
</div>
)}

export default TimerControls; 


/*

     <div className='timer-controls-container'>
                <div className='break-container'>
                    <p id="break-label">Break Length</p>
                  
                    <div className="timer-controls">     
                      <button id='break-decrement' onClick={handleBreakDecrement}> <FontAwesomeIcon icon={faArrowDown} size='2x' /></button>
                        <p id='break-length'>{breakLength}</p>
                       <button id='break-increment' onClick={handleBreakIncrement}><FontAwesomeIcon icon={faArrowUp} size='2x' /></button>
                    </div>
                </div>

                <div className='session-container'>
                    <p id="session-label">Session Length</p>
                    <div className='timer-controls'>
                        <button id='session-decrement' onClick={handleSessionDecrement}><FontAwesomeIcon icon={faArrowDown} size='2x' /></button>
                        <p id="session-length">{sessionLength}</p>
                        <button id='session-increment' onClick={handleSessionIncrement}><FontAwesomeIcon icon={faArrowUp} size='2x' /></button>
                    </div>
                </div>
            </div>
*/