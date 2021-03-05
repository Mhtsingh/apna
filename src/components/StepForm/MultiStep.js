import React from 'react'
import { useForm, useStep } from "react-hooks-helper";
import Step1 from "./Step1"
import Step2 from "./Step2"


const defaultData = {
    client_name: "",
    client_email:"",
    client_phone:"",
    client_state:"",
    idea_title: "",
    idea_cat:"",
    idea_summery:"",
    idea_invt:"",
    idea_date:"",
    idea_date2:"",
    idea_share:"",
    idea_draw:""
}


const steps = [
    {id: "step1"},
    {id: "step2"}
]

const MultiStep = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch(step.id){
      case "step1":
          return <Step1 {...props}/>
      case "step2":
          return <Step2 {...props}/>    
  }

    return (
        <>
            
        </>
    )
}

export default MultiStep
