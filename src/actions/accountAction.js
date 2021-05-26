const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        id: 1,
        name: "Alexsandro Ricardo",
        username: "alexx",
        email: "alexsandro@gmail.com",
        avatar: "/images/avatars/avatar_1.jpeg",
      },
    });
  };
};

export default signIn;
