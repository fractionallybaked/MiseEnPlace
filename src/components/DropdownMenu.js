import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import{
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    ChakraProvider,
} from '@chakra-ui/react';

const DropdownMenu = (props) => {

    return (
    <Menu>
  <MenuButton as={Link} rightIcon={<span className='material-icons'>expand more</span>}>
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
