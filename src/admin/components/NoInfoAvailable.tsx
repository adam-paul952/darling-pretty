import React from "react";

import { Box } from "@mui/material";

interface INoInfoAvailableProps {
  variant: string;
}

const NoInfoAvailable: React.FC<INoInfoAvailableProps> = (props) => {
  const { variant } = props;
  const noInfoString = `No current ${variant}...`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {noInfoString}
    </Box>
  );
};

export default NoInfoAvailable;
