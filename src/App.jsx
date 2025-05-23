import Challenge from './components/Challenge.jsx';
import Player from './components/Player.jsx';
import Testing from './components/Testing.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="easy" timer={1}  />
        <Challenge title="not easy" timer={5}  />
        <Challenge title="getting tough" timer={10}  />
        <Challenge title="pros only" timer={15}  />
      </div>
      {/* <Testing /> */}
    </>
  );
}

export default App;
