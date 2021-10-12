import React, { useState, useEffect } from "react";
import { UsedataContext } from "../../context";
const Ranger = ({ newdata }) => {
  const [minval, setMinval] = useState(5);
  const maxnumarray = [];

  const myEle = UsedataContext().data.data;

  const handleChange1 = (e) => {
    setMinval(e.target.value);

    const datafilter = myEle.filter((ele) => {
      return ele.price >= minval;
    });
    newdata(datafilter);
  };

  useEffect(() => {
    document.getElementById("typeinp").click();
  }, [myEle]);

  const maxnum = myEle.map((ele) => ele.price);
  maxnumarray.push(...maxnum);

  return (
    <div className="pair_range">
      <div className="price_text">
        <span>{minval}</span>
        <span>${Math.max(...maxnumarray)}</span>
      </div>
      <div className="price_input">
        <input
          id="typeinp"
          type="range"
          min={Math.min(...maxnumarray)}
          max={Math.max(...maxnumarray)}
          value={minval}
          onChange={handleChange1}
          onClick={handleChange1}
          step="1"
        />
      </div>
    </div>
  );
};

export default Ranger;
