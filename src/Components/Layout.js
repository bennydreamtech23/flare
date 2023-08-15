import { useState } from "react";


import Nav from "./Nav";

function Layout({ children }) {
  //const [navActive, setNavActive] = useState(false);

  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}

export default Layout;