import React, { useState, useEffect } from 'react';

import './styles/product-client.css';

import { Breadcrumbs, Footer, Nav, SideBanner } from '../Common';
import { FillterByPrice, handleLoadingPage } from '../../Common';

const Laptop = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'ShopTECH | Laptop thời thượng';
    const fetchAPIs = () => {
      fetch('https://server-shoptech.onrender.com/api/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    };
    fetchAPIs();
  }, []);

  useEffect(() => {
    // show danh mục laptop
    products.map((product, index) => {
      const infoProductFeaturedlaptop = document.querySelectorAll(
        '.product-client__item',
      )[index];
      if (product.enType === 'laptop') {
        infoProductFeaturedlaptop.style.display = 'block';
      }
    });
  }, [products]);

  window.onload = () => {
    handleChangeBanner();
  };

  const handleChangeBanner = () => {
    const arrayBanner = [
      'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner.gif',
      'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner.png',
      'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner2.png',
      'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner3.png',
      'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner4.png',
      'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner5.png',
    ];
    var index = 0;
    setInterval(function () {
      if (index === arrayBanner.length) {
        index = 0;
      }
      document.querySelector('.product-client__event-primary').src =
        arrayBanner[index];
      index++;
    }, 3000);
  };

  const arrayPromote = [
    'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-list-item3.png',
    'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-list-item4.png',
    'https://server-shoptech.onrender.com/public/product-img/laptop-img/event-list-item5.png',
  ];
  var indexPromote = 0;
  const handleNextPromote = () => {
    if (indexPromote >= arrayPromote.length - 1) {
      indexPromote = 0;
    }
    indexPromote++;
    document.querySelector(
      '.product-client__event-col-right-item',
    ).style.animation = 'slideInLeft ease .3s';
    document.querySelector('.product-client__event-col-right-item').src =
      arrayPromote[indexPromote];
  };

  const handlePrevPromote = (event) => {
    if (indexPromote <= 0) {
      indexPromote = arrayPromote.length;
    }
    indexPromote--;
    document.querySelector(
      '.product-client__event-col-right-item',
    ).style.animation = 'slideInLeft ease .3s';
    document.querySelector('.product-client__event-col-right-item').src =
      arrayPromote[indexPromote];
  };

  const handleFormatStarProduct = (starOfProduct) => {
    if (starOfProduct < 1) {
      return `☆☆☆☆☆`;
    } else if (starOfProduct < 2) {
      return `★☆☆☆☆`;
    } else if (starOfProduct < 3) {
      return `★★☆☆☆`;
    } else if (starOfProduct < 4) {
      return `★★★☆☆`;
    } else if (starOfProduct < 5) {
      return `★★★★☆`;
    } else {
      return `★★★★★`;
    }
  };

  const handleFilterChange = (minPrice, maxPrice) => {
    const filteredProducts = products.filter(
      (product) =>
        Number(product.price) >= minPrice &&
        Number(product.price) <= maxPrice &&
        product.enType === 'laptop',
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <Nav />
      <Breadcrumbs />
      <div
        className="container"
        style={{
          backgroundSize: 'contain',
          marginTop: '60px',
          padding: '50px 0 40px',
        }}
      >
        <div className="grid wide">
          <SideBanner />
          <div className="product-client__event">
            <img
              src="https://server-shoptech.onrender.com/public/product-img/laptop-img/event-banner.gif"
              alt=""
              className="product-client__event-primary"
            ></img>

            <div className="product-client__event-list">
              <div className="product-client__event-col-left">
                <img
                  src="https://server-shoptech.onrender.com/public/product-img/laptop-img/event-list-item.png"
                  className="product-client__event-col-left-item"
                ></img>
                <img
                  src="https://server-shoptech.onrender.com/public/product-img/laptop-img/event-list-item2.png"
                  className="product-client__event-col-left-item"
                ></img>
              </div>

              <div className="product-client__event-col-right">
                <button
                  className="product-client__event-btn--prev"
                  onClick={handlePrevPromote}
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
                <img
                  src="https://server-shoptech.onrender.com/public/product-img/laptop-img/event-list-item3.png"
                  className="product-client__event-col-right-item"
                ></img>
                <button
                  className="product-client__event-btn--next"
                  onClick={handleNextPromote}
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <img
              className="product-client__event-gif"
              src="https://server-shoptech.onrender.com/public/product-img/laptop-img/event-item-gif.gif"
              alt="ảnh gif"
            ></img>
          </div>

          <label className="product-client__title-brand">
          TOP BRANDS
          </label>
          <div className="product-brand-list">
            <div className="product-client__brand">
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-macbook.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-dell.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-asus.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-acer.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-lenovo.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-gigabyte.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-msi.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-hp.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-microsoft.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/laptop-img/logo-masstel.png"
              ></img>
            </div>
          </div>

          <label className="product-client__title-brand">Filter products</label>
          <FillterByPrice
            minPrice={0}
            maxPrice={100000000}
            onFilterChange={handleFilterChange}
          />
          <ul className="product-client__list">
            {loading ? (
              <p>Đang kết nối đến server ... </p>
            ) : (
              products.map((product, index) => (
                <li
                  className="product-client__item"
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLoadingPage(1);
                    window.setTimeout(() => {
                      window.location.href = `/product/${product.enType}/${product.name}`;
                    }, 1000);
                  }}
                >
                  <img
                    src={product.imageLink}
                    className="product-client__item-img"
                  ></img>
                  <label className="product-client__item-label">
                    {product.name}
                  </label>
                  <img
                    className="product-client__item-hot-icon"
                    src="https://server-shoptech.onrender.com/public/product-img/laptop-img/icon-hot.gif"
                  ></img>
                  <img
                    className="product-client__item-icon"
                    src="https://server-shoptech.onrender.com/public/product-img/laptop-img/icon-18-month.png"
                  ></img>
                  <label className="product-client__item-price">
                    {Number(product.price).toLocaleString()} ₫
                  </label>
                  <span className="product-client__item-percent">
                    {(Number(product.price) * 1.065).toLocaleString()}đ
                  </span>
                  <label className="product-client__item-vote">
                    <span className="product-client__item-star-icon">
                      {handleFormatStarProduct(product.star)}{' '}
                    </span>{' '}
                    ({product.voter || 0} đánh giá)
                  </label>
                  <div className="product-client__item-tag">
                    Giảm {product.percent}%
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <Footer />
      <p className="app-copyright">
      ©️ Copyright belongs to Clinic Online - 2023 <br />
      Address: 391 Nam Ky Khoi Nghia, Vo Thi Sau ward. District 3, Ho Chi Minh City.
      </p>
    </>
  );
};

export default Laptop;
