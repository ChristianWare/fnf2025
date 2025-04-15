"use client";

import styles from "./Pricing.module.css";
import { pricing } from "@/lib/data";
import Button from "@/components/Button/Button";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useState } from "react";


const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);


  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={styles.top}>
              
              <p className={styles.copy}>
                Our plans are clear and open, no shocks or caps. Help is always
                here when you want it. Subscription based pricing. No contracts.
                Pause or cancel whenever you&rsquo;d like.
              </p>
              <div className={styles.optionsBox}>
                <span className={styles.option}>Monthly</span>
                <div className={styles.toggleContainer}>
                  <label className={styles.switch}>
                    <input type='checkbox' className={styles.checkBox} />
                    <span
                      onClick={() => setIsMonthly(!isMonthly)}
                      className={styles.slider}
                    ></span>
                  </label>
                </div>
                <span className={styles.option}>
                  Annually <small>(Save 20%)</small>
                </span>
              </div>
            </div>
            <div className={styles.bottom}>
              {pricing.map((x) => (
                <div key={x.id} className={styles.priceContainer}>
                  <div className={styles.contentParent}>
                    <div className={styles.pcTop}>
                      <h6 className={styles.price}>
                        ${!isMonthly ? x.prices[0].price : x.prices[1].price}
                      </h6>
                      <div className={styles.pcBottom}>
                        <ul className={styles.features}>
                          {x.includes.map((y) => (
                            <li key={y.id} className={styles.feature}>
                              {y.feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <span className={styles.setupFee}>
                      $500 one time set up fee
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.custommize}>
              <div className={styles.customizeLeft}>
                <h3 className={styles.customizeLeftTitle}>
                  Looking for a customized package?
                </h3>
                <p>
                  If our plans don’t match your project or you want to talk it
                  over first, let’s have a call or lets talk while having a
                  coffee.
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    text='Book a meeting'
                    href='/#schedule'
                    btnType='secondary'
                  />
                </div>
              </div>
              <div className={styles.pattern}></div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Pricing;
