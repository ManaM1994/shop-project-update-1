import React from "react";
import { useParams } from "react-router-dom";
import style from "./itemDetails.module.scss";
import { useEffect } from "react";
import { getData } from "../../services/apiClient";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import { ADD } from "../../context/CardContext";

const ItemDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [mainImg, setMainImg] = useState(images?.[0]);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    getData(`/products/${params.productId}`).then((data) => {
      console.log("productDetail", data);
      setProduct(data);
      setImages(data.images);
      setReviews(data.reviews);
    });
  }, []);

  return (
    <div className={style.detailContainer}>
      <div className={style.itemDetail}>
        <div className={style.itemImage}>
          <img src={mainImg} className={style.mainImg} />
          <div className={style.album}>
            {images.map((url) => (
              <img
                key={url}
                src={url}
                onClick={() => {
                  setMainImg(url);
                }}
              />
            ))}
          </div>
        </div>
        <div className={style.itemInfo}>
          <h1>{product.title}</h1>
          <p className={style.rating}>{product.rating}</p>
          <p className={style.price}>{product.price}</p>
          <div className={style.description}>
            <p>{product.description}</p>
          </div>

          <button
            className={style.addCart}
            onClick={() => {
              dispatch({ type: ADD, payload: product });
            }}
          >
            add to cart
          </button>
        </div>
      </div>
      <div className={style.reviw}>
        {reviews.map((review) => (
          <div key={review.comment} className={style.reviewBox}>
            <p>{review.rating}</p>
            <p>{review.comment}</p>
            <p>{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;
