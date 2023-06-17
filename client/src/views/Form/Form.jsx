import style from "./Form.module.css"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments } from '../../Redux/actions';
import axios from 'axios';
import Alert from "./Alert";
import handleForm from "./handlers/handleForm";
import handleValidate from "./handlers/handleValidate";
import handlePost from "./handlers/handlePost";

const Form = () => {
  const dispatch = useDispatch();

  const temperaments = useSelector((state) => state.temperaments);

  const [error, setError] = useState({
    name: "",
  });

  const validate = (value) => handleValidate(value, error, setError)

  const [form, setForm] = useState({
    name: "",
    minHeight: 0,
    maxHeight: 0,
    minWeight: 0,
    maxWeight: 0,
    life_span: 15,
    temperament: [],
    temperamentId: [],
    image: "",
    disabled: true
  })

  const updateForm = (event) => handleForm(event, setForm, form, validate, temperaments)

  useEffect(() => {
    temperaments.length === 0 && dispatch(getAllTemperaments());
    validate(form.name)
  }, [form]);

  const [showAlert, setShowAlert] = useState({ preview: false, message: "" });

  const createDog = () => handlePost(form, setForm, error, setShowAlert)

  const randomDog = async () => {
    const img = await axios.get("https://dog.ceo/api/breeds/image/random")
    const { message } = img.data
    setForm({
      ...form,
      image: message
    })
  }

  return (
    <div className={style.container}>
      {<p className={style.enun}>Please indicate the characteristics of your dog below <span>{`(fields cannot be left empty)`}</span></p>}

      <div>
        <label htmlFor="name">Name: </label>
        <input className={style.input} type="search" name="name" value={form.name} onChange={updateForm} placeholder="Put your dog name" autoFocus={true} autoComplete={false} />
        {error.name ? <span className={style.warning}>{error.name}</span> : !form.name.length && <span className={style.warning}>Put your dog name</span>}<br />
      </div>

      {/* HEIGHT */}
      <label htmlFor="minHeight">Min height: </label>
      <input className={style.input} type="number" min={1} max={50} name="minHeight" value={form.minHeight} onChange={updateForm} style={{ width: "3rem" }} />
      <span>inchs </span>
      <br />
      <label htmlFor="maxHeight">Max height: </label>
      <input className={style.input} type="number" min={1} max={50} name="maxHeight" value={form.maxHeight} onChange={updateForm} style={{ width: "3rem" }} />
      <span>inchs</span>
      {form.maxHeight > 50 && <span className={style.warning}>Are you creating a dinosaur?</span>}
      <br />

      {/* WEIGHT */}
      <label htmlFor="minWeight">Min weight: </label>
      <input className={style.input} type="number" min={1} max={250} name="minWeight" value={form.minWeight} onChange={updateForm} style={{ width: "3rem" }} />
      <span>pounds</span>
      <br />
      <label htmlFor="maxWeight">Max weight: </label>
      <input className={style.input} type="number" min={1} max={250} name="maxWeight" value={form.maxWeight} onChange={updateForm} style={{ width: "3rem" }} />
      <span>pounds</span>
      {form.maxWeight > 250 && <span className={style.warning}>Are you creating a dinosaur?</span>}
      <br />

      {/* LIVE_SPAN */}
      <label htmlFor="life_span">Life span: </label>
      <input type="range" min={1} max={30} step={1} value={form.life_span} name="life_span" list="ticksmatks" onChange={updateForm} style={{ width: "10rem" }} />
      <datalist id="ticksmatks">
        <option value="1" label="1" />
        <option value="5" label="5" />
        <option value="10" label="10" />
        <option value="15" label="15" />
        <option value="20" label="20" />
        <option value="25" label="25" />
        <option value="30" label="30" />
      </datalist>


      <input className={style.input} type="text" readOnly={true} value={form.life_span} style={{ width: "1.25rem" }} />
      <span>Years</span>
      <br />
      {/* TEMPERAMENT */}
      <label htmlFor="temperament">Temperament: </label>
      <select name="temperament" onChange={updateForm} >
        {temperaments.map((temp, index) => (
          <option name="temperament" key={index} value={temp}>{temp} </option>
        ))}
      </select>
      <br />
      {form.temperamentId.length === 0 && <span className={style.warning} style={{ position: "inherit" }}>Select almost one temperament</span>}
      <p>{[...form.temperament].map(temp =>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            const tempSelect = form.temperament;
            const tempSelectId = form.temperamentId;
            const id = temperaments.indexOf(temp) + 1;
            setForm({
              ...form,
              temperament: tempSelect.filter((tempS) => tempS !== temp),
              temperamentId: tempSelectId.filter((tempS) => tempS !== id),
            })
          }
          }
          children={`${temp}, `} />
      )}
      </p>


      Put Url image<input className={style.input} type="url" name="image" placeholder='http://' value={form.image} onChange={updateForm} />
      <button className={style.btn} onClick={randomDog}>Random</button>
      <div>
        <button className={style.btn} onClick={() => setShowAlert({ ...showAlert, preview: true })} > Preview </ button>
        {showAlert.preview && <Alert form={form} setForm={setForm} showAlert={showAlert} setShowAlert={setShowAlert} createDog={createDog} />}
      </div>
    </div>

  )
}

export default Form