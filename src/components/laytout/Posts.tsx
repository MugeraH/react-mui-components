import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));
interface Props {}

const Posts = (props: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1629474468850-b1a7b63c79b3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First Post</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Corrupti iusto cumque molestiae, dignissimos non possimus! Maxime
            debitis velit dolores quas!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Corrupti iusto cumque molestiae, dignissimos non possimus! Maxime
            debitis velit dolores quas!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {" "}
          Share
        </Button>
        <Button size="small" color="primary">
          {" "}
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Posts;
