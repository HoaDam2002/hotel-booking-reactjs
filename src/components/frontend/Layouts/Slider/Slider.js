import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

////img
import hero1 from '~/components/assets/frontend/img/hero/hero-1.jpg';
import hero2 from '~/components/assets/frontend/img/hero/hero-2.jpg';
import hero3 from '~/components/assets/frontend/img/hero/hero-3.jpg';

function Slider() {
    // Xử lý datepicker
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const today = new Date();

    let newEndDate = null;
    if (startDate) {
        newEndDate = new Date(startDate);
        newEndDate.setDate(newEndDate.getDate() + 1);
    }
    return (
        <section className="home-slider">
            <div id="carouselExampleInterval" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner custom-carousel">
                    <div className="carousel-item active" data-interval={2000}>
                        <img src={hero1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval={2000}>
                        <img src={hero2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval={2000}>
                        <img src={hero3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* search  */}
            <div className="container">
                <div className="row">
                    <div className="d-none d-lg-block col-6"></div>
                    <div className="home-search-box col-12 col-lg-6">
                        <form className="home-form-search">
                            <h3>Booking Your Hotel</h3>
                            <div className="search-item ">
                                <label>Check In:</label>
                                <DatePicker
                                    wrapperClassName="custom-datepicker-wrapper"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={today}
                                    dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                                    placeholderText="dd/mm/yyyy"
                                    className="search-input"
                                />
                            </div>
                            <div className="search-item search-input">
                                <label>Check Out:</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    minDate={newEndDate ? newEndDate : today}
                                    dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                                    placeholderText="dd/mm/yyyy"
                                    wrapperClassName="custom-datepicker-wrapper"
                                    className="search-input"
                                />
                            </div>
                            <div className="search-item">
                                <label>Type Room:</label>
                                <select className="search-select">
                                    <option>mmm</option>
                                </select>
                            </div>
                            <div className="search-item">
                                <label>Guests: </label>
                                <select className="search-select">
                                    <option>mmm</option>
                                </select>
                            </div>
                            <button className="search-btn">
                                <Link to="/search">Check Room</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;
