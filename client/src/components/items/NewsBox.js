import React from "react";
import { prod_url_images } from "../../apis/api";
import { Link } from "react-router-dom";
import convert from "../../utils/DatetimeConverter";
import formatTitle from "../../utils/FormatTitle";

const NewsBox = ({ title, image, id, timestamp }) => {
  return (
    <div
      className="col-12 col-md-6  col-sm-6 col-lg-6  mb-3 "
      id="related-container"
    >
      <div className="card border-0 rounded-0 text-white overflow zoom">
        <div className="position-relative">
          <div className="ratio_right-cover-2 image-wrapper">
            <img
              src={`${prod_url_images}${image}`}
              className="d-block w-100"
              alt="news box"
              id="related-image"
            />
          </div>
          <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
            <div className="p-1 badge badge-danger rounded-0">
              {convert(timestamp)}
            </div>
            <Link to={`/post/${id}`}>
              <h2 className="h5 text-white my-1">"{formatTitle(title)}"</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
