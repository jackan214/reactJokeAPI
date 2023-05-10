import { SetStateAction, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Jokebuttons } from "./JokeButtons";
import { TextBox } from "./TextBox";

export function HomeScreen() {
  const [selectedJoke, setSelectedJokeType] = useState<string>("");

  const handleButtonClick = (jokeType: SetStateAction<string>): void => {
    let category = jokeType;
    fetch(`https://v2.jokeapi.dev/joke/${category}`)
      .then((response) => response.json())
      .then((data) =>
        data.type === "twopart"
          ? setSelectedJokeType(`${data.setup}\n${data.delivery}`)
          : setSelectedJokeType(data.joke)
      );
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" paddingTop="30px">
        What joke do you want to hear?
      </Typography>
      <Jokebuttons onButtonClick={handleButtonClick} />
      <TextBox onJokeSubmission={selectedJoke} />
    </Container>
  );
}
