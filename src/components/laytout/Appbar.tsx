import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";

import Search from "@material-ui/icons/Search";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    // backgroundColor: "white",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "7px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "45%",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      // @ts-ignore
      display: (props) => (props.open ? "flex" : "none"),
      width: "55%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  logoLg: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoSm: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "unset",
    },
  },
  icons: {
    alignItems: "center",
    gap: "20px",
    // @ts-ignore
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {},
  searchBtn: {
    height: 30,
    width: 30,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badgeIcon: {
    height: 30,
    width: 30,
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Appbar() {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.logoLg}>
          Hughes Mugera
        </Typography>
        <Typography variant="h5" className={classes.logoSm}>
          Hughes
        </Typography>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel
            className={classes.cancel}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>

        <div className={classes.icons}>
          <Search
            className={classes.searchBtn}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail className={classes.badgeIcon} />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications className={classes.badgeIcon} />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
