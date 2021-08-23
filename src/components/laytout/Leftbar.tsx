import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
 
  PhotoCameraOutlined,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    paddingTop: theme.spacing(14),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      border: "1px solid #ece7e7",
      color: "grey",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
   
    gap: "6px",
   

    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },

  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCameraOutlined />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
