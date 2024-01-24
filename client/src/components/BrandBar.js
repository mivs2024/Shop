import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Col, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Col
                    style={{cursor:'pointer', backgroundColor:brand.id === device.selectedBrand.id ? '#0d6efd' : 'white'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Col>
            )}
        </Row>
    );
});


export default BrandBar;