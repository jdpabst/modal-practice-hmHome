import './LandingPage.css';

function LandingPage () {

    return (
        <div className='landing-page-container'>
            <section className='left-column'>
                <ul className='left-column-items-container'>
                    <li className='list-header'> New Arrivals
                        <ul>
                            <li>New Products</li>
                        </ul>
                    </li>
                    <li className='list-header'> Trending Now
                        <ul>
                            <li>The Bestsellers Shop</li>
                            <li> Linen </li>
                            <li> Candles from $3.99 </li>
                            <li> Home Décor under $9.99 </li>
                        </ul>
                    </li>
                    <li className='list-header'> Offers & Deals 
                        <ul>
                            <li> Sale </li>
                            <li> Student Discount </li>
                        </ul>
                    </li>
                    <li className='list-header'> Gifting
                        <ul>
                            <li> Gift Cards </li>
                        </ul>
                    </li>
                    <li className='list-header'> Shop by Room
                        <ul>
                            <li> Hallway </li>
                            <li> Bedroom </li>
                            <li> Living Room </li>
                            <li> Nursery </li>
                            <li> Kids Room </li>
                            <li> Bathroom </li>
                            <li> Kitchen </li>
                            <li> Balcony & Outdoor </li>
                        </ul>
                    </li>
                    <li className='list-header'> Shop by Product
                        <ul>
                            <li> View All </li>
                            <li> Furniture </li>
                            <li> Lighting </li>
                            <li> Homeware </li>
                            <li> Serving & Dining </li>
                            <li> Decorations </li>
                            <li> Throw Pillows & Cushions </li>
                            <li> Bedding </li>
                            <li> Toys </li>
                            <li> Books </li>
                            <li> Room Fragrance </li>
                            <li> Wall Decorations </li>
                            <li> Storage </li>
                            <li> Bath & Shower </li>
                            <li> Rugs </li>
                            <li> Curtains </li>
                            <li> Cookware </li>
                            <li> Blankets </li>
                            <li> Gift Wrapping </li>
                        </ul>
                    </li>
                    <li className='list-header'> Sustainability
                        <ul>
                            <li>Meet the maker</li>
                            <li>Learn More</li>
                        </ul>
                    </li>
                </ul>

            </section>

            <section className='right-column'>

                <div className='first-container cursor-pointer'>
                    <h1>Get 15% off your order</h1>
                    <p> Sign up to receive emails and texts and be the first to know about latest drops and deals!</p>
                    <img src='/assets/info-icon.svg' />
                </div>

                <div className='second-container cursor-pointer'>
                    <div className='title-cta-container-2'>
                        <h1>Shades of blue</h1>
                        <button>Shop now</button>
                    </div>
                    <img  className='black-tri' src='/assets/black-triangle.svg' />
                    <div className='product-nav-box'>
                        <p>$6.99</p>
                        <p>Stoneware Side Plate</p>
                        <img src='/assets/right-arrow-2.svg' />
                    </div>
                </div>

                <div className='third-container cursor-pointer'>
                    <div className='title-cta-container-3'>
                        <h1>Beach towels and bags</h1>
                        <button>Shop now</button>
                    </div>
                    
                    <div className='product-nav-container'>
                        <img className='black-tri' src='/assets/black-triangle.svg' />
                        <div className='product-nav-box'>
                            <p>$17.99</p>
                            <p>Patterned Beach Towel</p>
                            <img src='/assets/right-arrow-2.svg' />
                        </div>
                    </div>
                </div>

                <div className='fourth-container'>
                    <h1>Home décor</h1>
                    <p>Level up your interior aesthetics with our home décor range. Whether you've moved into a new home, or you want to breathe new life into your existing living space, our collection has every room in the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches? Check out our beautiful bed linen, and top it off by scrolling for decorative cushions and cushion covers, or create textured layers with blankets and throws. When it comes to decorations, add scented candles to your bathroom, give your favorite plants a place to call home in our chic plant pots, or experiment with wall hangings and elegant glassware. Whether your preferred style is minimalistic or bold, we've got something to suit every taste in our home décor range.</p>
            {/* toggle read more/read less here */}
                    <p className='toggle' >Read less</p>
                </div>

            </section>
        </div>
    )
}

export default LandingPage;