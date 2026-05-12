import React from "react";

const Heading2 = ({ title = "About", color="black" }) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "fit-content",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(40px, 5vw, 60px)",
          fontWeight: 800,
          color:color,
          lineHeight: 1.2,
        

          borderBottom: "20px solid transparent",
          borderImage:
            "url('/images/heading-bottom.png') 30 stretch",
          paddingBottom: "8px",
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Heading2;