import Search from "../Products/Search";
import HeaderMobile from "./HeaderMobile";
import { React, useRef } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { favouriteItems } = useSelector((state) => state.favourite);
  const switcherTab = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector(".navbar").classList.add("active");
    } else {
      document.querySelector(".navbar").classList.remove("active");
    }
  });

  return (
    <>
      <div className="Header">
        <div className="Header__topbar space__beetween">
          <div className="logo pxy__10">
            <Link to="/">
              <img
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
                alt=""
                className="logo"
                style={{
                  width: "150px",
                  height: "100px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div
            className="searchBoxHome"
            style={{
              width: "50%",
              position: "relative",
            }}
          >
            <div
              className="inputBox"
              style={{
                display: "flex",
                alignItems: "center",
                height: "30px",
                width: "100%",
                background: "#3bb77e",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: "san-serif",
                  fontWeight: "bold",
                }}
              >
                Welcome to Mimiscosmetics.Call/WhatsApp/Text on 0712012113 to
                Order.
              </span>
            </div>
          </div>
          <div
            className="flex align__items__center"
            style={{
              margin: "0px 10px",
            }}
          >
            <div>
              <a href="https://wa.me/+254712012113">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="WhatsAppIcon"
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "green",
                    margin: "0",
                  }}
                >
                  <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                </svg>
              </a>
            </div>
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: "1rem",
              }}
            >
              <strong
                style={{
                  padding: "0px 5px",
                }}
              >
                <a href="https://wa.me/+254712012113">WhatsApp:</a>
              </strong>{" "}
              0712012113 / 0791004783
            </span>
          </div>
        </div>
        <div className="navbar flex pz__10 space__beetween" ref={switcherTab}>
          <div
            className="navigation"
            style={{
              padding: "0px 50px",
            }}
          >
            <ul
              style={{
                fontFamily: "sans-serif",
                cursor: "pointer",
                display: "flex",
                listStyle: "none",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/Products">
                <li>Products</li>
              </Link>
              <Link to="/creator">
                <li>Become A Seller</li>
              </Link>
              <Link to="/faq">
                <li>Users Rules</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="rightOption flex align__items__center">
            <div>
              <Route render={({ history }) => <Search history={history} />} />
            </div>
            <div className="heart__products flex pointer relative">
              <Link to="/favourites">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-heart pxz__20 black"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Link>
              <div
                className="heart__numbers"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#95C730",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-40%",
                  right: "3.5%",
                }}
              >
                <span>{favouriteItems.length}</span>
              </div>
            </div>
            <div className="cart__items flex align__items__center">
              <div className="cart__items flex pointer relative">
                <Link to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cart3 pxz__20 black"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
                <div
                  className="heart__numbers"
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#95C730",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "-40%",
                    right: "3.5%",
                  }}
                >
                  <span>{cartItems.length}</span>
                </div>
              </div>
            </div>
            <div className="user__account flex pointer">
              <Link to={user ? "/me" : "/login"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person pxz__20 black"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="HeaderMobile">
        <HeaderMobile />
      </div>
    </>
  );
};

export default Header;
