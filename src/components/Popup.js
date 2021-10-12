import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddShoppingCart } from "@material-ui/icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(null);
  const [inputval, setInputval] = useState("");

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handelChange2 = (e) => {
    setInputval(e.target.value);
  };

  const handelPrice = (id) => {
    const filtele = JSON.parse(window.localStorage.getItem("cardarray"))
      .map((ele2) => {
        return ele2;
      })
      .filter((e) => {
        return e[0].id === id;
      });

    setPrice(filtele[0][0].price * inputval);
    setInputval(null);
    console.log(filtele[0][0].price * inputval);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddShoppingCart /> MY CART
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h6>MY CART</h6>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {JSON.parse(window.localStorage.getItem("cardarray"))
                .map((ele2) => {
                  return ele2;
                })
                .map((e) => {
                  return (
                    <div key={Math.random()}>
                      <h6>
                        Total Price: <span> $ {price} </span>{" "}
                      </h6>
                      <div className="pair_item_img full_width">
                        <span>${e[0].price}</span>
                        <img src={e[0].image} alt={e[0].title} />
                      </div>
                      <div>
                        <h6> {e[0].title} </h6>
                      </div>
                      <div className="pair_in_dec_btn">
                        <form
                          onSubmit={(event) => {
                            event.preventDefault();
                            handelPrice(e[0].id);
                          }}
                        >
                          <input
                            type="number"
                            value={inputval}
                            onChange={handelChange2}
                            placeholder="How much pices you want"
                          />

                          <Button onClick={() => handelPrice(e[0].id)}>
                            Done
                          </Button>
                        </form>
                      </div>
                      <hr />
                    </div>
                  );
                })}
            </Typography>

            <Button> Checkout </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
