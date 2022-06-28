import { React } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
const cartItem = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={item.media.source} />
    </Card>
  );
};

export default cartItem;
