import { Card } from 'antd'
import { StyleNameProduct, WrapperDiscountText, WrapperCardStyle, wrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'
import logo from '../../assets/images/logo.png'
import React from 'react'


const CardComponent = () => {
return (
        <WrapperCardStyle
        hoverable
        headStyle={{ width: '200px', height: '200px' }}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
           <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderTopLeftRadius: '3px'
                }}
            />

        <StyleNameProduct>Tphone</StyleNameProduct>
         <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.96 </span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span> | Da ban  1000+</span>
            </WrapperReportText>
            <WrapperPriceText>
               1.000.000d
                <WrapperDiscountText>
                    - 5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
)
}

export default CardComponent;