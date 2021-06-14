
import React from "react";

// importing Logo as component
import BotLogo from "../../Assets/logo.png";
import HowToUseComponent from "../../Components/HowToUse/HowToUse";

// importing css modules
import "../../Styles/main.css";

function HomeComponent() {
  return (
    <div className="HomeComponent">

      <img src={BotLogo} alt="botLogo" className="logo"/>
      
      <h1 className="headline">
        The Great Bot of MUACM
      </h1>
      <div className="LinksLayer">
        <a href="https://github.com/SuperbSaud/tgb-muacm">
          GitHub
        </a>
        •
        <a href="https://github.com/SuperbSaud/tgb-muacm/graphs/contributors">
          Contributors
        </a>
        •
        <a href="">
          Invite Bot to Discord Server
        </a>
        •
        <a href="http://medicaps.hosting.acm.org/">
          MUACM
        </a>
        •
        <a href="https://discord.gg/NHjFUKnwyx">
          MUACM Discord Community
        </a>
      </div>

      {/* Introduction section */}
      <div className="Introduction">
        <h3>
          ➼ Introduction
        </h3>
        <div className="content">
          
          <p>
            The bot is especially designed for the MUACM community for performing several commands like greeting to the people who joined the community and responding them. There are several commands like giving the info about the team mates, sending random memes, random quotes, some trivia which you haven't knew and the contact info, like how to reach out the MUACM community.
            In the bot we used some APIs which sends random memes, quotes and trivia.
          </p>
      
        </div>
      
      </div>

      {/* How to use component - main docs */}
      <HowToUseComponent />
      
    </div>
  )
}

export default HomeComponent;