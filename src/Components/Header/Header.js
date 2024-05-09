import "./Header.css";

function Header() {

    return (
        <div>

            <header>

                <section className='header-line-1-container'>

                    <div className='left-side-container'>
                        <ul className='left-side'>
                            <li>Customer Service</li>
                            <li>Students get 20% off</li>
                            <li>Find a store</li>
                            <li>
                                <img className='three-dots' src='./assets/three-dots.svg'/>
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

            <footer>

                <section className='nested-company-info-lists-container'>
                    <ul>
                        <li>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className='socials-container'>

                    <ul>
                        <li></li>
                    </ul>

                </section>

                <section className='disclaimer-legals-container'>
                    <p></p>
                </section>

                <img className='logo' />

                <h1 className='currancy'></h1>

            </footer>

        </div>
    )
}

export default Header;