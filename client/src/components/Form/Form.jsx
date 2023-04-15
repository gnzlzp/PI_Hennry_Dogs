import React from "react";

const Form = () => {
	return (
		<div style={{margin:'10px'}}>
			{/* en esta vista se encontrará el formulario para crear una nueva raza de perro.

      Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML,
      ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

      Nombre.
      Altura (diferenciar entre altura mínima y máxima de la raza).
      Peso (diferenciar entre peso mínimo y máximo de la raza).
      Años de vida.
      Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
      Botón para crear la nueva raza. */}
      {/* NOMBRE */}
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="" /> 
      <br />
      {/* ALTURA */}
      <label htmlFor="min-height">Min Height: </label>
      <input type="number" name="min-height" id="" style={{width:'3rem'}}/>
      <br />
      <label htmlFor="max-height">Max Height: </label>
      <input type="number" name="max-height" id="" style={{width:'3rem'}}/>
      <br />

      {/* WEIGHT */}
      <label htmlFor="unit">Select unid</label>
      <br />
      <input type="radio" name="unit" id="" /> Metric
      <input type="radio" name="unit" id="" /> Imperial
      <br />
      <label htmlFor="min-weight">Min Weight: </label>
      <input type="number" name="min-weight" id="" style={{width:'3rem'}}/><span>aqui va que unidad va a usar</span>
      <br />
      <label htmlFor="max-weight">Max Weight: </label>
      <input type="number" name="max-weight" id="" style={{width:'3rem'}}/><span>aqui va que unidad va a usar</span>
      <br />


      {/* LIVE_SPAN */}
      <label htmlFor="life_span">Life Span: </label>
      <input type="number" name="life_span" id="" style={{width:'3rem'}}/><span>Years</span>
      <br />

      {/* TEMPERAMENT */}
      <label htmlFor="temperament">Temperament</label>
      <select name="temperament" id="">
        <option value="">aqui mapeo los tempe</option>
      </select>
      <br />

      <button type="submit">Create</button>
		</div>
	);
};

export default Form;
