import axios from "axios";


export default function handlePost ( form, setForm, error, setShowAlert) {
  const {name,minHeight,maxHeight,minWeight,maxWeight,life_span,temperamentId, image} = form

  const newDog = {
    name:name,
    height : [minHeight, maxHeight],
    weight : [minWeight, maxWeight],
    life_span: life_span,
    temperament: temperamentId,
    image:image,
  }

  const reset = {
    name: "",
    minHeight: 0,
    maxHeight: 0,
    minWeight: 0,
    maxWeight: 0,
    life_span: 15,
    temperament: [],
    temperamentId: [],
    image:""
  }

  if(!form.minHeight || !form.maxHeight || !form.minWeight || !form.minWeight || !form.name.length || !form.temperament.length ) {
    return setShowAlert({created : true, message : "Completed the form"});
  }

    axios.post("http://localhost:3001/dogs/", newDog)
    .then(res => res.data)
    .catch(error)
    
    setForm(reset)
    setShowAlert({
      created : true, 
      message : `you are create a dog with the propertys:
            Name:${name},
            Height: ${minHeight} - ${maxHeight} inchs,
            Weight: ${minWeight} - ${maxWeight} pounds,
            Life span: ${life_span}
    `});
}