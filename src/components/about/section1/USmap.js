"use client";

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const USMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const width = 975;
    const height = 610;

    const svg = d3.select(mapRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .style("max-width", "100%")
      .style("height", "auto");

    const path = d3.geoPath();

    const g = svg.append("g");

    const fetchData = async () => {
      try {
        const us = await d3.json('https://d3js.org/us-10m.v1.json');

        // Define color scale
        const color = d3.scaleQuantize([1, 10], d3.schemeBlues[9]);

        // Placeholder for unemployment data
        const unemployment = [
          { name: 'Arizona', rate: 6 },
          { name: 'Texas', rate: 5 },
          { name: 'Tennessee', rate: 7 },
          { name: 'New York', rate: 4 }
        ];

        const namemap = new Map([
          ['Arizona', 'Arizona'],
          ['Texas', 'Texas'],
          ['Tennessee', 'Tennessee'],
          ['New York', 'New York']
        ]);

        const valuemap = new Map(unemployment.map(d => [namemap.get(d.name), d.rate]));

        g.append("g")
          .attr("class", "states")
          .selectAll("path")
          .data(topojson.feature(us, us.objects.states).features)
          .enter().append("path")
          .attr("d", path)
          .attr("fill", d => {
            const stateName = d.properties.name;
            if (valuemap.has(stateName)) {
              return color(valuemap.get(stateName));
            } else {
              return "#444"; // Default color for other states
            }
          })
          .attr("stroke", "white")
          .attr("stroke-width", 0.5)
          .on("mouseover", function () {
            d3.select(this).attr("fill", "blue");
          })
          .on("mouseout", function (event, d) {
            const stateName = d.properties.name;
            if (valuemap.has(stateName)) {
              d3.select(this).attr("fill", color(valuemap.get(stateName)));
            } else {
              d3.select(this).attr("fill", "#444");
            }
          });

        g.append("path")
          .attr("class", "state-borders")
          .attr("fill", "none")
          .attr("stroke", "white")
          .attr("stroke-linejoin", "round")
          .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchData();
  }, []);

  return <svg ref={mapRef}></svg>;
};

export default USMap;
