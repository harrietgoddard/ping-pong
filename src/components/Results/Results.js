import React from "react";
import englishDictionary from '../../english.json';
import esperantoDictionary from '../../esperanto.json';

const Results = ({ results, english }) => {
    
  let language = english ? englishDictionary : esperantoDictionary;
  let { game, player, winner } = language;

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">{ game }</th>
          <th scope="col">{ player + " 1"}</th>
          <th scope="col">{ player + " 2"}</th>
          <th scope="col">{ winner }</th>
        </tr>
      </thead>
      <tbody>
        { results.map((result, index) => (
            <tr key={ index }>
              <th scope="row">{ index + 1}</th>
              <td>{ result.player_1.score }</td>
              <td>{ result.player_2.score }</td>
              <td>{ result.player_1.won ? player + " 1" : player + " 2" }</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}

export default Results;