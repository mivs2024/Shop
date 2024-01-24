import { Card, Col , Image} from "react-bootstrap";
import star from '../assets/star.png'
import { useNavigate } from "react-router-dom";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col  className={"col-md-3 col-sm-3 mt-3 mx-3"} onClick={() => navigate('/device' + '/' + device.id)}>
            <Card style={{ cursor: 'pointer'}} border={"light"}>
                <Image  src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;