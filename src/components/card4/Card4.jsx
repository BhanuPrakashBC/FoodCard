import "./Card4.css";

const Card4 = ({ datum4 }) => {
  return (
    <div>
        <p className='footerhead'>Subscribe to our newsletter</p>
        <img className="footerdot" src={datum4.dot} />
        <img className="footerimg" src={datum4.img}/>
        <p className="footerdis">No spam, promise! You will receive weekly news about the best deals and basket suggestions.</p>
        <input type="text" className="footerinput" placeholder="Email ID"/>
        <img className="footericon" src={datum4.icon} />
        <hr className="footerline"></hr>
    </div>
  );
};

export default Card4;