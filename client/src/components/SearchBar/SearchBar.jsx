import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	getJoinDogs,
	getMyDogs,
	getOtherDogs,
	searchName,
} from "../../Redux/actions";

const SearchBar = ({currentPage , setCurrentPage}) => {
	const [nameDog, setNameDog] = useState("");
	const [hasValue, setHasValue] = useState(true);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const value = event.target.value;
		value.length > 0 ? setHasValue(false) : setHasValue(true);
		setNameDog(value);
	};

	const onSearch = (event) => {
		const name = event.target.name;
		switch (name) {
			case "searchDog":
				dispatch(searchName(nameDog));
				setNameDog("");
				setHasValue(true);
				break;
			case "myDogs":
				dispatch(getMyDogs());
				setCurrentPage(1)
				break;
			case "otherDogs":
				dispatch(getOtherDogs());
				break;
			case "joinDogs":
				dispatch(getJoinDogs());
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<button name="myDogs" onClick={onSearch}>
				My Dogs
			</button>
			<button name="otherDogs" onClick={onSearch}>
				Other Dogs
			</button>
			<button name="joinDogs" onClick={onSearch}>
				All Dogs
			</button>
			<br />
			<input
				type="text"
				name="input"
				value={nameDog}
				onChange={handleChange}
				autoFocus={true}
			/>
			<button name={"searchDog"} onClick={onSearch} disabled={hasValue}>
				Search Dog
			</button>
		</div>
	);
};

export default SearchBar;
