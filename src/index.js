import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="IMG_4157.jpg" alt="profilepic" />;
}
function Intro() {
  return (
    <div>
      <h1>ARIJIT KARMAKAR</h1>
      <p>
        I have a strong background in web development, having worked as both a
        front-end and back-end developer for several years. My skills include
        HTML, CSS, JavaScript, ReactJS, NodeJS, PHP, and MySQL. I am also
        familiar with popular frameworks such as Bootstrap and Laravel.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="✌" color="yellow" />
      <Skill skill="HTML+CSS" emoji="✌" color="Orange" />
      <Skill skill="C++" emoji="✌" color="green" />
      <Skill skill="JavaScript" emoji="✌" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
