const ScoreBoard= ({ wins, losses, ties })=>{
    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <p> Your Score : {wins}</p>
            <p>Computer Score: {losses}</p>
            <p>Ties: {ties}</p>
        </div>
    );
}

export default ScoreBoard;