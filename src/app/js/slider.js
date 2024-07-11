import React from "react";

import { Image } from "@chakra-ui/react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  return (
    <OwlCarousel
      className="owl-theme"
      items={4}
      loop
      autoplay={true}
      margin={10}
      responsive={{
        0: {
          items: 1,
          nav: true,
          dots: false,
        },
        568: {
          items: 3,
        },
      }}
    >
      <div className="item">
        <Image src="/partners/amp.png" alt="AMP" />
      </div>
      <div className="item">
        <Image src="/partners/angle.png" alt="Angle Finance" />
      </div>
      <div className="item">
        <Image src="/partners/anz.png" alt="ANZ" />
      </div>
      <div className="item">
        <Image src="/partners/bb.png" alt="Bendigo Bank" />
      </div>
      <div className="item">
        <Image src="/partners/bluestone.png" alt="Bluestone Home Loans" />
      </div>
      <div className="item">
        <Image src="/partners/boc.png" alt="Bank of China" />
      </div>
      <div className="item">
        <Image src="/partners/bom.png" alt="Bank of Melbourne" />
      </div>
      <div className="item">
        <Image src="/partners/boq.png" alt="Bank of Queensland" />
      </div>
      <div className="item">
        <Image src="/partners/bos.png" alt="Bank of China" />
      </div>
      <div className="item">
        <Image src="/partners/bw.png" alt="Bankwest" />
      </div>
      <div className="item">
        <Image src="/partners/cmb.png" alt="Commonwealth Bank" />
      </div>
      <div className="item">
        <Image src="/partners/finsure.png" alt="Finsure Loans" />
      </div>
      <div className="item">
        <Image src="/partners/firstmac.png" alt="Firstmac" />
      </div>
      <div className="item">
        <Image src="/partners/funding.png" alt="Funding" />
      </div>
      <div className="item">
        <Image src="/partners/honey.png" alt="Honey" />
      </div>
      <div className="item">
        <Image src="/partners/ing.png" alt="ING" />
      </div>
      <div className="item">
        <Image src="/partners/lat.png" alt="Latitude" />
      </div>
      <div className="item">
        <Image src="/partners/latrobefinancial.png" alt="Latrobe Financial" />
      </div>
      <div className="item">
        <Image src="/partners/liberty.png" alt="Liberty" />
      </div>
      <div className="item">
        <Image src="/partners/ma.png" alt="MA Money" />
      </div>
      <div className="item">
        <Image src="/partners/macquarie.png" alt="Macquarie" />
      </div>
      <div className="item">
        <Image src="/partners/mp.png" alt="MoneyPlace" />
      </div>
      <div className="item">
        <Image src="/partners/nab.png" alt="NAB" />
      </div>
      <div className="item">
        <Image src="/partners/peppermoney.png" alt="Pepper Money" />
      </div>
      <div className="item">
        <Image src="/partners/prospa.png" alt="Prospa" />
      </div>
      <div className="item">
        <Image src="/partners/resimac.png" alt="Resimac" />
      </div>
      <div className="item">
        <Image src="/partners/stgeorge.png" alt="St.George Bank" />
      </div>
      <div className="item">
        <Image src="/partners/suncorp.png" alt="Suncorp" />
      </div>
      <div className="item">
        <Image src="/partners/virginmoney.png" alt="Virgin Money" />
      </div>
      <div className="item">
        <Image src="/partners/westpac.png" alt="Westpac" />
      </div>
      <div className="item">
        <Image src="/partners/wisr.png" alt="Wisr" />
      </div>
    </OwlCarousel>
  );
}
