import React, { Component } from "react";
import classNames from "classnames";
import "../Styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";



export default class SkillsMenu extends Component {
  constructor(props) {
  super(props);
  this.state = {
    activeMenuItem: 1,
  };
}

handleMenuItemClick = (menuItem) => {
  this.setState({
    activeMenuItem: menuItem,
  });

};

/*setting up the fill and unfilled boxes graph*/
  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div 
      key={index} 
      className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <div className="level-container">
      {[...Array(5)].map((_, i) => (
        <div key={i} 
          className={`level-point ${ i < skill.level ? "filled" : "unfilled"}`} 
      />
      ))}
        </div>
      </div>
    ));
  };


render() {
  const { activeMenuItem } = this.state;
  const menuItems  = ["FRONT-END", "BACK-END"];

  const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

  return (
  <div className="skill-menu">
  {menuItems.map((item, index) => (
  <div
    key={index}
    className={classNames("skill-item", {
    activeSkill: activeMenuItem === index + 1,
    })}
    onClick={() => this.handleMenuItemClick(index + 1)}
    >
    <h2 classname="skill-title">{item}</h2>
    </div>
    ))}
    <img className="skill-icon" src={currentIcon} alt="current skill" />
    <div className="skill-sub-container">
      {this.renderContent(skills[activeMenuItem])}
    </div>
  </div>
);
}
}