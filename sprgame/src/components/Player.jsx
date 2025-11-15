const PlayerThrow = ({ onSelect, selected }) => {
    return (
      <div className="player-options">

        <img
          className={selected === "rock" ? "selected" : ""} // If the user clicked rock, add the "selected" class.
          src="/images/rock.PNG" alt="Rock" onClick={() => onSelect("rock")}
        />
  
        <img
          className={selected === "paper" ? "selected" : ""}// If the user clicked paper, add the "selected" class.
          src="/images/paper.PNG" alt="Paper" onClick={() => onSelect("paper")}/>
  
        <img
          className={selected === "scissors" ? "selected" : ""} // If the user clicked scissors, add the "selected" class.
          src="/images/scissors.PNG" alt="Scissors" onClick={() => onSelect("scissors")}/>
  
      </div>
    );
  };
  
  export default PlayerThrow;
  