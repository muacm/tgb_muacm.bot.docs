
import React, { useState } from "react";

// importing css modules
import "./HowToUse.css";

// importing Data for commands list
import CommandsData from "../../Data/CommandsData";

function HowToUseComponent() {

  const [_CommandsData] = useState(CommandsData.CommandsData);
  
  return (
    <div className="HowToUseComponent">
      <h3>
        ➼ How to use Commands 
      </h3>
      <table class="commandTable">
        <tr className="rowHeading">
          <th>Command</th>
          <th>Command Description</th>
          <th>Command Usage Example</th>
        </tr>
        {
          _CommandsData.map((commandData, index) => (
            <tr className="commandRow">
              <td className="command">
                {commandData.command}
              </td>
              <td className="command_description">
                {commandData.command_description}
              </td>
              <td className="command_example">
                {commandData.command_example}
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default HowToUseComponent;