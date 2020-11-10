import React from "react";
import { Link } from "react-router-dom";
import { dev_url_clean } from "../../apis/api";
import convert from "../../utils/DatetimeConverter";

const formatTitle = (title) => {
  if (title.length > 45) {
    var slicedTitle = title.slice(0, 45);
    return slicedTitle + "..."
  }

  return title;
};

const Post = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-10">
          <Link to={`/post/${props.id}`} className="text-muted">
            <h3 id="link-post-list">{formatTitle(props.title)}</h3>
          </Link>
          <h4>
            <span className="label label-default">#asdasd</span>
          </h4>
          <h4>
            <small className="text-muted">
              {convert(props.timestamp)} •
              <Link to={`/post/${props.id}`} className="text-muted">
                Read More
              </Link>
            </small>
          </h4>
        </div>
        <div className="col-sm-2">
          <Link to={`/post/${props.id}`} className="pull-right">
            <img
              src={`${dev_url_clean}${props.image}`}
              className="rounded-circle"
              alt="change it later"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
