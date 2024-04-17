"use client";

import * as React from "react";
import { setupApiMockServer } from "@/api/server";

export default function ClientSetup() {
  React.useEffect(() => {
    setupApiMockServer();
  });

  return <React.Fragment></React.Fragment>;
}
