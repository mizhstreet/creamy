import { Box, Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import React from "react";
import { OutlinedTextfield } from "../components/form/outlined-textfield";
import { CategoryList } from "../components/home/category-list";
import { FlavorList } from "../components/home/flavor-list";
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
});

const Home: React.FC = () => {
  const initialValues: IValues = {
    amount: 0,
  };
  const classes = useStyles();
  return (
    <Grid container>
      <Grid style={{ backgroundColor: grey[100] }} item md={8}>
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component={"h2"}>サイズ</SectionTitle>
          <CategoryList />
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
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              submitForm,
              /* and other goodies */
            }) => (
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
          {/* <Box>
            <img className={classes.emptyImg} src="images/no.png" />
          </Box>
          <Typography className={classes.emptyText}>何も入っていない</Typography>

          <Button variant="contained" fullWidth={true} classes={{ contained: classes.checkoutBtn }}>
            レシートへ
          </Button> */}
        </Box>
      </Grid>
    </Grid>
  );
};
export { Home };
