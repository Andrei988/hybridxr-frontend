import React from "react";
import {dev_url_clean} from "../../apis/api"
import { Link } from "react-router-dom";

const formatTitle = (title) => {
  if (title.length > 15) {
    var slicedTitle = title.slice(0, 15);
    return slicedTitle + "..."
  }

  return title;
};

const RelatedPost = ({title, image, id }) => {
  return (
    <div>
      <h4>{formatTitle(title)}</h4>
      <Link to={`/post/${id}`}>
      <img src={`${dev_url_clean}${image}`}  alt="change it later"/>
      </Link>
    </div>
  );
};

export default RelatedPost;
