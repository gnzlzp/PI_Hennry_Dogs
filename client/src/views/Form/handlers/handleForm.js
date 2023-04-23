

export default function handleForm (event, setForm, form, validate, temperaments) {

  
  // const handleForm =  (event) => {
    const value =  event.target.value
    const numValue = Number(value)
    const property = event.target.name
    const setValue = {...form, [property]: value }
  
    // MANEJO EL NOMBRE
    if (property === "name"){
      setForm({...form, [property]: value })
      validate(value)
    }
  
    // MANEJO EL TIEMPO DE VIDA
    property === "life_span" && setForm(setValue)
  
  // MANEJO LA ESTATURA Y PESO
  if(property === "minHeight" || property === "minWeight" ){
    const valueMax = property === "minHeight" ? form.maxHeight : form.maxWeight
    const prop = property === "minHeight" ? "maxHeight" : "maxWeight"
    if(value>valueMax)
     return setForm({...form, [prop]:numValue, [property]:numValue})
    }else{
      setForm(setValue)
    } 
  if(property === "maxHeight" || property === "maxWeight"){
    const valueMin = property === "maxHeight" ? form.minHeight : form.minWeight
    const prop = property === "maxHeight" ? "minHeight" : "minWeight"
    if(value<valueMin)
    return setForm({...form, [prop]:numValue, [property]:numValue})
  }else{
    setForm(setValue)
  }
  
  // MANEJO TEMPERAMENTOS
  if(property === "temperament"){
    const tempSelect = form.temperament
    const tempSelectId = form.temperamentId
    const id = temperaments.indexOf(value)+1
    !tempSelect.includes(value) 
    ? setForm({...form, [property]:[...tempSelect, value], [`${property}Id`]:[...tempSelectId, id]}) 
    : setForm({...form, [property]:tempSelect.filter((temp) => temp !== value), [`${property}Id`]:tempSelectId.filter((temp) => temp !== id) })
  }
  
  // MANEJO LA URL DE LA IMAGEN
  if(property === "image") setForm(setValue)
  
  // };

}