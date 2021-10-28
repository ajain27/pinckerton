import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

export default function Results({ data }) {
  const [showLoader, setShowLoader] = useState(true);
  let [spinnerColor, setSpinnerColor] = useState("#383838");

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, [data]);

  return (
    <>
      {showLoader ? (
        <ClipLoader size={100} color={spinnerColor} css={override} />
      ) : (
        data.map((d) => (
          <div className="resultsContainer p-4 mt-2 mb-3">
            <div className="my-3 data">
              <Row>
                <Col className="minWidth300">
                  <div className="mb-3 dark">Asset Name</div>
                  <h5 className="mb-5">{d.assetName}</h5>
                </Col>
                <Col className="minWidth300">
                  <div className="mb-3 dark">City</div>
                  <span className="details mb-5">{d.city}</span>
                </Col>
                <Col className="minWidth300">
                  <div className="mb-3 dark">Building</div>
                  <span className="details mb-5">{d.buildingName}</span>
                </Col>
                <Col className="minWidth300">
                  <div className="mb-3 dark">Floor Code</div>
                  <span className="details mb-5">{d.floorCode}</span>
                </Col>
              </Row>
            </div>
            <div className="data">
              <Row>
                <Col className="minWidth300"></Col>
                <Col className="minWidth300">
                  <div className="mb-3 dark">Identifier</div>
                  <span className="details moreData">{d.identifier}</span>
                </Col>
                <Col className="minWidth300">
                  <div className="mb-3 dark">Category</div>
                  <span className="details moreData">{d.category}</span>
                </Col>
                <Col className="minWidth300">
                  <div className="mb-3 dark">Customer</div>
                  <span className="details moreData">{d.customerName}</span>
                </Col>
              </Row>
            </div>
          </div>
        ))
      )}
    </>
  );
}
