import { Box, Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { OutlinedTextfield } from "../components/form/outlined-textfield";
import { CategoryList } from "../components/home/category-list";
import { FlavorList } from "../components/home/flavor-list";
import { OptionList } from "../components/home/option-list";
import { Order } from "../components/home/order";
import { SectionTitle } from "../components/typography/section-title";
import { SubSectionTitle } from "../components/typography/sub-section-title";

interface IValues {
  amount: number;
}

const useStyles = makeStyles({
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
  applyBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: red[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    maxWidth: 160,
    minWidth: 80,
    backgroundColor: red[100],
    "&:hover": {
      backgroundColor: red[100],
    },
  },
  fee: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[500],
  },
});

const Home: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const initialValues: IValues = {
    amount: 0,
  };

  function handleClick() {
    history.push("/receipt");
  }
  return (
    <Grid container>
      <Grid style={{ backgroundColor: grey[100] }} item md={8}>
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component={"h2"}>サイズ</SectionTitle>
          <CategoryList />
          <SectionTitle component={"h2"}>容器</SectionTitle>
          <OptionList />
          <SectionTitle component={"h2"}>フレーバ</SectionTitle>
          <FlavorList />
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component={"h2"}>注文</SectionTitle>
          <Order />
          <Divider />
          <SubSectionTitle>受取金額</SubSectionTitle>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("something");
              setSubmitting(true);
            }}
          >
            {() => (
              <Form>
                <Box width={1} display="flex">
                  <Box width={"75%"}>
                    <Field component={OutlinedTextfield} name="email" />
                  </Box>
                  <Box ml={1} width={"25%"}>
                    <Button disableElevation variant="contained" classes={{ contained: classes.applyBtn }}>
                      確定
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>

          <Divider />
          <Box width={1}>
            <Box component="ul" p={0} width={1}>
              <Box component="li" pt={1} display="flex" justifyContent="space-between">
                <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                  合計
                </Typography>
                <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                  1000円
                </Typography>
              </Box>
              <Box component="li" pt={1} display="flex" justifyContent="space-between">
                <Typography className={classes.fee}>受取金額</Typography>
                <Typography className={classes.fee}>2000円</Typography>
              </Box>
              <Box component="li" pt={1} display="flex" justifyContent="space-between">
                <Typography className={classes.fee}>お釣り</Typography>
                <Typography className={classes.fee}>1000円</Typography>
              </Box>
            </Box>
          </Box>
          <Button
            onClick={handleClick}
            variant="contained"
            fullWidth={true}
            classes={{ contained: classes.checkoutBtn }}
          >
            レシートへ
          </Button>
          {/* <Box>
            <img className={classes.emptyImg} src="images/no.png" />
          </Box>
          <Typography className={classes.emptyText}>何も入っていない</Typography>

          */}
        </Box>
      </Grid>
    </Grid>
  );
};
export { Home };
