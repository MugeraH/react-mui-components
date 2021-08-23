import React, { ReactElement } from "react";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    background: blue[500],

    "&:hover": {
      color: "white",
      background: theme.palette.success.light,
    },
  },
}));

interface Props {}

function button({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Button className={classes.button}>Hi Hughes</Button>
      </div>

      <div style={{ margin: "20px" }}></div>
      <Button
        variant="contained"
        className="login-btn"
        // color="secondary"
        size="large"
        startIcon={<AcUnitIcon />}
        endIcon={<AcUnitIcon />}
      >
        {" "}
        Click me
      </Button>
      <div style={{ margin: "20px" }}></div>
      <IconButton
        aria-label="snow"
        color="primary"
        onClick={() => alert("Can we go make a snowman")}
      >
        <AcUnitIcon />
      </IconButton>
    </div>
  );
}

export default button;
