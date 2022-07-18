import React from "react";

import { Stack, Paper, Container, Skeleton } from "@mui/material";

const HeroSkeletonLoading = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        minHeight: "500px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "slategray",
        borderRadius: "0",
      }}
    >
      <Container
        sx={{
          paddingTop: { xs: "62px" },
          display: { sm: "flex" },
          alignItems: { sm: "center" },
        }}
      >
        <Stack
          sx={{
            alignItems: { xs: "center" },
            padding: { xs: "10px 0" },
          }}
        >
          <Skeleton width={500} height={56} />
          <Skeleton variant="rectangular" width={500} height={100} />
          <Skeleton
            width={200}
            height={30}
            variant="rectangular"
            sx={{ alignSelf: "center", m: 3 }}
          />
        </Stack>
        <Stack
          sx={{
            padding: { xs: "10px 10px 30px", sm: "10px 10px" },
            flexBasis: { sm: "fit-content" },
          }}
        >
          <Skeleton variant="rectangular" width={500} height={380} />
        </Stack>
      </Container>
    </Paper>
  );
};

export default HeroSkeletonLoading;
