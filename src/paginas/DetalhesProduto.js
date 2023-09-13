import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from '../componentes/Menu';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Image, Col, Row } from 'antd';
export default function DetalhesProduto() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setProduto(response.data);
        });
    }, [id]);

    if (!produto) {
        return <div>Carregando...</div>;
    }
    
    return (
        <>
            <Menu />
            <Row align="middle">
                <Col span={8} offset={4}>
                    <Image src={produto.image} width={500} content='center' />
                </Col>
                <Col span={8} >
                <h2>{produto.title}</h2>
                    <h2>Descrição</h2>
                    <p>{produto.description}</p>
                    <h3>Preço: ${produto.price}</h3>

                </Col>
            </Row>
        </>
    );
}
