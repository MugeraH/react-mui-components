import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Posts from "./Posts";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
  },
}));

function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Posts />
      <Posts />
      <Posts />
    </Container>
  );
}

export default Feed;
