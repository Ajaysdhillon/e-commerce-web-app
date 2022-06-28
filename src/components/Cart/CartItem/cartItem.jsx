import { React } from "react";
import useStyles from "./styles";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const cartItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_wih_symbol}
        </Typography>
        <CardActions className={classes.cardActions}>
          <div className={classes.button}>
            <Button type="button" size="small">
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small">
              +
            </Button>
          </div>
          <Button variant="contained" type="button" color="secondary">
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default cartItem;
