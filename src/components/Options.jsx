import React, { useState } from "react";

const Options = () => {
  const [timeFrame, setTimeFrame] = useState("");

  return (
    <div>
      <input type="hidden" name="installation_date" value={timeFrame} />
      <button
       type="button"
        onClick={() => setTimeFrame("0-3 Months")}
      >
        <img src="/images/dummylogo.png" />
      </button>
      <button
        type="button"
        onClick={() => setTimeFrame("3-6 Months")}
      >
        <img src="/images/dummylogo.png" />
      </button>
    </div>
  );
};

export default Options;