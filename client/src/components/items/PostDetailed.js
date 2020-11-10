import React from "react";
import { connect } from "react-redux";
import { getPost } from "../../actions";
import { dev_url_clean } from "../../apis/api";
import convert from "../../utils/DatetimeConverter";

class PostDetailed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: localStorage.getItem("post"),
      id: localStorage.getItem("id"),
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.savePostLocally(this.props.post, id);
  }

  savePostLocally = (post, id) => {
    try {
      localStorage.setItem("post", JSON.stringify(post));
      localStorage.setItem("id", id);
    } catch (e) {
      console.log(e);
    }
  };

  renderPost(post) {
    var img = "";
    if (post.image) {
      img = post.image.substring(1);
    }

    return (
      <div id="post-detailed">
        <section
          class="banner-section"
          style={{ backgroundImage: `url(${dev_url_clean}${img})` }}
        >
          <div
            className="col-lg-12 col-md-12 col-sm-12 post-title-block"
            id="banner-container"
          >
            <div id="banner-contents">
              <h1 className="text-center">{post.title}</h1>
              <ul className="list-inline text-center">
                <li>{convert(post.timestamp)}</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 col-md-9 col-sm-12"
              id="post-detailed-description"
            >
              <p className="lead">{post.description}</p>
            </div>
          </div>
        </div>{" "}
        {/* /container */}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPost(this.props.post ? this.props.post : this.state.post)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { post: state.posts[0] };
};

export default connect(mapStateToProps, { getPost })(PostDetailed);
