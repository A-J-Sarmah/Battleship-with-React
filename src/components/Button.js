export default function Button({
  rotate,
  gameStatus,
  setGameStatus,
  getComputerData,
  isWon,
  winner,
  reset,
}) {
  function resetGameStatus() {
    const element1 = document.getElementById("destroyer").childNodes;
    const element2 = document.getElementById("cruiser").childNodes;
    const element3 = document.getElementById("submarine").childNodes;
    const element4 = document.getElementById("battleship").childNodes;
    const element5 = document.getElementById("carrier").childNodes;
    const arr = [element1, element2, element3, element4, element5];
    let status = true;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      for (let j = 0; j < element.length; j++) {
        if (element[j].style.display !== "none") {
          status = false;
          break;
        }
      }
      if (status === false) {
        break;
      }
    }
    if (status) {
      setGameStatus(!gameStatus);
      getComputerData();
    }
  }
  if (isWon && winner !== null) {
    return (
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-outline-primary mt-5"
          id="start"
          onClick={reset}
        >
          Play Again
        </button>
        <button
          className="btn btn-outline-primary mt-5"
          id="rotate"
          onClick={rotate}
        >
          Rotate the Ships
        </button>
      </div>
    );
  }
  if (gameStatus) {
    return (
      <div className="d-flex justify-content-around">
        <button className="btn btn-outline-primary mt-5 disabled" id="start">
          Start Game
        </button>
        <button
          className="btn btn-outline-primary mt-5"
          id="rotate"
          onClick={rotate}
        >
          Rotate the Ships
        </button>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-outline-primary mt-5"
          id="start"
          onClick={resetGameStatus}
        >
          Start Game
        </button>
        <button
          className="btn btn-outline-primary mt-5"
          id="rotate"
          onClick={rotate}
        >
          Rotate the Ships
        </button>
      </div>
    );
  }
}
