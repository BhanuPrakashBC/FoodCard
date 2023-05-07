import "./Card.css";

const Card = ({ datum }) => {
  const showAlert=()=>{
    window.alert('Product Submitted')
  };
  return (
    <div className="card" onClick={showAlert}>
      <div className="image">
        <img className="itemimage" src={datum.image}></img>
      </div>
      <p className="soldout">{datum.avl}</p>
      <p className="unit">{datum.unit}</p>
      <p className="itemtitle">{datum.title}</p>
      <div className="cartpriceimg">
        <p className="price">{datum.price}</p>
        <img className="cartlist" src={datum.cartlist}/>  
        <img className="cartimg" src={datum.cartimg}/>
      </div>
    </div>
  );
};

export default Card;
