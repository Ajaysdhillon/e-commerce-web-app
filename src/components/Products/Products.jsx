import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://in.images.search.yahoo.com/search/images;_ylt=AwrxysxbtbBiEDsA7hG7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=shoes&fr2=piv-web&type=E211IN1274G0&fr=mcafee#id=3&iurl=https%3A%2F%2Fcdn.sweatband.com%2Fhead_sprint_team_2.0_mens_tennis_shoes_head_sprint_team_2.0_mens_tennis_shoes_2000x2000.jpg&action=click",
  },
  {
    id: 2,
    name: "Mackbook",
    description: "Apple mackbook",
    price: "$150",
    image:
      "https://in.images.search.yahoo.com/search/images;_ylt=AwrxzAGCtbBirSwAUW.7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=macbbok&fr2=piv-web&type=E211IN1274G0&fr=mcafee#id=5&iurl=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fd7dd917d-49d4-4c4a-a769-e81071720765.6fbb62b3b6a44fc4ab63066bb9dab8fe.jpeg&action=click",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
