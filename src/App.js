import "./App.css";
import { FoodCard } from "./components/card";
import db from "./db";
import React, { useState, useRef } from 'react';
import banner1 from './db/assets/banner/banner1.png';
import banner2 from './db/assets/banner/banner2.png';
import banner3 from './db/assets/banner/banner3.png';
import banner4 from './db/assets/banner/banner4.png';
import dot from './db/assets/footer/footerdot.png';
import img from './db/assets/footer/footerimg.png';
import icon from './db/assets/footer/footericon.png';

function App() {
  const { weeklySpecial, featuredProducts,topSeller } = db;

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
        <p className="view1">View all</p>
        <div>
          <p className="mark">
            <i class="arrow right"></i>
          </p>
          <hr class="line"></hr>
        </div>
        <p className="tophead th">Weekly Special</p>

        <div className="arrowcircle11" onClick={handleScrollLeft1}>
          <span class="circle11"></span>
          <p className="mark11">
            <i class="arrow left1"></i>
          </p>
          <hr class="line11"></hr>
        </div>
        <div className="arrowcircle12" onClick={handleScrollRight1}>
          <span class="circle12"></span>
          <p className="mark12">
            <i class="arrow right1"></i>
          </p>
          <hr class="line12"></hr>
        </div>

        <div className="weeklysplitems" ref={scrollRef1}>
          {weeklySpecial.map((datum) => {
            return <FoodCard datum={datum} />;
          })}
        </div>
      </div>

      <div className="featuredproducts">
        <p className="view2">View all</p>
        <div>
          <p className="mark1">
            <i class="arrow right"></i>
          </p>
          <hr class="line1"></hr>
        </div>
        <p className="tophead1 th">Featured Products</p>

        <div className="arrowcircle21" onClick={handleScrollLeft2}>
          <span class="circle21"></span>
          <p className="mark21">
            <i class="arrow left2"></i>
          </p>
          <hr class="line21"></hr>
        </div>
        <div className="arrowcircle22" onClick={handleScrollRight2}>
          <span class="circle22"></span>
          <p className="mark22">
            <i class="arrow right1"></i>
          </p>
          <hr class="line22"></hr>
        </div>

        <div className="featuredproductitems" ref={scrollRef2}>
          {featuredProducts.map((datum) => {
            return <FoodCard datum={datum} />;
          })}
        </div>
      </div>

      <div className="topseller">
        <p className="view3">View all</p>
        <div>
          <p className="mark2">
            <i class="arrow right"></i>
          </p>
          <hr class="line2"></hr>
        </div>
        <p className="tophead2 th">Top Seller</p>

        <div className="arrowcircle31" onClick={handleScrollLeft3}>
          <span class="circle31"></span>
          <p className="mark31">
            <i class="arrow left2"></i>
          </p>
          <hr class="line31"></hr>
        </div>
        <div className="arrowcircle32" onClick={handleScrollRight3}>
          <span class="circle32"></span>
          <p className="mark32">
            <i class="arrow right1"></i>
          </p>
          <hr class="line32"></hr>
        </div>

        <div className="topselleritems" ref={scrollRef3}>
          {topSeller.map((datum) => {
            return <FoodCard datum={datum} />;
          })} 
        </div>
      </div>
      <h1 className='fun'>.........</h1>

      <div>
      <div className="arrowcircle41">
          <span class="circle41"></span>
          <p className="mark41">
            <i class="arrow left2"></i>
          </p>
          <hr class="line41"></hr>
        </div>
        <div className="arrowcircle42">
          <span class="circle42"></span>
          <p className="mark42">
            <i class="arrow right1"></i>
          </p>
          <hr class="line42"></hr>
        </div>
        <h1 className="tophead3 th"> Festival Offer</h1>
        <div className="banner">
          <img className="bannerimg" src={banner1}/>
          <img className="bannerimg" src={banner2}/>
          <img className="bannerimg" src={banner3}/>
          <img className="bannerimg" src={banner4}/>
        </div>
      </div>

      <div className='footer'>
        <p className='footerhead'>Subscribe to our newsletter</p>
        <img className="footerimg" src={img}/>
        <img className="footerdot" src={dot} />
        <p className="footerdis">No spam, promise! You will receive weekly news about the best deals and basket suggestions.</p>
        <input type="text" className="footerinput" placeholder="Email ID"/>
        <img className="footericon" src={icon} />
        <hr className="footerline"></hr>
      </div>

    </div>
  );
}

export default App;
