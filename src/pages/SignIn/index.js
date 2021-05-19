import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  left: {
    background: "blue",
    flexBasis: "58%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    background: "purple",
    flexBasis: "42%",
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    // Flex Container
    <div className={classes.root}>
      {/* Flex item container */}
      <div className={classes.left}>
        <h2>Título</h2>
        <h4>SubTitulo</h4>
      </div>

      {/* Flex item */}
      <div className={classes.right}>Form</div>
    </div>
  );
}

export default SignIn;
