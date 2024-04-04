import React from 'react'
import NavBarComponent from '../../components/NavbarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperProducts } from './style'
import { WrapperNavbar } from './style'
const TypeProductPage = () => {
    const onChange = () => {}
    
    return (
        <div style={{ padding: '0 120px', background:'#efefef'} }>
          <div style={{width:'1270px', margin:'0- auto'}}>
          <Row style={{ flexWrap: 'nowrap', paddingTop:'10px'}}>
            <WrapperNavbar span={4}  >
                <NavBarComponent />
            </WrapperNavbar>
            <Col span={20}>
            <WrapperProducts >
             <CardComponent />
             <CardComponent />
             <CardComponent />
             <CardComponent />
             <CardComponent />
             <CardComponent />
             <CardComponent />
            </WrapperProducts>
            <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center',marginTop:'10px'}} />
            </Col>
        </Row>
          </div>
        </div>
    )
}

export default TypeProductPage