import React from "react";

function Product(props) {
  const { image } = props;
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col">
          <div className="card h-100" style={{ border: "1px solid black" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <h5 className="card-title text-center">
                {" "}
                RAZER BLACKWIDOW (GREEN/YELLOW SWITCH)
              </h5>
              <h6 className="card-text text-center">
                {" "}
                <strong>Rs.26,000</strong>{" "}
              </h6>
              <div
                className="buttons "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button className="btn btn-secondary btn-sm mx-2">
                  {" "}
                  Add to cart{" "}
                </button>
                <button className="btn btn-secondary btn-sm mx-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
       
       
      
      </div>
    </div>
  );
}

export default Product;
