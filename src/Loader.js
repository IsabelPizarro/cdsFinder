import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Spin} from 'antd';


export default function Loader() {

  return (
    <div className="loader">
       <Spin tip="Cargando..."></Spin>
       <p>loading</p>
     
    </div>
  );
}