import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { AddShoppingCart } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons//FavoriteBorder";

import { Link } from "react-router-dom";
const Single = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${window.location.pathname}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [setData]);

  return (
    <div className="products">
      <div id="contents">
        {
          <div key={data.id} className="pair_card">
            <div className="pair_item_img">
              <span>{data.category}</span>

              <img src={data.image} alt={data.title} />
            </div>

            <div className="pair_item_info">
              <h6>{data.title}</h6>
              <div>
                <hr />
                <div>
                  <h6>
                    <span style={{ color: "#fc3e39" }}>$ {+data.price} - </span>{" "}
                    <span className="line_through">
                      $ {Math.floor(data.price + 30)}
                    </span>
                  </h6>
                  <p className="pargraph">{data.description}</p>
                </div>
                <div className="card_btn">
                  <Link to="/" onClick={() => window.scroll(0, 0)}>
                    <ButtonGroup>
                      <Button>
                        <AddShoppingCart /> All Products
                      </Button>
                    </ButtonGroup>
                  </Link>

                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>
                      <FavoriteBorderIcon /> Add To Cart
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
export default Single;
