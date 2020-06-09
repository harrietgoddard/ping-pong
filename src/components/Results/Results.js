import React from "react";

const Results = ({ results }) => {
    return (
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Game</th>
              <th scope="col">Player 1</th>
              <th scope="col">Player 2</th>
              <th scope="col">Winner</th>
            </tr>
          </thead>
          <tbody>
            { results.map((result, index) => (
                <tr key={ index }>
                  <th scope="row">{ index + 1}</th>
                  <td>{ result.player_1.score }</td>
                  <td>{ result.player_2.score }</td>
                  <td>{ result.player_1.won ? "Player 1" : "Player 2" }</td>
                </tr>
              )
            )}
          </tbody>
        </table>
    )
}

export default Results;