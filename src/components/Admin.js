import React from "react";

const Admin = ({}) => {
  //const [productId, setProductId] = useState("");
  return (
    <div>
      <h2>Administrative Functions</h2>
      <nav>
        <section className="nav-links">
          <Link to="/addtype">Add Item Type</Link>
          <Link to="/createproducts">Create Product</Link>
          <Link to="/manageusers">User Center</Link>
        </section>
      </nav>
    </div>
  );
};

export default Admin;
