import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./AddActivityForm.css";
import { Stack, TextField } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import {useDispatch, useSelector} from 'react-redux';
import { addActivity } from '../actions/activityActions';
import { listActivities } from '../actions/activityActions';
const initialFieldValues = {
  id: 0,
  denumire: "",
  descriere: "",
  data: new Date(),
  durata: 0,
  oraIncepere: "",
  codAcces: "",
};
function AddActivityForm(props) {
  const dispatch = useDispatch()
  const userInfo = props.userInfo
  const [values, setValues] = useState(initialFieldValues);
  const [message,setMessage] = useState("")
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
 const handleSubmit = (e)=>{

   e.preventDefault()
   try {
     var rez = values.oraIncepere.split(":") 
     console.log(rez)
     if (rez.length !== 2 )
     {
      setMessage("Ora incepere trebuie sa fie de forma ora:minut")
     }
     else if ( isNaN(rez[0]) || isNaN(rez[1])) {
      setMessage("Ora incepere trebuie sa fie de forma ora:minut")
     }
    
    else if ( values.denumire ==="" || values.descriere ==="" || values.codAcces == "" )
    {
     setMessage("Toate campurile sunt obligatorii !")
    }
    else if (isNaN(values.durata))
    {
     setMessage("Durata trebuie sa fie numar intreg !")
    }
    else if ( values.durata ===0){
      setMessage("Durata trebuie sa fie nenula !")
    }
    else{
     console.log(userInfo)
     dispatch(addActivity(values.denumire,values.descriere,values.data,values.durata,values.oraIncepere,values.codAcces  ,userInfo.id))
     setValues(initialFieldValues)
     dispatch(listActivities())
     setMessage("Activitate creata !")
 
    }
    } catch (e) {
      setMessage("Ora incepere trebuie sa fie de forma ora:minut")
    }
  
   
 }
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form>
        <Stack className="form-container mt-5">
          <TextField
            id="input-denumire"
            variant="outlined"
            label="Denumire"
            name="denumire"
            value={values.denumire}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="input-descriere"
            variant="outlined"
            multiline
            maxRows={4}
            label="Descriere"
            name="descriere"
            value={values.descriere}
            onChange={handleChange}
          ></TextField>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            name="data"
            value={values.data}
            onChange={(date) => {
              setValues({ ...values, ["data"]: date });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            id="input-durata"
            variant="outlined"
            label="Durata"
            name="durata"
            value={values.durata}
            onChange={handleChange}
          ></TextField>
         <TextField
            id="input-ora"
            variant="outlined"
            label="Ora incepere"
            name="oraIncepere"
            value={values.oraIncepere}
            onChange={handleChange}
          ></TextField>
  
          <TextField
            id="input-cod"
            variant="outlined"
            label="Cod Acces"
            name="codAcces"
            value={values.codAcces}
            onChange={handleChange}
          ></TextField>
          <button className="btnAdd" onClick={handleSubmit}>Creeaza activitate</button>
        </Stack>
     
      </form>
    </LocalizationProvider>
    </div>
    <br/>
    <div className="d-flex justify-content-center align-items-center">
      <h1>{message}</h1>

      </div>
    </div>
  );
}
export default AddActivityForm;