import { SetStateAction, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Jokebuttons } from "./Jokebuttons";
import { TextBox } from "./Textbox";

export function Homescreen() {
  const [selectedJoke, setSelectedJokeType] = useState<string>("");

  const handleButtonClick = (jokeType: SetStateAction<string>): void => {
    
    setSelectedJokeType(jokeType);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" paddingTop="30px">
        What joke are you in the mood for?
      </Typography>
      <Jokebuttons onButtonClick={handleButtonClick} />
      <TextBox onJokeSubmission={selectedJoke} />
    </Container>
  );
}
