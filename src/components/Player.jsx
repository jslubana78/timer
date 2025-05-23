import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [setName, setSetName] = useState(false);
  let inputRef = useRef();

  const onChangeHandler = (event) => {
    setSetName(false);
    setPlayerName(event.target.value);
  }

  const setNameHandler = () => {
    setSetName(true);
    setPlayerName('');
  }

  return (
    <section id="player">
      <h2>Welcome {inputRef.current && setName ? inputRef.current.value : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={onChangeHandler} value={playerName} ref={inputRef}/>
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
