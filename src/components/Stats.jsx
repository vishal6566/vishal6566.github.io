import React from "react";

const Stats = () => {
  return (
    // streak 
    <div>
      <div style={{ width: "50%", margin: "auto" }}>
        <a href="https://github.com/vishal6566">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vishal6566" alt=""
          />
        </a>
      </div>
 
      <div
        style={{
          width: "80%",
          height: "fit-content",
          display: "flex",
          gap:"10px",
          margin: "auto",
          paddingTop:"10px"
        }}
      >
        <a href="https://github.com/vishal6566">  
          <img 
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishal6566" alt="" //launguages
          />
        </a>
        <a href="https://github.com/vishal6566">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=vishal6566&count_private=true&show_icons=true"  alt=""//stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;