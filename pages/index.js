import React from 'react'
import { Product,FooterBanner,Cart,Footer,HeroBanner,Layout,NavBar } from '../components';
import { client } from '../lib/client';
const Home = ({Products,Banners}) => {
  console.log(Banners + "banners" + Products);
  return (
    <>
    <HeroBanner heroBanner={Banners.length && Banners[0]} />
    <div className='products-heading'>
      <h2>Best selling products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      { 
      Products.map((product)=><Product key={product._id} product={product} />)
      }
    </div>
    <FooterBanner footerBanner={Banners && Banners[0]}/>
    </>
  )
}

export const getServerSideProps = async()=>{
  const productQuery = '*[_type == "product"]';
  const Products = await client.fetch(productQuery);

  const bannerQueury = '*[_type == "banner"]';
  const Banners = await client.fetch(bannerQueury);

  return {
    props:{Products,Banners},
  }
}

export default Home