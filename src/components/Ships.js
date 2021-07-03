export default function Ships({ gameStatus }) {
  // dragging the card
  function dragStart(e) {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  }
  function dragOver(e) {
    e.stopPropagation();
  }
  if (!gameStatus) {
    return (
      <div className="container-lg mt-5 mb-3">
        <div className="row justify-content-between">
          <div
            className="col ship"
            id="destroyer"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary destroyer-ship border border-light"></div>
            <div className="bg-secondary destroyer-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="cruiser"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary cruiser-ship border border-light"></div>
            <div className="bg-secondary cruiser-ship border border-light"></div>
            <div className="bg-secondary cruiser-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="submarine"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary submarine-ship border border-light"></div>
            <div className="bg-secondary submarine-ship border border-light"></div>
            <div className="bg-secondary submarine-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="battleship"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary battleship-ship border border-light"></div>
            <div className="bg-secondary battleship-ship border border-light"></div>
            <div className="bg-secondary battleship-ship border border-light"></div>
            <div className="bg-secondary battleship-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="carrier"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-lg mt-5 mb-3">
        <div className="row justify-content-between">
          <div
            className="col ship"
            id="destroyer"
            draggable="false"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary destroyer-ship border border-light"></div>
            <div className="bg-secondary destroyer-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="cruiser"
            draggable="false"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary cruiser-ship border border-light"></div>
            <div className="bg-secondary cruiser-ship border border-light"></div>
            <div className="bg-secondary cruiser-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="submarine"
            draggable="false"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary submarine-ship border border-light"></div>
            <div className="bg-secondary submarine-ship border border-light"></div>
            <div className="bg-secondary submarine-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="battleship"
            draggable="false"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary battleship-ship border border-light"></div>
            <div className="bg-secondary battleship-ship border border-light"></div>
            <div className="bg-secondary battleship-ship border border-light"></div>
            <div className="bg-secondary battleship-ship border border-light"></div>
          </div>
          <div
            className="col ship"
            id="carrier"
            draggable="false"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
            <div className="bg-secondary carrier-ship border border-light"></div>
          </div>
        </div>
      </div>
    );
  }
}
