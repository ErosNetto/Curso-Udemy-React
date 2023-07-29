import './StartScreen.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
      <div className="logo">
        <h1>Secret</h1>
        <h1>Wo<span>r</span>d</h1>
      </div>

      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default StartScreen;