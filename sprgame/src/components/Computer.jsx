const ComputerThrow = ({ computerChoice }) => { //  display the computer choice
    return (
      <div className="computer-choice">
        {!computerChoice ? (

          <img src="/images/question-mark.PNG" alt="Making choices " />
        ) : (
            // display the computer choice image
          <img src={`/images/${computerChoice}.PNG`} alt={computerChoice} /> 
        )}
      </div>
    );
  }
  
  export default ComputerThrow;