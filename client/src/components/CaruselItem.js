import { Carousel, Row } from "react-bootstrap";
import img1 from '../assets/img/glazing/icons/1.png'
import img2 from '../assets/img/glazing/icons/2.png'
import img3 from '../assets/img/glazing/icons/3.png'
import img4 from '../assets/img/glazing/icons/4.png'
import img5 from '../assets/img/glazing/icons/5.png'

function CaruselItem() {
    return (

        <div className="content">
            <div className="slider single-item">
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </div>
        </div>

        // <div className="glazing_slider">
        //     <div className="glazing_block text-center">
        //         {/* <img src={img1} alt="#" /> */}
        //         <a className="tree_link">Деревянное </a>
        //     </div>
        //     <div className="glazing_block text-center">
        //         {/* <img src={img2} alt="#" /> */}
        //         <a className="aluminum_link">Алюминиевое </a>
        //     </div>
        //     <div className="glazing_block text-center" >
        //         {/* <img src={img3}  alt="#" /> */}
        //         <a className="plastic_link">Остекление рамами</a>
        //     </div>
        //     <div className="glazing_block text-center">
        //         <img src={img4}  alt="#" />
        //         <a className="french_link">Французское (панорамное)</a>
        //     </div>
        //     <div className="glazing_block text-center">
        //         {/* <img src={img5}  alt="#" /> */}
        //         <a className="rise_link">Остекление  </a>
        //     </div>
        // </div>

    );
}

export default CaruselItem;