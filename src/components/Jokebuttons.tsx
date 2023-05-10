import { Button, Grid } from "@mui/material";

export function Jokebuttons(props: { onButtonClick: (arg0: string) => void; }) {
    const handleClick = (jokeType: string) => {
        props.onButtonClick(jokeType);
    };

    return (
        <Grid container spacing={2} paddingTop="2rem" justifyContent="center">
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            onClick={() => handleClick("Programming")}
            >
            Programming
            </Button>
        </Grid>
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            onClick={() => handleClick("Pun")}
            >
            Pun
            </Button>
        </Grid>
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            onClick={() => handleClick("Spooky")}
            >
            spooky
            </Button>
        </Grid>
        </Grid>
    );
}
