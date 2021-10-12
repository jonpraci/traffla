import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { AddShoppingCart } from "@material-ui/icons";

export const Card = () => {
  return (
    <div className="products">
      <div id="contents">
        {JSON.parse(window.localStorage.getItem("cardarray"))
          .map((ele2) => {
            return ele2;
          })
          .map((e) => {
            return (
              <div key={Math.random()}>
                <div key={e[0].id} className="pair_card">
                  <div className="pair_item_img">
                    <span>{e[0].category}</span>
                    <img src={e[0].image} alt={e[0].title} />
                  </div>

                  <div className="pair_item_info">
                    <h6>{e[0].title}</h6>
                    <div>
                      <div className="pair_stars">
                        <span className="stars">
                          <StarRateIcon
                            className={
                              e[0].rating.rate >= 1 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              e[0].rating.rate >= 2 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              e[0].rating.rate >= 3 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              e[0].rating.rate >= 4 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              e[0].rating.rate >= 5 ? "color" : "notcolor"
                            }
                          />
                        </span>
                        <span>
                          <b>{e[0].rating.count}</b> reviews{" "}
                        </span>
                        <span>Only 4 left in stock - order soon</span>
                      </div>
                      <hr />
                      <div>
                        <h6>
                          <span style={{ color: "#fc3e39" }}>
                            $ {+e[0].price} -{" "}
                          </span>{" "}
                          <span className="line_through">
                            $ {Math.floor(e[0].price + 30)}
                          </span>
                        </h6>
                        <p className="pargraph">{e[0].description}</p>
                      </div>
                      <div className="card_btn"></div>
                    </div>
                    <Link to="/" onClick={() => window.scroll(0, 0)}>
                      <ButtonGroup>
                        <Button>
                          <AddShoppingCart /> All Products
                        </Button>
                      </ButtonGroup>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};
