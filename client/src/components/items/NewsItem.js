import React from "react";
import { dev_url_clean } from "../../apis/api";
import { Link } from "react-router-dom";
import convert from "../../utils/DatetimeConverter";

const NewsItem = ({ title, meta_info, timestamp, image, id }) => {
  // TODO: remove later unused props
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
              src={`${dev_url_clean}${image}`}
              className="d-block w-100 "
              alt="carousel image"
              id="carousel-item-img"
            />
          </div>
          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
            {/*title*/}
            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
              <h2 className="h3 post-title text-white my-1">{title}</h2>
            </a>
            {/* meta title */}
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
