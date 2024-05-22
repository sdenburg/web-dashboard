"use client";

import * as React from "react";
import { useRef } from "react";

import CytoscapeComponent from "react-cytoscapejs";

export default function Graph() {
  const cyRef = useRef<cytoscape.Core | null>(null);

  const selected = 1;

  const count = 10;
  const nodes = Array.from({ length: count }).map((val, i) => ({
    data: { id: i.toString(), label: "Node " + i },
  }));
  const edges = Array.from({ length: count - 1 }).map((val, i) => ({
    data: {
      source: i.toString(),
      target: (i + 1).toString(),
      label: "Edge test",
    },
  }));
  const edges2 = Array.from({ length: count - 1 })
    .filter((val, i) => i % 2 == 0)
    .map((val, i) => ({
      data: {
        source: i.toString(),
        target: (i + 3).toString(),
        label: "Edge test",
      },
    }));
  const elements = [...nodes, ...edges, ...edges2];

  const layout = {
    name: "circle",
    avoidOverlap: true,
    condense: true,
  };

  React.useEffect(() => {
    cyRef.current
      ?.filter(
        (ele, i, eles) => ele.isNode() && ele.id() == selected.toString(),
      )
      .addClass("selected")
      .outgoers()
      .addClass("secondary");

    cyRef.current
      ?.style()
      .selector("node.selected")
      .style({ "background-color": "red", shape: "star" })
      .selector("node.secondary")
      .style({ "background-color": "yellow" })
      .selector("edge.secondary")
      .style({ "line-color": "yellow" })
      .update();
  }, []);

  return (
    <CytoscapeComponent
      elements={elements}
      layout={layout}
      style={{ width: "100%", height: "200px" }}
      cy={(cy) => {
        cyRef.current = cy;
      }}
    />
  );
}
