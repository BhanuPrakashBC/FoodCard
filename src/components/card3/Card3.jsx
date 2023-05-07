import "./Card3.css";

const Card3 = ({ datum3 }) => {

  return (
    <div>
        <h1 className="tophead3 th"> Festival Offer</h1>
        <div className="bannerrow">
        <img className="bannerarrowleft" src={datum3.arrowleft}/>
          <div className="banner">
            <img className="bannerimg" src={datum3.banner1}/>
            <img className="bannerimg" src={datum3.banner2}/>
            <img className="bannerimg" src={datum3.banner3}/>
            <img className="bannerimg" src={datum3.banner4}/>
          </div>
          <img className="bannerarrowright" src={datum3.arrowright}/>
        </div>
    </div>
  );
};

export default Card3;