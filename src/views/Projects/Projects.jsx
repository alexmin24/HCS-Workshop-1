import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Machine Learning"
        description="I made a machine learn"
        link="https://google.com"
      />
      <Project
        title="Personal Portfolio"
        description="This website!!"
        link="https://bing.com"
      />
    </div>
  );
}
