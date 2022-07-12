import './App.css';
import {Box, Container, Stack, TextField, Typography} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from "react";
import {TimePicker} from "@mui/x-date-pickers";

function App() {
  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date('00:00'));
  const workTime = ((7 * 60)+42) * 60000
     function onChange(newDate) {
         setStart(newDate);
         const time = newDate.getTime();
         setEnd(time + workTime);
     }
     function onChange2(newDate) {}


  return (

      <Container maxWidth={'sm'}>
<Box sx={{
    paddingTop: 3,
textAlign:"center",
}}>

    <img src={'https://www.inps.it/nuovoportaleinps/modelliNuovo/assets/img/img-not-available.jpg'}
         alt="" width={200} height={150} />
</Box>


          <Stack mt={10} spacing={4}>
                <StaticTimePickerDemo disable={false} text={'Orario ingresso'} time={start} onChange={onChange}/>
                 <StaticTimePickerDemo disable={true} text={'Orario uscita'} time={end} onChange={onChange2}/>

          </Stack>
      </Container>
      );
}

function StaticTimePickerDemo(props){
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          //  minTime={new Date(0,0,0,7,30)}
            ampm={false}
            disabled={props.disable}
            label={props.text}
            value={props.time}
            onChange={props.onChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
  );
}



export default App;
