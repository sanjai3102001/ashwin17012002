import React from 'react';
import { items } from './Data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; // Added import for Button
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <div className="container my-5">
                <div className='row'>
                    {
                        items.map((product, index) => {
                            return (
                                <div key={product.id} className='col-lg-4 col-md-6 my-3'> {/* Added a key for each mapped item */}
                                    <Card style={{ width: "18rem" }}>
                                        <Link to={`/product/${product.id}`}
                                        style={{
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}>

                                        
                                        <Card.Img variant="top" src={product.imgsrc} alt=".." /></Link>
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Button className=''='primary' mx-3>{product.price}{}₹</Button>
                                            <Button className=''='warning'>Add to Cart</Button> {/* Fixed className for warning button */}
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Product;
