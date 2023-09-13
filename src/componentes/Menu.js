import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Button} from 'antd';

export default function Menu() {
    
    return <>
        <div class="back">
            <nav class="navbar navbar-expand-lg bg-body-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" >Lojinha</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Button type="text"><Link to="/">Home</Link></Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>;
}