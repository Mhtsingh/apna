import React, {useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import {multiStepContext} from './StepContext';


const Step2 = () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);

  return (
    <div>
      <div>
        <TextField
          label="Title"
          margin="normal"
          variant="outlied"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <TextField
          label="Abstract"
          margin="normal"
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        /
        <TextField
          label="Summery"
          margin="normal"
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <TextField
          label="Background"
          margin="normal"
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <Button varient="contained"  onClick={() => setStep(3)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
