import React, { useEffect } from "react";
import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import Appbar from "./laytout/Appbar";
import Leftbar from "./laytout/Leftbar";
import Rightbar from "./laytout/Rightbar";
import Feed from "./laytout/Feed";
import Add from "./laytout/Add";
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Appbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
}

export default Home;
