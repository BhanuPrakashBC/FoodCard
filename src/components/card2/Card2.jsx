import "./Card2.css";

const Card2 = ({ datum2 }) => {

  return (
    <div className="headersection">
        <text className="tophead th">{datum2.head}</text>
        <div className='viewall'>
            <text className="view">View all</text>
            <i class="arrow right"></i>
            <hr class="line"></hr>
        </div>
    </div>
  );
};

export default Card2;