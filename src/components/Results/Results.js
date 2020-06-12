import React from "react";
import englishDictionary from '../../data/english.json';
import esperantoDictionary from '../../data/esperanto.json';

const Results = ({ results, p1Name, p2Name, english }) => {
    
  let language = english ? englishDictionary : esperantoDictionary;
  let { game, winner } = language;

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">{ game }</th>
          <th scope="col">Player 1</th>
          <th scope="col">Player 2</th>
          <th scope="col">{ winner }</th>
        </tr>
      </thead>
      <tbody>
        { results.map((result, index) => (
            <tr key={ index }>
              <th scope="row">{ index + 1}</th>
              <td>{ result.player_1.score }</td>
              <td>{ result.player_2.score }</td>
              <td>{ result.player_1.won ? result.player_1.name : result.player_2.name }</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
};

export default Results;