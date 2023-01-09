import React, { useState } from "react";

const Filters = () => {
  const [visibleOnSmallScreen, setVisibleOnSmallScreen] = useState("invisible");

  return <div className="mb-4 lg:mb-0">Filters</div>;
};

export default Filters;
