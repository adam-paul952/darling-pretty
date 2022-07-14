import React from "react";

import { Typography } from "@mui/material";
interface TitleProps {
  children?: React.ReactNode;
}

const TableTitle = (props: TitleProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

export default TableTitle;
