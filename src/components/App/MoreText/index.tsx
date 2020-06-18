import React from "react";
import {Button, Grid} from "@material-ui/core";

export const MoreText = () => {
    return (
        <Grid container justify={'center'}>
            <Grid container item justify={'center'}>
                <Button><u>U</u></Button>
                <Button>I</Button>
                <Button>U</Button>
                <Button>A:</Button>
                <MoreText />
            </Grid>
        </Grid>
    );
};