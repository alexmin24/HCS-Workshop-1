import React, { useState } from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Pre-K"
            description="Where I went to school when I was 4"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Elementary School"
            description="The Dalton School (Little Dalton)"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Middle School"
            description="The Dalton School (Big Dalton)"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="High School"
            description="The Dalton School (Big Dalton)"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="College"
            description="Harvard University"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
