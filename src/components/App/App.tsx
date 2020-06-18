import React from 'react';
import './App.scss';
import {Grid,Button} from "@material-ui/core";
import { MoreText } from './MoreText';

function App() {
  return (
    <Grid container className={'editor-main-container'} justify={'center'}>
      <Grid container item justify={'center'}>
          <Button>B</Button>
          <Button>I</Button>
          <Button>U</Button>
          <Button>A:</Button>
          <MoreText />
      </Grid>

    </Grid>
  );
}

export default App;
