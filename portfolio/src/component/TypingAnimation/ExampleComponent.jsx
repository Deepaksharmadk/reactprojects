import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
function ExampleComponent() {
  const [textColor, setTextColor] = useState("yellow");
  return (
    <div>
      <TypeAnimation
        style={{
          fontSize: "2rem",
          color: textColor,
          fontWeight: "bold",
          /* when working without ref and classNames, the manipulated style needs to be
             applied to the parent element, because the TypeAnimation component is perma-memoized */
        }}
        preRenderFirstString={true}
        sequence={[
          500,
          "Frontend Developer",
          // initially rendered starting point
          1000,
          "Backend Developer",
          1000,
          "As well as Full Stack Developer",
          1000,
          "Quick Learner.",
          500,
        ]}
        speed={{ type: "keyStrokeDelayInMs", value: 250 }}
        repeat={Infinity}
      />
    </div>
  );
}

export default ExampleComponent;
