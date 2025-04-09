import React from 'react'
import "./Page.css"

const Page = () => {
  return (
    <main className="hero">
        <div className="herocontent">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="herobutton">
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className="shopping">
                <p>Also Avilable</p>
                <div className="brandicon">
                    <img src="/images/amazon.png" alt="amazon logo" />
                    <img src="/images/flipkart.png" alt="flipkart logo" />
                </div>
            </div>
        </div>

        <div className="heroimage">
            <img src="/images/shoe_image.png" alt="alt image" />
        </div>
    </main>
  )
}

export default Page
