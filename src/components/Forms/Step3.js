import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import {multiStepContext} from './StepContext';



const Step3 = () => {
    const { setStep, userData, setUserData,submitData} = useContext(multiStepContext);

  return (
    <div>
      <div>
        <TextField
          label="Name"
          margin="normal"
          variant="outlied"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        /
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <TextField
          label="State"
          margin="normal"
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <Button varient="contained" onClick={submitData} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
