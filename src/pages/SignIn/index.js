import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlined from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexDirection: "row",
    height: "100vh",
  },

  image: {
    backgroundImage: "url(/images/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  // left: {
  //   background: "blue",
  //   flexBasis: "58%",

  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // right: {
  //   background: "purple",
  //   flexBasis: "42%",
  // },
  // form: {
  //   display: "flex",
  //   flexDirection: "column",
  //   margin: "65px 32px",
  //   alignItems: "center",
  // },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        md={7}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.image}
      >
        <Typography style={{ color: "#fff", fontSize: 25, lineHeight: "45px" }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255,255,255, 0.7)",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          software.
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" m={8}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
        </Box>
      </Grid>
    </Grid>

    //   // Flex Container
    //   <div className={classes.root}>
    //     {/* Flex item container */}
    //     <div className={classes.left}>
    //       <Typography style={{ color: "#fff", fontSize: 25, lineHeight: "45px" }}>
    //         <strong>
    //           Simplificando a forma de conectar desenvolvedores de software!
    //         </strong>
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         style={{
    //           color: "rgb(255,255,255, 0.7)",
    //           marginTop: 30,
    //           fontSize: 15,
    //           lineHeight: "30px",
    //         }}
    //       >
    //         Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
    //         software.
    //       </Typography>
    //     </div>

    //     {/* Flex item */}
    //     <div className={classes.right}>
    //       <form className={classes.form}>
    //         <h4>Acesso</h4>
    //         <input type="text" />
    //         <input type="text" />
    //       </form>
    //     </div>
    //   </div>
  );
}

export default SignIn;
