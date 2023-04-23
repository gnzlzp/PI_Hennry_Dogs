import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from './Galery.module.css';

const Galery = ({ show_dogs }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 500);
  }, []);

  return (
    <div className={`${style.gallery} ${isMounted ? style.show : ""}`}>
      {show_dogs.map((dog, index) => (
        <div key={index} className={style.card}>
          <Card dog={dog} />
        </div>
      ))}
    </div>
  );
};


// const Galery = ({ show_dogs }) => {
// 	return (
// 		<>
// 			{show_dogs.length && show_dogs.map((dog, index) => <Card dog={dog} key={index} /> )}
// 		</>
// 	);
// };

export default Galery;
