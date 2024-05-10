import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>

            <section className='site-nav-lists-container'>
                <ul className='outer-list'>
                    <li>
                        SHOP
                        <ul className='inner-list'>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Baby</li>
                            <li>Kids</li>
                            <li>H&M HOME</li>
                            <li>Beauty</li>
                            <li>Student Discount</li>
                            <li>Sport</li>
                            <li>Gift cards</li>
                            <li>Magazine</li>
                        </ul>
                    </li>
                    <li>
                        CORPORATE INFO
                        <ul className='inner-list'>
                            <li>Career at H&M</li>
                            <li>About H&M Group</li>
                            <li>Sustainability H&M Group</li>
                            <li>Press</li>
                            <li>Investor Relations</li>
                            <li>Corporate Governance</li>
                        </ul>
                    </li>
                    <li>
                        HELP
                        <ul className='inner-list'>
                            <li>Customer Service</li>
                            <li>My Account</li>
                            <li>Find a Store</li>
                            <li>Legal & Privacy</li>
                            <li>Contact</li>
                            <li>Gift Card Terms and Conditions</li>
                            <li>CA Supply Chains Act</li>
                            <li>Do Not Sell Or Share My Personal Data</li>
                            <li>Our Commitment to Accessibility</li>
                            <li>Report a scam</li>
                            <li>Cookie Notice</li>
                            <li>Cookie Settings</li>
                        </ul>
                    </li>
                    <li className='member-li-item'>
                        Become a member
                        <ul className='inner-list'>
                            <li>Join now and get 10% off your next purchase!</li>
                            <li className='cta-member-li'>
                                READ MORE
                                <img src='/assets/right-arrow.svg' />
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className='footer-socials-container'>
                <ul>
                    <li>
                        <img src='assets/instagram.svg' />
                    </li>
                    <li>
                        <img src='assets/tiktok.svg' />
                    </li>
                    <li>
                        <img src='assets/youtube.svg' />
                    </li>
                    <li>
                        <img src='assets/pinterest.svg' />
                    </li>
                    <li>
                        <img src='assets/facebook.svg' />
                    </li>
                </ul>
            </section>

            <section className='legal-paragraph-footer'>
                <p>The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB. H&M is committed to accessibility. That commitment means H&M embraces WCAG guidelines and supports assistive technologies such as screen readers. If you are using a screen reader, magnifier, or other assistive technologies and are experiencing difficulties using this website, please call our TOLL-FREE support line (855-466-7467) for assistance.</p>
            </section>

            <section className='footer-logo-container'>
                <img src='/assets/red-logo.svg'/>
            </section>

            <section className='footer-location-currancy-container'>
                {/* this is where I'd add logic to make sure the location and currency changed based on where the user is */}
                <h1>United States | $</h1>
            </section>

        </div>
    )
}

export default Footer;