import React, { useState, useEffect } from 'react';
import '../Slideshow.css';
import StarRating from '../components/StarRating'; // Assuming you have a StarRating component

const HomeVastuKit = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [rating, setRating] = useState(5); // Example rating, replace with actual data

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) newIndex = 1;
      if (newIndex < 1) newIndex = 3;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[n - 1].style.display = 'block';
    dots[n - 1].className += ' active';
  };

  return (
    <div className="shopping-cart">
      <header className="header">
        <h1>Home Vastu Kit</h1>
        <p className="price">
          <span className="old-price">₹2,100.00</span> <span className="new-price">₹1,100.00</span>
        </p>
      </header>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="/kit1.jpg" alt="Home Vastu Kit" />
          <div className="text">Complete Vastu Kit</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="/kit2.jpg" alt="Home Vastu Kit Components" />
          <div className="text">All Components Included</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="/kit3.jpg" alt="Home Vastu Kit Usage" />
          <div className="text">Easy to Use</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <div className="dots-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      <div className="product-details">
        <StarRating rating={rating} /> {/* Displaying star rating */}
        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" />
        </div>
        <div className="buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button href= "/bu" className="buy-now">Buy Now</button>
        </div>
      </div>

      <section className="product-description">
        <h2>VASTU KIT INCLUDES:</h2>
        <ul>
          <li><strong>2 Pieces of Number 24:</strong> Known as the enhancer of Venus in numerology, suitable for any home or vastu remedy.</li>
          <li><strong>4 blue colour strips:</strong> Represents water, balancing directional energy.</li>
          <li><strong>4 white colour strips:</strong> Represents space, fostering serenity and peace.</li>
          <li><strong>4 green colour strips:</strong> Symbolizes nature, promoting harmony, hope, and tranquility.</li>
          <li><strong>4 yellow colour strips:</strong> Symbolizes the earth element, bringing stability and hope.</li>
          <li><strong>4 red colour strips:</strong> Represents spirituality, inviting positive energy into homes.</li>
          <li><strong>2 directional compass assistance folios.</strong></li>
        </ul>
        <h2>Product Description</h2>
        <p>The accompanying booklet provides comprehensive yet accessible guidance on utilizing the kit materials effectively for Vastu practices in both Hindi and English.</p>
        <p>Please read the booklet attentively and apply the materials accordingly as per the provided instructions. Our kit is meticulously designed to equip you with everything necessary for complete Vastu alignment without the need for additional external resources.</p>
      </section>
    </div>
  );
};

export default HomeVastuKit;
