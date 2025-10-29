import React from "react";
import styles from "./home.module.scss";
import { categories } from "../../constants/mock";
import MenuItem from "../../components/MenuItem";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = ({ category, title }) =>
    navigate(`/collection/${category}?title=${title}`);

  return (
    <div className={styles.menuContainer}>
      {categories.map((item) => (
        <MenuItem
          title={item.title}
          key={item.id}
          imageUrl={item.image}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

export default HomePage;
