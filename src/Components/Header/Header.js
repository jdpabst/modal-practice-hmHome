import { useRef, useState } from "react";
import useClickAway from "../../hooks/UseClickAway";
import "./Header.css";


function Header() {
    // useRef is built into React, basically you assign it to a variable and use the variable to point the code to a specific piece. In this app, it is pointing to the dropdown menu div so that our useClickAway function knows what it's looking at. //

    const menuDropdownRef = useRef(null);
    const [showDropDown, setShowDropDown] = useState(false);

    // The useClickAway hook needs a ref and a cb funtion. We've assigned a ref to the correct div and our cb function is changing our state variable to toggle the div on and off. //
    useClickAway(menuDropdownRef, () => {

        setShowDropDown(false);

    });

    // I need to move the discountmodal to the correct part of my code and get the popup working on that part (click the top 15%off banner to open the modal, close by clicking x or anywhere other than the modal)

    return (
        <div>

            <header>

                <section className='header-line-1-container'>

                    <div className='left-side-container'>

                        <ul className='left-side'>
                            <li>Customer Service</li>
                            <li>Students get 20% off</li>
                            <li>Find a store</li>
                            <li ref={menuDropdownRef} className="drop-down-container" onClick={() => { setShowDropDown(!showDropDown) }}>
                                <img className='three-dots' src='./assets/three-dots.svg' />

                                {showDropDown &&
                                    <div className="drop-down">
                                        <ul>
                                            <li>Newsletter</li>
                                            <li>Download iOS</li>
                                            <li>Download Android</li>
                                        </ul>
                                    </div>
                                }

                            </li>
                        </ul>
                    </div>

                    <div className='header-logo-container'>
                        <img src='/assets/red-logo.svg' />
                    </div>

                    <div className='right-side-container'>
                        <ul className='right-side'>
                            <li>
                                <img src='/assets/person-icon.svg' />
                                <p>Sign in</p>
                            </li>
                        </ul>
                        <ul className='right-side'>
                            <li>
                                <img src='/assets/heart-icon.svg' />
                                <p>Favorites</p>
                            </li>
                        </ul>
                        <ul className='right-side'>
                            <li>
                                <img src='/assets/bag-icon.svg' />
                                <p>Shopping bag</p>
                                {/* this is where I'd add logic to keep track of the amount of items in the cart */}
                                <p>(0)</p>
                            </li>
                        </ul>
                    </div>

                </section>

                <section className='header-line-2-container'>

                    <div className='main-contents-container'>
                        <ul className='main-contents'>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Baby</li>
                            <li>Kids</li>
                            <li>H&M HOME</li>
                            <li>Beauty</li>
                            <li>Sport</li>
                            <li>Sale</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>

                    <div className='search-container'>
                        <img src='/assets/search-icon.svg' />
                        <input type='text' value='Search' className='search' />
                    </div>

                </section>

                <section className='navigation-track-container'>
                    <div className='navigation-track'>
                        <p>HM.com</p>
                        <p> / </p>
                        {/* this is where logic would go to keep track of where the user is in the website */}
                        <p className='current-page'>H&M HOME</p>
                    </div>
                </section>

            </header>

        </div>
    )
}

export default Header;