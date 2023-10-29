import { Link } from 'react-router-dom';

function Header() {
    function handleShowMenuMobile() {
        const menuMobile = document.querySelector('.menu-list-mobile');
        const overlay = document.querySelector('.menu-overlay');
        overlay.classList.add('active');
        menuMobile.classList.add('active');
    }

    function handleOverlay(e) {
        const menuMobile = document.querySelector('.menu-list-mobile');
        menuMobile.classList.remove('active');
        e.target.classList.remove('active');
    }

    function handleCloseMenuMobile() {
        const menuMobile = document.querySelector('.menu-list-mobile');
        const overlay = document.querySelector('.menu-overlay');
        menuMobile.classList.remove('active');
        overlay.classList.remove('active');
    }
    return (
        <>
            <header className="header-section shadow-sm">
                <div className="top-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tn-left">
                                    <li>
                                        <i className="fa fa-phone" /> (12) 345 67890
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" /> info.colorlib@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tn-right">
                                    <div className="top-social">
                                        <Link to="#">
                                            <i className="fa fa-facebook" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa fa-twitter" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa fa-tripadvisor" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa fa-instagram" />
                                        </Link>
                                    </div>
                                    <Link to="#" className="bk-btn">
                                        Booking Now
                                    </Link>
                                    <div className="language-option">
                                        <img src="frontend/img/flag.jpg" alt="" />
                                        <span>
                                            EN <i className="fa fa-angle-down" />
                                        </span>
                                        <div className="flag-dropdown">
                                            <ul>
                                                <li>
                                                    <Link to="#">Zi</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Fr</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="frontend/img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="nav-menu">
                                    <nav className="mainmenu">
                                        <ul>
                                            <li className="active">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/rooms/room">Rooms</Link>
                                            </li>
                                            <li>
                                                <Link to="/blogs">Blogs</Link>
                                            </li>

                                            <li>
                                                <Link to="" aria-disabled>
                                                    Pages
                                                </Link>
                                                <ul className="dropdown shadow-lg">
                                                    <li>
                                                        <Link to="/room-details">Room Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog-details">Blog Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">Family Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">Premium Room</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/aboutus">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="menu-overlay" onClick={handleOverlay}></div>
                        <div className="canvas-open" onClick={handleShowMenuMobile}>
                            <i className="icon_menu"></i>
                        </div>

                        {/* MENU MOBILE  */}
                        <ul className="menu-list-mobile shadow-lg d-lg-none">
                            <li className="menu-item-mobile">
                                <button className="btn" onClick={handleCloseMenuMobile}>
                                    {/* <FontAwesomeIcon icon={faXmark} /> */}
                                </button>
                            </li>

                            <li className="menu-item-mobile">
                                <Link to="" className="menu-mobile-avatar">
                                    <img src="/logo192.png" alt="" className="avatar" />
                                    <p>Đàm Văn Hòa</p>
                                </Link>
                            </li>
                            <li className="menu-item-mobile">
                                <Link to="/" className="menu-mobile-link">
                                    Home
                                </Link>
                            </li>
                            <li className="menu-item-mobile">
                                <Link to="" className="menu-mobile-link">
                                    Rooms
                                </Link>
                            </li>
                            <li className="menu-item-mobile">
                                <Link to="" className="menu-mobile-link">
                                    Blogs
                                </Link>
                            </li>
                            <li className="menu-item-mobile">
                                <Link to="" className="menu-mobile-link">
                                    About
                                </Link>
                            </li>

                            {/* <li className="menu-item-mobile">
                        <span href="" className="menu-mobile-link ">
                            Login
                        </span>
                    </li>
                    <li className="menu-item-mobile">
                        <span href="" className="menu-mobile-link ">
                            Register
                        </span>
                    </li>
                     */}
                            <li className="menu-item-mobile">
                                <Link to="" className="menu-mobile-link ">
                                    Logout
                                </Link>
                            </li>

                            <li className="menu-item-mobile menu-item-contact">
                                <Link to={''} className="menu-mobile-contact">
                                    {/* <FontAwesomeIcon icon={faFacebook} /> */}
                                </Link>
                                <Link to={''} className="menu-mobile-contact">
                                    {/* <FontAwesomeIcon icon={faInstagram} /> */}
                                </Link>
                                <Link to={''} className="menu-mobile-contact">
                                    {/* <FontAwesomeIcon icon={faTiktok} /> */}
                                </Link>
                                <Link to={''} className="menu-mobile-contact">
                                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                                </Link>
                            </li>

                            <li className="menu-item-mobile menu-item-contact">
                                <p className="menu-mobile-info">
                                    <i>{/* <FontAwesomeIcon icon={faPhone} /> */}</i> 0708852641
                                </p>
                                <p className="menu-mobile-info">
                                    <i>{/* <FontAwesomeIcon icon={faEnvelope} /> */}</i> damvanhoa30052002@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* Header End */}
        </>
    );
}

export default Header;
