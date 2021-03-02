import React, {useState} from 'react'
import Tabs from './Tabs';


export const multiStepContext = React.createContext();
const StepContext = () => {

    const [step, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    function submitData(){

    }

    return (
        <div>
            <multiStepContext.Provider vlaue={{step, setStep, userData, setUserData, finalData, setFinalData,submitData}}>
                <Tabs/>
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext
