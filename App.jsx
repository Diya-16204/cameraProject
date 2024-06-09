import './App.css';
import Product from "./product.jsx";
import counter from "./counter.jsx";

function App() {
  //const [count, setCount] = useState(0)
let styles={

    color: "rgba(255,100,00,0.6)",
    fontSize : "40px",
    fontFamily :"impact",
    justifyContent:"left",
    textDecoration:"underline",
 
}

let styles2={
  fontSize : "30px",
  textDecoration : "underline",
  color: "rgba(255,100,00,1)",
}



  return (
<div className='cover'>
 <div>
    <p style={styles}>The Most Prestigious</p>
    <p style={styles}>    Photography  </p>
    <p style={styles}>Event Of The Year</p>
    <p style={styles2}><b>Choose Your Camera From Below Options: </b></p>
</div>
<span>
    <Product brand="Canon    " warranty="Warranty : 2 Years  " price="Price: {40670}"     resolution="resolution: 7.9 MP"    colour="Colour : Black"  />
    <h1 className="count">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </h1>
    <Product brand="Nikon    " warranty="Warranty : 3 Years  " price="Price: {80350}"     resolution="resolution: 8.0 MP"    colour="Colour : Blue"  />
    <h1>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </h1>
    <Product brand="Sony     " warranty="Warranty : 1.5 Years" price="Price: {70000}"    resolution="resolution:  16.7 MP"    colour="Colour : Red"  />
    <h1>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </h1>
    <Product brand="Sony     " warranty="Warranty : 1.5 Years" price="Price: {70000}"    resolution="resolution:   20 MP"     colour="Colour : Black"  />
    <h1>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </h1>
    <Product brand="Fujifilm " warranty="Warranty : 2 Years  " price="Price: {38500}"    resolution="resolution:   64 MP"     colour="Colour : Blue"  />
    <h1>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </h1>
    <Product brand="Panasonic" warranty="Warranty : 3 Years  " price="Price: {115000}"   resolution="resolution:   9.6 MP"    colour="Colour : Red"  />
    <h1>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </h1>
 
</span>
<span style={styles2}><b>ADD A HEART TO THOSE THAT U LIKE  	&#10084; </b> </span>
</div>

    
  )
}

export default App;
