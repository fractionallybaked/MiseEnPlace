import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const DropdownMenu = (props) => {

  return (
    <Menu>
      <MenuButton as={Link} >
        Products
  </MenuButton>
      <MenuList>
        <MenuItem>
          <Link className="link" to="/products">All Products</Link>
        </MenuItem>
        <MenuItem>
          <Link className="link" to="/products/bakedgoods">Baked Goods</Link>
        </MenuItem>
        <MenuItem>
          <Link className="link" to="/products/beverages">Beverages</Link>
        </MenuItem>
      </MenuList>
    </Menu>

  );
};

export default DropdownMenu;
