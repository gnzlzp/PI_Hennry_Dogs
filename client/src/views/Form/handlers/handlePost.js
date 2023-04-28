import axios from "axios";


export default async function handlePost ( form, setForm, error, setShowAlert) {
  const {name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperamentId, image} = form

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
try {
    const postDog = await axios.post("http://localhost:3001/dogs/", newDog)
    const postData = postDog.data
    setForm(reset)
    setShowAlert({preview : false , message : ""})
    alert(postData.message)
  } catch (error) {
    const message = error.response.data.error
		alert(message)
}

}