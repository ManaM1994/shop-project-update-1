import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuLogIn } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { LuCircleUser } from "react-icons/lu";

const Navbar = () => {
  const { cartItems } = useCart();
  const { auth } = useAuth();

  return (
    <div className={styles.container}>
      <h1>My Shop</h1>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-black " : "text-gray-500"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-black " : "text-gray-500"
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-black " : "text-gray-500"
              }
              to="/about-us"
            >
              {" "}
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logins}>
        {auth ? <LuCircleUser fontSize={24}/> : <LuLogIn fontSize={24} />}

        <div>
          <HiOutlineShoppingCart fontSize={24} className={styles.cart} />
          <span className={styles.badge}>{cartItems?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
