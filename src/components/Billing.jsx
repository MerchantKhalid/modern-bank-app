import React from "react";
import {apple,bill,google} from '../assets'
import styles,{layout} from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <img src={bill} alt="billing" className="w-[100%] h-[100%] z-[5] relative" />
    <div  className="absolute z[3] -left-1/2 w-[50%] h-[50%] rounded-full top-0 white__gradient"/>
    <div  className="absolute z[0] -left-1/2 w-[50%] h-[50%] rounded-full bottom-0 pink__gradient"/>
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/>billing and invoicing </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Buy Now, Pay Later: Enjoy $0 intro plan fees when you use Plan It® to split up large purchases into monthly installments</p>

    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <img src={apple} alt="apple-play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
      <img src={google} alt="google-play" className="w-[128px] h-[42px] object-contain  cursor-pointer" />

    </div>
    </div>

    

    </section>
  );
};

export default Billing;
