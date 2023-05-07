import "./App.css";
import { FoodCard } from "./components/card";
import {HeaderSection} from './components/card2';
import {Banner} from './components/card3';
import {Footer} from './components/card4';
import db from "./db";
import React, { useState, useRef } from 'react'
import arrowleft from './db/assets/arrowleft.png';
import arrowright from './db/assets/arrowright.png';

function App() {
  const { weeklySpecial, featuredProducts,topSeller,header1,header2,header3,banner,footer } = db;

  const [scrollLeft1, setScrollLeft1] = useState(0);
  const scrollRef1 = useRef(null);

  const [scrollLeft2, setScrollLeft2] = useState(0);
  const scrollRef2 = useRef(null);

  const [scrollLeft3, setScrollLeft3] = useState(0);
  const scrollRef3 = useRef(null);

  const handleScrollLeft1 = () => {
    scrollRef1.current.scrollLeft -= 150;
    setScrollLeft1(scrollRef1.current.scrollLeft);
  };

  const handleScrollRight1 = () => {
    scrollRef1.current.scrollLeft += 150;
    setScrollLeft1(scrollRef1.current.scrollLeft);
  };

  const handleScrollLeft2 = () => {
    scrollRef2.current.scrollLeft -= 150;
    setScrollLeft2(scrollRef2.current.scrollLeft);
  };

  const handleScrollRight2 = () => {
    scrollRef2.current.scrollLeft += 150;
    setScrollLeft2(scrollRef2.current.scrollLeft);
  };

  const handleScrollLeft3 = () => {
    scrollRef3.current.scrollLeft -= 150;
    setScrollLeft2(scrollRef3.current.scrollLeft);
  };

  const handleScrollRight3 = () => {
    scrollRef3.current.scrollLeft += 150;
    setScrollLeft3(scrollRef3.current.scrollLeft);
  };

  return (
    <div className="main">
      <div className="weeklyspl">
        {header1.map((datum2) => {
          return <HeaderSection datum2={datum2}/>;
        })}
        <div className="cardbox">
          <img className="arrowleft" src={arrowleft} onClick={handleScrollLeft1}/>
          <div className="weeklysplitems" ref={scrollRef1}>
            {weeklySpecial.map((datum) => {
               return <FoodCard datum={datum}/>;
            })}
          </div>
          <img className="arrowright" src={arrowright} onClick={handleScrollRight1}/>
        </div> 
      </div>

      <div className="featuredproducts">
        {header2.map((datum2) => {
          return <HeaderSection datum2={datum2}/>;
        })}
        <div className="cardbox">
          <img className="arrowleft" src={arrowleft} onClick={handleScrollLeft2}/>
          <div className="featuredproductitems" ref={scrollRef2}>
            {featuredProducts.map((datum) => {
              return <FoodCard datum={datum} />;
            })}
          </div>
          <img className="arrowright" src={arrowright} onClick={handleScrollRight2}/>
        </div> 
      </div>

      <div className="topseller">
        {header3.map((datum2) => {
          return <HeaderSection datum2={datum2}/>;
        })}
        <div className="cardbox">
          <img className="arrowleft" src={arrowleft} onClick={handleScrollLeft3}/>
          <div className="topselleritems" ref={scrollRef3}>
            {topSeller.map((datum) => {
              return <FoodCard datum={datum} />;
            })} 
          </div>
          <img className="arrowright" src={arrowright} onClick={handleScrollRight3}/>
        </div> 
      </div>

      <div className="bannersection">
        {banner.map((datum3) => {
          return <Banner datum3={datum3}/>;
        })}
      </div>

      <div className='footer'>
        {footer.map((datum4) => {
            return <Footer datum4={datum4}/>;
        })}
      </div>    
    </div>
  );
}

export default App;
