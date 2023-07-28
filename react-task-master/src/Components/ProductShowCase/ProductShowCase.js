import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/productAction";
import { ProductShowCaseStyled } from "./ProductShowCaseStyled";
import starIcon from "../../images/staricon.svg";
import { addToCart } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductShowCase = () => {
  const dispatch = useDispatch();
  const productListingData = useSelector(
    (state) => state?.productData?.[0]?.products
  );

  console.log(productListingData);

  const onAddToCart = (item) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: item?.title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product added successfully!");
        console.log(data);
      });
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <ProductShowCaseStyled>
      <div>
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="wrapper">
          {productListingData?.length > 0 &&
            productListingData?.map((item) => {
              return (
                <div className="productShowCase">
                  <div className="badgeStack">
                    <div className="offer-toast">
                      {item?.discountPercentage}% <span>Off</span>
                    </div>
                  </div>
                  <div className="image-wrapper">
                    <img
                      src={item?.thumbnail}
                      alt="product"
                      style={{
                        width: "152px",
                        height: "160px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="starRating">
                    <div className="rating">{item?.rating}</div>
                    <div className="ic">
                      <img src={starIcon} alt="star" className="starImage" />
                    </div>
                  </div>
                  <div className="name" title={item?.title}>
                    {item?.title}
                  </div>
                  <div className="price">
                    <div className="productPrice">RS. {item?.price}</div>
                  </div>
                  <div className="add-to-cart">
                    <button
                      class="btn btn-outline-success btn-sm"
                      onClick={() => onAddToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </ProductShowCaseStyled>
  );
};

export default ProductShowCase;
