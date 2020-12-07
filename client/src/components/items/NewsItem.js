import React from "react";
import { prod_url_clean } from "../../apis/api";
import { Link } from "react-router-dom";
import convert from "../../utils/DatetimeConverter";

const NewsItem = ({ title, timestamp, image, id }) => {
  var image_formatted = image.replace('images/','');
  console.log(image_formatted)
  console.log(`${prod_url_clean}${image_formatted}`)
  return (
    <div
      key={title}
      className="card border-0 rounded-0 text-light overflow zoom"
    >
      <div className="position-relative">
        {/*thumbnail img*/}
        <Link to={`/post/${id}`} className="text-muted">
          <div className="ratio_left-cover-1 image-wrapper">
            <img
              src={`${prod_url_clean}${image_formatted}`}
              className="d-block w-100 "
              alt="carousel"
              id="carousel-item-img"
            />
          </div>
          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
            <h2 className="h3 post-title text-white my-1">{title}</h2>
            <div className="news-meta">
              <span className="news-date">{convert(timestamp)}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
