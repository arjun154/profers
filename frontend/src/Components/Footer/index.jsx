import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.box}>
      <p>
        “PROFERS” is owned & managed by “Profers India Private Limited” and is
        not related, linked or interconnected in whatsoever manner or nature, to
        “PROFFR.COM” which is a real estate services business operated by
        “Redstone Consultancy Services Private Limited”.
      </p>
      <hr />
      <div className={styles.div}>
        <div className={styles.footer}>
          <div className={styles.image}>
            <img
              src="footer-best-price-icon-6e8c699.png"
              alt="best-price"
            ></img>
          </div>
          <div>
            <div>
              <b>Best Prices & Offers</b>
            </div>
            <div>
              Cheaper prices than your local supermarket, great chashback offers
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.image}>
            <img
              src="footer-genuine-products-icon-d1ab1be.png"
              alt="genuine-products"
            />
          </div>
          <div>
            <div>
              <b>Wide Assortment</b>
            </div>
            <div>
              Choose from 100+ products across food, grocery and other
              categories
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.image}>
            <img
              src="footer-easy-returns-icon-c85249b.png"
              alt="easy-return"
            ></img>
          </div>
          <div>
            <div>
              <b>Easy Returns</b>
            </div>
            <div>
              Not satisfied with a product? Return it at the doorstep & get a
              refund within hours.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>Profers - Online Grocery Shopping</h2>
        <h3>Online grocery store in India</h3>
        <p>
          Order online. All your favourite products from the low price online
          supermarket for grocery home delivery in Delhi, Gurugram, Bengaluru,
          Mumbai and other cities in India. Lowest prices guaranteed on
          Patanjali, Aashirvaad, Pampers, Maggi, Saffola, Fortune, Nestle, Amul,
          Haldiram's and others.
        </p>
        <h3>One stop shop for all your daily needs</h3>
        <p>
          Profers is a low-price online supermarket that allows you to order
          products across categories like grocery, vegetables, beauty &
          wellness, household care, baby care, pet care and meats & seafood and
          gets them delivered to your doorstep.
        </p>
        <h3>For best of prices, deals and offers; order online in cities</h3>
        <p>
          The delivery service is operational in 27+ cities: Agra, Ahmedabad,
          Aligarh, Allahabad, Asansol, Bengaluru, Bhiwadi, Chandigarh, Chennai,
          Delhi, Durgapur, Faridabad, Guwahati, Hapur, HR-NCR, Hyderabad,
          Indore, Jaipur, Kanpur, Kolkata, Lucknow, Meerut, Modinagar,
          Moradabad, Mumbai, Panipat, Pune, Rohtak, Sonipat, UP-NCR, Vadodara,
          and Zirakpur.
        </p>
      </div>
    </div>
  );
}

export default Footer;
