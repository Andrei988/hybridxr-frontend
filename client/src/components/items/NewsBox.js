import React from "react";
import { dev_url_clean } from "../../apis/api";
import { Link } from "react-router-dom";
import convert from "../../utils/DatetimeConverter";
import formatTitle from "../../utils/FormatTitle";

const NewsBox = ({ title, image, id, tag, timestamp, paddingSetting }) => {
  return (
    <div className={`col-6 pl-1`} id ="related-container">
      <div className="card border-0 rounded-0 text-white overflow zoom">
        <div className="position-relative">
          {/*thumbnail img*/}
          <div className="ratio_right-cover-2 image-wrapper">
            <img
              src={`${dev_url_clean}${image}`}
              className="d-block w-100"
              alt="new box image"
              id="related-image"
            />
          </div>
          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
            {/* category */}
            <div className="p-1 badge badge-primary rounded-0">
              {convert(timestamp)} {/* add tag later */}
            </div>
            {/*title*/}
            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
              <Link to={`/post/${id}`}>
                <h2 className="h5 text-white my-1">"{formatTitle(title)}"</h2>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
