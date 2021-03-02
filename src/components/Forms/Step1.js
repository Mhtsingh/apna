import React, {useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import {multiStepContext} from './StepContext';

const Step1 = () => {

    const { setStep, userData, setUserData} = useContext(multiStepContext);

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
        <Button varient="contained" onClick={() => setStep(2)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step1;
