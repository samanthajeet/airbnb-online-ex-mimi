import React from "react";
import MenuButton from "../reusableComponents/MenuButtons/MenuButtons";

const Menu = () => {
  const menuData = [
    "Host your home",
    "Host your experience",
    "Help",
    "Login",
    "Sign Up",
  ];

  const MenuItems = menuData.map((element) => <MenuButton label={element}/>);

  return (
    <div className="menu-container">
      <i class="material-icons" style={{marginTop: 8}}>language</i>
      {MenuItems}
    </div>
  );
};

export default Menu;
