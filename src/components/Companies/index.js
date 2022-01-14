import React from "react";
import "../../styles/Companies.min.css";

const Companies = () => {
  return (
    <section className="companies bg-white" id="companies">
      <div className="container py-5">
        <div className="series-a br-2 bg--light-grey p-2 mx-auto d-flex align-items-center justify-content-between">
          <div>
            <small>We've raised our Series A</small>
            <small className="d-block text-secondary">
              The Redpoint Ventures team is joining our roster of stellar
              investors 💜
            </small>
          </div>
          <a
            href="https://medium.com/@michaelvillar/719ef4210e18"
            className="text--purple"
            style={{ whiteSpace: "nowrap" }}
          >
            Read more
          </a>
        </div>
        <div className="my-5">
          <h2 className="section-header text-center mb-4">Used by</h2>
          <div className="company-list">
            <div>Fivetran</div>
            <div>Watershed</div>
            <div>Mighty</div>
            <div>clubhouse</div>
            <div>Trancend</div>
            <div>Runway</div>
            <div>ambrook</div>
            <div>cocoon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
