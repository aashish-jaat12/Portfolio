import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home1.css";
import { Link } from "react-router-dom";

function BlogHome() {
  const settings = {
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="contaner">
      <h2>Latest Blog Posts</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {/* Card 1 */}
          <div>
            <div className="card" style={{ margin: "0 15px" }}>
              <img
                src="https://imgs.search.brave.com/EKBFPzSp4lYjuG2DaMlP_CxJDaQT03N27lVPY-qHPh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW9wZW9wbGUuZWR1/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9iYi1w/bHVnaW4vY2FjaGUv/SGlnaC1TY2hvb2wt/dnMtQ29sbGVnZS1M/aWZlLWxhbmRzY2Fw/ZS01OTE2ODQxOGI1/YTA0MDU3ZjU1NThk/OGQ0ZDgzNjA0NS1u/NW13dm80YTdrZXou/anBn" // Replace with your image URL
                alt="Revolutionizing Payment Systems"
              />
              <div className="h3">
                <h4>BCA Collage Life</h4>
              </div>

              <p>
                Explore the transformative impact of cutting-edge technologies
                on payment systems, reshaping the future of financial
                transactions.
              </p>
              <Link to="/Collage-Life-Blog">
                <button className="view-articles-btn">View Articles</button>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div>
            <div className="card" style={{ margin: "0 15px" }}>
              <img
                src="https://imgs.search.brave.com/TSdZgiZFXeNP3822Y9HNRiU4ZM6GGlzx8P0eEYXT5n8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWl0/bS5hYy5pbi9tZWRp/YS9maWxlcy9VTkFE/SlVTVEVETk9OUkFX/X3RodW1iXzJjX0VG/QkNjOEouanBn" // Replace with your image URL
                alt="Crafting Digital Odyssey"
              />{" "}
              <div className="h3">
                <h4>Why choose BCA</h4>
              </div>
              <p>
                In the digital realm, a harmonious UI/UX duo is essential for a
                captivating user journey, shaping experiences.
              </p>
              <Link to="/Why-bca-202..">
                <button className="view-articles-btn">View Articles</button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className="card" style={{ margin: "0 15px" }}>
              <img
                src="https://imgs.search.brave.com/vSlG4ThkGJriVxlKrZCFVx_V04Ots2HMgkSKLFL5VAo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjE2/OTAyNzY2L3Bob3Rv/L2RlZGljYXRlZC10/by1zb2Z0d2FyZS1k/ZXZlbG9wbWVudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RGJlUVpoYTdFRE94/U0NLNDlJT3pQNkRh/VkphQkVsekZJdE9W/SktRU0Rlaz0" // Replace with your image URL
                alt="Decoding MLM Compensation"
              />
              <div className="h3">
                <h4>Web Developer in 2024</h4>
              </div>
              <p>
              Web development has been a dynamic and ever-evolving field, shaping
            the digital landscape and transforming how businesses....
              </p>
              <Link to="/web-developer-2024">
                <button className="view-articles-btn">View Articles</button>
              </Link>
            </div>
          </div>
          {/* Card 4 */}
        </Slider>
      </div>
    </div>
  );
}

export default BlogHome;
