import { Badge, Col } from "antd";
import React from 'react';
import {WrapperHeader} from './style'
import {WrapperTextHeader} from './style'
import {WrapperHeaderAccount} from './style'
import {WrapperTextHeaderSmall} from './style'
import ButttonInputSearch from '../ButttonInputSearch/ButttonInputSearch'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
  

const HeaderComponent = () => {
    return (
        <div style={{backgroundColor:'blue'}}>
            <WrapperHeader gutter={16}>
                <Col span={6} style={{marginLeft:'100px'}}>
                    <WrapperTextHeader >Lap trinh that de</WrapperTextHeader>
                </Col>
                <Col span={12}  > 
                <ButttonInputSearch  
                size ="large"
                textButton= "Tim kiem"
                placeholder="input search text"  /></Col>
                <Col span={6} style={{display:'flex', gap:'20px' ,alignItems:'center'}} >
                    <WrapperHeaderAccount>
                       <UserOutlined style={{fontSize:'30px'}} />
                        <div>
                            <WrapperTextHeaderSmall style={{fontSize:'12px'}}>Dang nhap/ dang ky</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tai khoan</WrapperTextHeaderSmall>
                                <CaretDownOutlined /></div>
                           
                        </div>
                    </WrapperHeaderAccount>
                    <div >
                        <Badge count={4} size="small">
                        <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}} />
                        </Badge>
                    <WrapperTextHeaderSmall>Gio hang </WrapperTextHeaderSmall>
                      

                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;