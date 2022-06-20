import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer2 from "../footer/Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Home" />
          <Header />

          <div className="banner">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://res.cloudinary.com/bramuels/image/upload/c_scale,h_1000,w_1600/v1647109034/products/254706408261_status_f76baea1d70a45e09e67e6b5696e1768_xu1ktv.jpg"
                  alt="backgroundImage1"
                  className="bgImg"
                />
              </Carousel.Item>
            </Carousel>

            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <h3 className="home__content2">
                  <span>MimisCosmetics</span>
                  <p>Fashionable Collections</p>
                  <a href="#container">
                    <p type="submit" className="Home_button">
                      SHOP NOW
                    </p>
                  </a>
                </h3>
                <h2
                  style={{
                    fontFamily: "Segoe Script !important",
                    fontSize: "2em !important",
                    fontWeight: "500",
                  }}
                >
                  Buy 12 Get
                </h2>
                <span className="whiteSpanGift">1 Free</span>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "3.5em",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                  }}
                >
                  Fashionable
                </h2>

                <h2
                  style={{
                    fontSize: "3.5em",
                    fontWeight: "400",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                    lineHeight: ".7",
                  }}
                >
                  Collections
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "550",
                    fontFamily: "Montserrat,sans-serif",
                    fontSize: "1em !important",
                    paddingTop: "20px",
                    color: "#088178",
                  }}
                >
                  Get Free Delivery on all orders above Kshs. 999
                </h2>
              </div>
              <div>
                <a href="#container">
                  <p type="submit" className="Home__button">
                    SHOP NOW
                  </p>
                </a>
              </div>
            </div>
          </div>

          <section className="icons-container">
            <div className="icons">
              <img src="img/icon-1.png" alt="" />
              <div className="infom">
                <h3>free delivery</h3>
                <span>on orders above ksh 999 </span>
              </div>
            </div>

            <div className="icons">
              <img src="img/icon-2.png" alt="" />
              <div className="infom">
                <h3>10 days returns</h3>
                <span>moneyback guarantee</span>
              </div>
            </div>

            <div className="icons">
              <img src="img/icon-3.png" alt="" />
              <div className="infom">
                <h3>offer & gifts</h3>
                <span>on all orders</span>
              </div>
            </div>

            <div className="icons">
              <img src="img/icon-4.png" alt="" />
              <div className="infom">
                <h3>secure paymens</h3>
                <span>protected by M-PESA</span>
              </div>
            </div>
          </section>
          <div id="container">
            <h2 className="homeHeading">Featured Products</h2>

            <div className="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer2 />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
