import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import NavBarComponent from "../../components/NavbarComponent/NavBarComponent"
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';


const HomePage = () => {
    const arrr=['TV','Tu lanh','Lap top']
    return (
        <>
        <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {arrr.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTypeProduct>
      </div>
          <div className='body' style={{backgroundColor: '#efefef',width:'100%' }}>
          <div id="container" style={{  height: '1000px',width:'1270px', margin:'0 auto' }}> 
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <div style={{marginTop:'20px',display:'flex',gap:'20px'}}>
        <WrapperProducts> 
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </WrapperProducts>
        </div>
          </div>
        <div style={{width:'100%',display:'flex',justifyContent:'Center', margin:'10px'}}>
        <WrapperButtonMore textButton="Xem them" type="outline" styleButton={{
            border:'1px solid rgb(11,116,229)', color:'rgb(11,116,229)',
            width :'240px', height:'38px',borderRadius:'4px', 
        }}
            styleTextButton={{ fontWeight: 500 }}
         />
        </div>
        
        </div>
        </>
    )
}
export default HomePage