import React from "react";

import { Card, CardContent, Grid, Skeleton } from "@mui/material";

const DisplaySessionsLoading = () => {
  return (
    <Grid item xs={10}>
      <Card
        sx={{
          display: "flex",
          backgroundColor: "gainsboro",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "4%",
            justifyContent: "center",
          }}
        >
          <Skeleton variant="text" width={150} height={30} />
          <Skeleton variant="text" height={30} width={135} />
          <Skeleton variant="text" width={52} height={30} />
          <Skeleton variant="text" width={210} height={35} />
        </CardContent>
        <Skeleton
          variant="rectangular"
          width={440}
          height={308}
          sx={{
            flex: { sm: 0.5 },
            margin: "20px",
          }}
        />
      </Card>
    </Grid>
  );
};

export default DisplaySessionsLoading;
