import logo from './logo.svg';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import Recognition from "./components/Recognition";
import HandDrawZone from "./components/HandDrawZone";
import NavBar from "./components/Navbar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
      >
        <Grid spacing={2} item xs={3}>
            <Paper elevation={3} style={{padding: '2vh', minWidth:'50vh'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <HandDrawZone/>
                    </Grid>
                    <Grid item xs={6}>
                        <Recognition/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
