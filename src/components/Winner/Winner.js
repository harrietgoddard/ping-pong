import React from "react";

const Winner = ({ player1, player2, winner }) => {
    return (
        winner && Math.abs(player1 - player2) > 1 ? 
            <h2 className="alert alert-success">Player { winner } wins!</h2> : null
    )
}

export default Winner;