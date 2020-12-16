import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import React from "react";
import { CategoryList } from "../components/home/category-list";
import { FlavorList } from "../components/home/flavor-list";
import { Order } from "../components/home/order";

const useStyles = makeStyles({
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
    color: grey[800],
  },
  emptyImg: {
    maxWidth: "60%",
    margin: "0 auto",
    display: "block",
  },
  emptyText: {
    fontWeight: "bold",
    fontSize: 40,
    color: grey[400],
    textAlign: "center",
  },
  checkoutBtn: {
    marginTop: 60,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 30,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: red[300],
    "&:hover": {
      backgroundColor: red[300],
    },
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid style={{ backgroundColor: grey[200] }} item md={8}>
        <Box width={1} pl={5} pr={5}>
          <Typography component={"h1"} className={classes.heading}>
            サイズ
          </Typography>
          <CategoryList />
          <Typography component={"h1"} className={classes.heading}>
            フレーバ
          </Typography>
          <FlavorList />
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box width={1} pl={5} pr={5}>
          <Typography component={"h1"} className={classes.heading}>
            注文
          </Typography>
          <Order />
          <Box>
            <img className={classes.emptyImg} src="images/no.png" />
          </Box>
          <Typography className={classes.emptyText}>何も入っていない</Typography>

          <Button variant="contained" fullWidth={true} classes={{ contained: classes.checkoutBtn }}>
            レシートへ
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export { Home };
