import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { getDetail } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetail(id));
	}, []);

	const dog = useSelector((state) => state.dog_detail);

	return (
		<>
			<div className={style.container}>
				{!dog.name ? (
					<div>
						<h1>LOADING...</h1>
					</div>
				) : (
					<>
						<div className={style.img}>
							<img src={dog.image} className={style.img_dtl} />
						</div>
						<div className={style.name}>{dog.name}</div>
						<div className={style.message}>
							<p>
								<p>
									<span className={style.name}>{dog.name}</span> is a beautiful
									dog with a{" "}
									<span className={style.temperament}>
										{dog.temperament && dog.temperament.toLowerCase()}
									</span>{" "}
									temperament. They have a height of{" "}
									<span className={style.measure}>{dog.height}</span> inchs and
									a weight of{" "}
									<span className={style.measure}>{dog.weight}</span> pounds.
									Their life span is about{" "}
									<span className={style.measure}>{dog.life_span}</span>. If
									you're looking for a loyal and friendly companion,{" "}
									<span className={style.name}>{dog.name}</span> might just be
									the dog for you!
								</p>
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Detail;
