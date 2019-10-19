import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import ReactMapGL from "react-map-gl";
import("../../node_modules/mapbox-gl/dist/mapbox-gl.css");

// import("./job-page.scss");

export const JobPageTemplate = ({
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  // position,
  viewport
}) => (
  <div className="content">
    <div
      className="margin-top-0"
      style={{
        backgroundColor: "#000"
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
          backgroundColor: "#f40",
          color: "white",
          padding: "1rem"
        }}
      >
        {title}
      </h2>
    </div>
    {/* <LeafletMap center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafletMap> */}

    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoia2FybGl0by13aG8tZWxzZSIsImEiOiJjazFxN3RicDkxMWt3M2NsODRlZ3J0NmFvIn0.MVarTFnBtTRl9YXJSNDEpQ"
    />
  </div>
);

JobPageTemplate.propTypes = {
  title: PropTypes.string
};

const JobPage = ({ data }) => {
  // console.log("data", data);
  const jobs = data.test.listJobs.items;

  console.log("jobs", jobs);

  jobs.forEach(job => {
    console.log(job);
  });

  return (
    <Layout>
      {jobs.map(job => (
        <JobPageTemplate
          key={job.id}
          title={job.id}
          // position={{
          //   lat: 51.505,
          //   lng: -0.09,
          //   zoom: 13
          // }}
          viewport={{
            width: "100vw",
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
          }}
        />
      ))}
    </Layout>
  );
};

// JobPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       job: PropTypes.object
//     })
//   })
// };

export default JobPage;

export const jobPageQuery = graphql`
  query JobPage {
    test {
      listJobs {
        items {
          id
          category
        }
      }
    }
  }
`;
