import { Box, Typography } from "@mui/material";

type Props = {
  onJokeSubmission: string;
};

export function TextBox({ onJokeSubmission }: Props) {

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        mt: 5,
        border: "2px solid gray",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px",
      }}
    >
      <Typography variant="h6" component="h2" align="center" padding="10px 10px 10px 10px">
        {onJokeSubmission}
      </Typography>
    </Box>
  );
}
