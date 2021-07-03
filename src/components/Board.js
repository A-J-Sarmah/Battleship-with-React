export default function Board({
  getUserData,
  clickBoard,
  computerClickBoard,
  isWon,
  winner,
}) {
  // Working with the drop event listener .
  function drop(e) {
    e.preventDefault();
    const ship = document.getElementById(e.dataTransfer.getData("card_id"));
    const elements = ship.childElementCount;
    let target = e.target.id;
    let targetList = [parseInt(target)];
    setTimeout(() => {
      const children = ship.childNodes;
      children.forEach((e) => {
        e.style.display = "none";
      });
    }, 0);
    if (ship.style.display === "flex") {
      for (let i = 0; i < elements - 1; i++) {
        targetList.push(parseInt(target) + 1);
        target = parseInt(target) + 1;
      }
      targetList = targetList.filter((e) => {
        return e > 0 && e < 99;
      });
      for (let i = 0; i < targetList.length; i++) {
        const element = document.getElementById(`${targetList[i]}`);
        element.classList.add("occupied");
        element.classList.add("bg-secondary");
      }
      getUserData(targetList);
    } else {
      for (let i = 0; i < elements - 1; i++) {
        targetList.push(parseInt(target) + 10);
        target = parseInt(target) + 10;
      }
      targetList = targetList.filter((e) => {
        return e > 0 && e < 99;
      });
      for (let i = 0; i < targetList.length; i++) {
        const element = document.getElementById(`${targetList[i]}`);
        element.classList.add("occupied");
        element.classList.add("bg-secondary");
      }
      getUserData(targetList);
    }
  }
  function dragOver(e) {
    e.preventDefault();
  }
  if (isWon && winner !== null) {
    return (
      <>
        <p className="display-1 text-center my-5">{winner} won the game.</p>
        <div className="d-flex justify-content-around mt-3">
          <p className="display-5 text-muted">User</p>
          <p className="display-5 text-muted">Computer</p>
        </div>
        <div className="container-lg mt-1">
          <div className="row justify-content-between">
            <div
              className="col-5 p-0 bg-primary d-flex flex-wrap"
              id="player-box"
            >
              {[...Array(100)].map((e, i) => {
                return (
                  <div
                    id={i}
                    key={i}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className="box border border-light"
                  ></div>
                );
              })}
            </div>
            <div
              className="col-5 p-0 bg-primary d-flex flex-wrap"
              id="computer-box"
            >
              {[...Array(100)].map((e, i) => {
                return (
                  <div
                    id={i + 100}
                    key={i + 100}
                    className="box border border-light"
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="d-flex justify-content-around mt-3">
          <p className="display-5 text-muted">User</p>
          <p className="display-5 text-muted">Computer</p>
        </div>
        <div className="container-lg mt-1">
          <div className="row justify-content-between">
            <div
              className="col-5 p-0 bg-primary d-flex flex-wrap"
              id="player-box"
            >
              {[...Array(100)].map((e, i) => {
                return (
                  <div
                    id={i}
                    key={i}
                    onDrop={drop}
                    onDragOver={dragOver}
                    className="box border border-light"
                  ></div>
                );
              })}
            </div>
            <div
              className="col-5 p-0 bg-primary d-flex flex-wrap"
              id="computer-box"
            >
              {[...Array(100)].map((e, i) => {
                return (
                  <div
                    id={i + 100}
                    key={i + 100}
                    className="box border border-light"
                    onClick={(e) => {
                      clickBoard(e.target.id);
                      computerClickBoard();
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
