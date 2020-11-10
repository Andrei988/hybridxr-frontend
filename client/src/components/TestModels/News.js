import React from "react";
import RelatedPost from "../models/RelatedPost";
import Post from "../models/Post";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { getPosts } from "../../actions";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  componentDidMount() {
    this.props.getPosts();
  }

  getItemsCount = () => {
    return this.props.posts.filter(function (post) {
      return post.isRelated === false;
    }).length
  }

  chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  renderPostList() {
    if (this.props.posts.length) {
      let filtered_posts = this.props.posts.filter(function (post) {
        return post.isRelated === false;
      });
      var postChunks = this.chunkArray(filtered_posts, 3);
      return postChunks[this.state.activePage - 1].map(
        ({ title, meta_info, timestamp, image, id }) => {
          var img = image.substring(1); // removes a slash
          return (
            <div className="item" key={id}>
              <Post
                id={id}
                title={title}
                meta_info={meta_info}
                timestamp={timestamp}
                image={img}
              />
            </div>
          );
        }
      );
    }
    return null;
  }

  renderRelatedPostList() {
    if (this.props.posts) {
      return this.props.posts.map(
        ({ title, meta_info, timestamp, image, isRelated, id }) => {
          if (isRelated) {
            var img = image.substring(1); // removes a slash
            return (
              <div className="col-sm-4 text-center" key={id}>
                <RelatedPost
                  title={title}
                  meta_info={meta_info}
                  timestamp={timestamp}
                  image={img}
                />
              </div>
            );
          }
          return null;
        }
      );
    }
  }

  renderPagination() {
    return (
      <div>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={this.getItemsCount()}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="row" id="news">
        {/* sidebar */}
        {/* <div className="column col-sm-3" id="sidebar">
          <a className="logo" href="/">
            XR
          </a>

          <ul className="nav hidden-xs" id="sidebar-footer">
            <li>
              <div className="page-header text-muted divider">
                Connect with Us
              </div>
              <a href="/">Twitter</a> <small className="text-muted">|</small>
              <a href="/">Facebook</a> <small className="text-muted">|</small>
              <a href="/">Google+</a>
            </li>
          </ul>
        </div> */}
        {/* /sidebar */}

        {/* main */}
        <div className="column col-sm-10" id="main">
          <div className="padding">
            <div className="full col-sm-9">
              <div className="col-sm-12" id="stories">
                <div className="page-header text-muted divider">
                  Top Stories
                </div>
              </div>
              {/*/stories*/}

              {this.renderPostList()}
              <div
                className="row d-flex justify-content-center "
                id="pagination-row"
              >
                {this.renderPagination()}
              </div>

              <div className="col-sm-12">
                <div className="page-header text-muted divider">Up Next</div>
              </div>
              <div className="row" id="related">{this.renderRelatedPostList()}</div>
            </div>
          </div>
        </div>
        {/* /main */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(News);
