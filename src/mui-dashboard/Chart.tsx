"use client";

import * as React from "react";
import Title from "./Title";

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Visualization</Title>
      <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}></div>
    </React.Fragment>
  );
}
