import React, {useContext} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import {multiStepContext} from './StepContext'
import {Stepper, StepLabel, Step} from '@material-ui/core'


const Tabs = () => {
    const {step, finalData} = useContext(multiStepContext)
   const showStep = (step) =>{
         switch(step){
             case 1:
                 return <Step1/>
                 
             case 2:
                return <Step2/>
                
             case 3:
                return <Step3/>
         }
    }

    return (
        <>
        <h1>Submit idea</h1>
        <div>
        <Stepper style={{width: '18%'}} activeStep={step - 1} orientation="horizontal">
        <Step>
            <StepLabel></StepLabel>
        </Step>
        <Step>
            <StepLabel></StepLabel>
        </Step>
        <Step>
            <StepLabel></StepLabel>
        </Step>
        </Stepper>
        </div>
        { showStep(step) }
        </>
    )
}

export default Tabs
