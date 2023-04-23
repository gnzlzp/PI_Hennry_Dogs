export default function handleValidate(value, error, setError) {
	if (!value) {
		setError({ ...error, name: "" });
		return;
	}
	/^[a-zA-Z\s]+$/.test(value)
		? setError({ ...error, name: "" })
		: setError({ ...error, name: "Only letters please" });
}
