import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlined from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useSelector, useDispatch } from "react-redux";

import signIn from "../../actions/accountAction";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  image: {
    backgroundImage: "url(/images/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <a color="inherif" href="#">
        Alexsandro Ricardo
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const account = useSelector((state) => state);

  async function handleSignIn() {
    //chama a api
    //se retorno ok, direciona para home,
    //se não exibe mensagem para o usuário

    try {
      await dispatch(signIn(email, password));

      // await authService.singIn(email, password);
      // navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  console.log(account);

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
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignIn}
            >
              Entrar
            </Button>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
            <Grid item>
              <Link>Esqueceu a sua senha?</Link> <Link>Não tem uma conta?</Link>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
