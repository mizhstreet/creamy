import { Box, Button, Grid, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { blue, grey, pink, red } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { CheckboxWithLabel } from "formik-material-ui";
import { OutlinedTextfield } from "../components/form/outlined-textfield";
import { useHistory } from "react-router-dom";

interface IValues {
  email: string;
  password: string;
}

const useStyles = makeStyles({
  logo: {
    maxWidth: 150,
    alignSelf: "center",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bolder",
    textAlign: "center",
    marginTop: 30,
    color: pink[300],
    marginBottom: 60,
  },
  coloredGreeting: {
    color: blue[800],
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
  applyBtn: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: blue[800],
    "&:hover": {
      backgroundColor: blue[800],
    },
  },
  fee: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[500],
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: grey[800],
    fontWeight: "bold",
  },
});

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().min(4, "短すぎる!").max(50, "長すぎる!").required("必ず入力してください"),
  password: Yup.string().min(4, "短すぎる!").max(50, "長すぎる!").required("必ず入力してください"),
});

const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const initialValues: IValues = {
    email: "",
    password: "",
  };

  function handleClick() {
    history.push("/");
  }

  return (
    <Grid container justify="center">
      <Grid item md={5}>
        <Box height={1} width={1} pl={5} pr={5}>
          <Box display="flex" width={1} justifyContent="center" pt={"20%"}>
            <img className={classes.logo} src="images/logo1.png" />
          </Box>
          <Typography className={classes.greeting}>
            <span className={classes.coloredGreeting}>こん</span>に<span className={classes.coloredGreeting}>ちは</span>
          </Typography>
          <Formik
            validationSchema={DisplayingErrorMessagesSchema}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("something");
              setSubmitting(true);
            }}
          >
            {() => (
              <Form>
                <Box width={1}>
                  <Box width={1}>
                    <InputLabel className={classes.inputLabel} htmlFor="email">
                      Username
                    </InputLabel>
                    <Field placeholder="IDを入力してください" component={OutlinedTextfield} name="email" />
                  </Box>
                  <Box width={1}>
                    <InputLabel className={classes.inputLabel} htmlFor="email">
                      パスワード
                    </InputLabel>
                    <Field
                      type="password"
                      placeholder="パスワードを入力してください"
                      component={OutlinedTextfield}
                      name="password"
                    />
                  </Box>
                  <Box width={1}>
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="checked"
                      Label={{ label: "マスタモード" }}
                    />
                  </Box>
                  <Box width={1}>
                    <Button onClick={handleClick} variant="contained" classes={{ contained: classes.applyBtn }}>
                      ログイン
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};
export { Login };
