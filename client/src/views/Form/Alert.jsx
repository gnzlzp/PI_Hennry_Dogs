import React, { useEffect } from "react";
import style from "./Alert.module.css";

const Alert = ({ form, setForm, showAlert, setShowAlert, createDog }) => {
	const handleCloseAlert = () => {
		setShowAlert({ ...showAlert, preview: false });
	};
useEffect(()=>{
  	if (
		form.name.length > 0 &&
		form.minHeight !== 0 &&
		form.maxHeight !== 0 &&
		form.minWeight !== 0 &&
		form.maxWeight !== 0 &&
		form.temperamentId.length > 0 &&
    form.image.length > 0
	)
		setForm({ ...form, disabled: false });
},[])

	return (
		<div>
			{/* <div className={style.alert_container}> */}
			<div className={style.alert_container}>
				<p
					className={style.alert_message}
				>{`You are creating a dog whith this propertys:`}</p>
				<p>
					Name: <span>{form.name}</span>
				</p>
				<p>
					Height :{" "}
					<span>
						{form.minHeight}-{form.maxHeight} inchs
					</span>
				</p>
				<p>
					Weight:{" "}
					<span>
						{form.minWeight}-{form.maxWeight} pounds
					</span>
				</p>
				<p>
					Life Span: <span>{form.life_span} years</span>
				</p>
				<p>Temperaments : <span>{[...form.temperament].join(", ")}</span> </p>
				<img className={style.img} src={form.image} alt="" />
				{form.disabled ? (
					<div>
						<button className={style.btn} onClick={handleCloseAlert}>Close</button>
					</div>
				) : (
					<>
						<p className={style.alert_message}>Do you like?</p>
						<button className={style.alert_button} onClick={createDog}>
							&#10004;
						</button>
						<button className={style.alert_button} onClick={handleCloseAlert}>
							&#10008;
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Alert;
