import React, { useState } from "react";

export const Products = () => {
  const [product] = useState([
    {
      img: "/images/12.jpg",
      name: "Product 1",
      price: "$100",
      sale: true,
      salePrice: "$75",
    },
    {
      img: "/images/13.jpg",
      name: "Product 2",
      price: "$80",
      sale: false,
      salePrice: "",
    },
    {
      img: "/images/14.jpg",
      name: "Product 3",
      price: "$120",
      sale: false,
      salePrice: "",
    },
    {
      img: "/images/15.jpg",
      name: "Product 4",
      price: "$90",
      sale: true,
      salePrice: "$70",
    },
  ]);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-wrapper">
          {product.map((product, i) => (
            <div key={i} className="product">
              <div className="img-container">
            
                <img src={product.img} alt="" />
                {product.sale && <span className="sale">Sale</span>}
                <div className="details">
                  <span className="icon">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="read">Read more</span>
                  <span className="icon">
                    <i className="fas fa-shop"></i>
                  </span>
                </div>
              </div>
              <div className="content">
                <h3>{product.name}</h3>
                <span className={`price ${product.sale ?"line" :""}`}>{product.price}</span>
                {product.sale && (
                  <span className="sale-price">${product.salePrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
