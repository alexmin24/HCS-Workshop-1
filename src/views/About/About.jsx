import React, {useState}from "react";
import {classes} from "react";
import "./About.css";
import { render } from "@testing-library/react";

function AdditionalInformation(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveAnswer(props.answer);
        props.setActiveQuestion(props.question);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function AboutScreen() {
  const[activeTitle, setActiveTitle] = useState("");
  const[activeAnswer, setActiveAnswer] = useState("");
  const[activeQuestion, setActiveQuestion] = useState("");
  const[greeting, setGreeting] = useState("");
    return (
      <div className="screen-background">
        <div className="intro-background">
          <div className="intro-item">
            <h1>About Alex Min</h1>
            <h2>Studying Economics at Harvard, Class of 2024</h2>
            <p>Hi! Welcome to my website!!!!! I'm a first-year at Harvard interested in learning more about computer science.</p>
                        
           
            <AdditionalInformation
              title="Family"
              question="Do I have any siblings?"
              answer="Yes, a twin sister."
              setActiveAnswer={setActiveAnswer}
              setActiveTitle={setActiveTitle}
              setActiveQuestion={setActiveQuestion}
            />

            <AdditionalInformation
              title="Food"
              question="What's my favorite food?"
              answer="Naengmyeon"
              setActiveAnswer={setActiveAnswer}
              setActiveTitle={setActiveTitle}
              setActiveQuestion={setActiveQuestion}
            />

            <AdditionalInformation
              title="Location"
              question="Where do I live?"
              answer="Usually in Manhattan, but right now in Cabot House."
              setActiveAnswer={setActiveAnswer}
              setActiveTitle={setActiveTitle}
              setActiveQuestion={setActiveQuestion}
            />

            <AdditionalInformation
              title="Family"
              question="Do I have any siblings?"
              answer="Yes, a twin sister."
              setActiveAnswer={setActiveAnswer}
              setActiveTitle={setActiveTitle}
              setActiveQuestion={setActiveQuestion}
            />      

            <h1>{activeTitle}</h1>
            <p>{activeQuestion}</p>
            <p>{activeAnswer}</p>
            <p>Hi {greeting}</p>
          </div>
        </div>
      </div>
    );
}
