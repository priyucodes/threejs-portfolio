import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-3.0, 6.0, 0],
        center: [80, 0],
        scale: 800,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      {/* https://www.npmjs.com/package/react-datamaps-india */}
      <Annotation
        subject={[77.1025, 28.7041]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          fontSize={20}
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#Fff"
        >
          {"Delhi"}
        </text>
      </Annotation>
      <Annotation
        // East,North
        subject={[73.8777, 19.076]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          fontSize={20}
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#Fff"
        >
          {"Mumbai"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
