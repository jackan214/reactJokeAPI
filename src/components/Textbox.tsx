import { Box, Typography } from "@mui/material";

type Props = {
  onJokeSubmission: string;
};

export function TextBox({ onJokeSubmission }: Props) {
  return (
    <Box
      sx={{
        width: "70%",
        margin: "0 auto",
        mt: 5,
        border: "1px solid gray",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
      }}
    >
      <Typography variant="h6" component="h2" align="center">
        {onJokeSubmission}
      </Typography>
    </Box>
  );
}
