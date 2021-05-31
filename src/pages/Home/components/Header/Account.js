import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";

function Account() {
  const account = useSelector((state) => state.acount);

  return (
    <>
      <Avatar alt="Remy Sharp" src={account.user && account.user.avatar} />
    </>
  );
}

export default Account;
