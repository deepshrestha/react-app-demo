import { Typography } from "@material-ui/core";
import React from "react";

const ErrorMessage = ({ errorMsg }) => {
  return (
    <>
      <Typography conponent="p" color="error">
        {errorMsg}
      </Typography>
    </>
  );
};

export default ErrorMessage;
