import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Better Skin
          </a>
          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item active">
                <a class="nav-link" href="/product">
                  Product
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
              <li class="nav-item active">
                <a class="nav-link" href="/#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
