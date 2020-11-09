import React from "react";
import styles from "./product.module.css";

export default function WhyProfers() {
  return (
    <div className={styles.profersHeader}>
      <div className={styles.profersPromise}>Why shop from Profers?</div>
      <div>
        <div className={styles.promiseDiv}>
          <img
            src="https://grofers.com/images/pdp/return-8424126.png"
            alt="returns"
            height="34px"
          />
          <div>
            <div className={styles.promiseText}>Easy returns & refunds</div>
            <div className={styles.top}>
              Return products at doorstep and get refund in seconds.
            </div>
          </div>
        </div>
        <div className={styles.promiseDiv}>
          <img
            src="https://grofers.com/images/pdp/lowest-price-9b3b8a5.png"
            alt="lowPrice"
            height="34px"
          />
          <div>
            <div className={styles.promiseText}>Lowest price guaranteed</div>
            <div className={styles.top}>
              Get difference refunded if you find it cheaper anywhere else.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
