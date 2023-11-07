import React, { useState } from 'react'
import uuid from 'react-uuid';
import "./App.css"

export default function App() {
  const [product, setProduct] = useState([
    {
      name: "coca",
      img: "https://leteemartdalat.vn/static/images/san-pham/thuc-pham/N%C6%B0%E1%BB%9Bc%20u%E1%BB%91ng/3/N%C6%B0%E1%BB%9Bc%20Ng%E1%BB%8Dt%20Cocacola%20350ml.jpg",
      id: uuid(),
      price: 5,
      quantity:0
    },
    {
      name: "Fanta",
      img: "https://www.coca-cola.com/content/dam/onexp/vn/home-image/fanta/Fanta_Orange_RCG_320ml_Desktop.png",
      id: uuid(),
      price: 5,
      quantity:0
    },
    {
      name: "Sprite",
      img:"https://cdn.shoplightspeed.com/shops/609238/files/3198462/sprite-12-oz-can.jpg",
      id: uuid(),
      price: 5,
      quantity:0
    },
    {
      name: "Hảo Hảo",
      img:"https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/10/21/20221021_749933bc-c63a-4419-9bb3-dc13c64f0550.png",
      id: uuid(),
      price: 3,
      quantity:0
    },
    {
      name: "Kawasaky H2R",
      img:"https://kawasakivietnam.vn/data/news/default/d7f4028dfeac57c2e8d7bfa97e2238e4.jpg",
      id: uuid(),
      price: 40000,
      quantity:0
    },
    {
      name: "Kia Moning",
      img:"https://i-vnexpress.vnecdn.net/2022/06/27/kia-gt-line-9444-1656321329.jpg",
      id: uuid(),
      price: 25000,
      quantity:0
    },
    {
      name: "Bugati",
      img:"https://vov.vn/sites/default/files/styles/large/public/2023-08/https_www.carscoops.com_wp-content_uploads_2023_08_bugatti-chiron-super-sport-golden-era-1s-1024x576.jpg",
      id: uuid(),
      price: 700000,
      quantity:0
    },
    {
      name: "Rolls-Roy",
      img:"https://vcdn-vnexpress.vnecdn.net/2023/03/29/Rolls-Royce-Wraith-1-5945-1680056669.jpg",
      id: uuid(),
      price: 2500000,
      quantity:0
    },
    {
      name: "Máy Bay Chiến Đấu",
      img:"https://image.tienphong.vn/600x315/Uploaded/2023/uqvptwvo/2022_10_02/mi-28-havoc-4758.jpeg",
      id: uuid(),
      price: 5000000,
      quantity:0
    },
    {
      name: "Xe Tăng",
      img:"https://images2.thanhnien.vn/Uploaded/manhlv/2022_10_13/aa12sdb5-1-9750.jpg",
      id: uuid(),
      price: 300000,
      quantity:0
    },
    {
      name: "Boing-787",
      img:"https://www.rynek-lotniczy.pl//img/202305311635137879Dreamliner.jpg_678-443.jpg",
      id: uuid(),
      price: 20000000,
      quantity:0
    },
    {
      name: "Hòn Đảo",
      img:"https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/01_2022/hon-dao-co-hinh-dang-doc-la-tren-the-gioi-2.jpg",
      id: uuid(),
      price: 50000000,
      quantity:0
    },
    {
      name: "Sân Vận Động",
      img:"https://media.baobinhphuoc.com.vn/upload/news/11_2022/kham_pha_8_san_van_dong_to_chuc_world_cup_2022_o_qatar_21584520112022.jpg",
      id: uuid(),
      price: 1500000000,
      quantity:0
    },
    {
      name: "MU",
      img:"https://i.pinimg.com/originals/30/b5/49/30b54999b098050158ed13a1ecdcaab0.jpg",
      id: uuid(),
      price: 4000000000,
      quantity:0
    },

  ])
const addItem=(id)=>{
  let prd=product.findIndex((item)=>{
return item.id==id
  })
  let arr=[...product]
  arr[prd].quantity=arr[prd].quantity+1
  setProduct(arr)
}

const pre=(id)=>{
  let prd=product.findIndex((item)=>{
    return item.id==id
      })
      let arr=[...product]
      if (arr[prd].quantity!=0) {
        arr[prd].quantity=arr[prd].quantity-1
      }
  setProduct(arr)

}

let cart=product.filter((item)=>{
  return item.quantity!=0
})
let tatolMonney=cart.reduce((a,b)=>{
return a+b.price*b.quantity
},0)
 
const reset=()=>{
  let arr=[...product]
  for (let i = 0; i < arr.length; i++) {
    arr[i].quantity=0
  }
  setProduct(arr)
}

  return (
    <div>
      <div className='nav'>To Spend {200000000000-tatolMonney}$ You Have a Lot of money</div>
      <div className='product'>
        {product.map((item, index) => {
          return (
            <div className='item' key={index}>
              <img style={{marginTop:20}} src={item.img} width={250} height={300} />
              <p style={{fontSize:25}}>{item.name}</p>
              <p style={{fontSize:20,fontWeight:700,color:"red"}}>{item.price}$</p>
              <br />
              <button className='button'onClick={()=>pre(item.id)}>Interest</button>
              <span style={{marginLeft:20,marginRight:20}}>{item.quantity}</span>
               <button className='button' onClick={()=>addItem(item.id)} >Add</button>
            </div>
          )
        })}
      </div>
      <div className="cart">
                <h3>Giỏ hàng của bạn</h3>
                
                {cart.map((item,index)=>{
                    return <div className="infor" key={index}>
                        <p style={{fontSize:20,fontWeight:700,marginLeft:20}}>{item.name}</p>
                        <p style={{fontSize:20,fontWeight:700,marginRight:20}}>{item.quantity}</p>
                        
                    
                    </div>   
                    })}
                <div className="sumMoney">
                    <p style={{fontSize:20,fontWeight:700}}>Tổng số tiền là:{tatolMonney}$</p>
                    <button style={{backgroundColor:'yellow',borderRadius:10}} onClick={reset}>Làm mới giỏ hàng</button>
                </div>
            </div>
    </div>
  )
}
