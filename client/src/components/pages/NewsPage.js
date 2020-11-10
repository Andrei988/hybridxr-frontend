import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPosts } from "../../actions";
import { connect } from "react-redux";
import NewsItem from "../../components/items/NewsItem";
import NewsBox from "../items/NewsBox";

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
    };
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
    });
  }

  componentDidMount() {
    this.props.getPosts();
  }

  renderCarouselItems() {
    if (this.props.posts) {
      return this.props.posts.map(
        ({ title, meta_info, timestamp, image, isRelated, id }) => {
          var img = image.substring(1); // removes a slash
          if (!isRelated) {
            return (
              <Carousel.Item key={id} indicators={false}>
                <NewsItem
                  id={id}
                  title={title}
                  meta_info={meta_info}
                  timestamp={timestamp}
                  image={img}
                />
              </Carousel.Item>
            );
          }
          return null;
        }
      );
    }
  }

  renderNewsBox() {
    if (this.props.posts) {
      var count = 0;
      return this.props.posts.map(
        ({ title, meta_info, timestamp, image, isRelated, id }) => {
          count++;
          if (isRelated) {
            var img = image.substring(1); // removes a slash
            var setting = "";

            if (count % 4 === 1) {
              setting += "pl-1 pt-0";
            } else if (count % 4 === 2) {
              setting += "pl-1 pt-0";
            } else if (count % 4 === 3) {
              setting += "pr-1 pt-1";
            } else if (count % 4 === 0) {
              setting += "pl-1 pt-1";
            }
            console.log(setting)
            return (
              <NewsBox
                key={id}
                title={title}
                meta_info={meta_info}
                timestamp={timestamp}
                image={img}
                id={id}
                paddingSetting={setting}
              />
            );
          }
          return null;
        }
      );
    }
  }

  render() {
    const { index } = this.state;
    return (
      <div className="container">
        <div class="row">
          <div class="col-12 pb-5">
            <section className="row" id="news-carousel">
              <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                <Carousel
                  indicators={false}
                  autoPlay={true}
                  interval={10000}
                  activeindex={index}
                  onSelect={this.handleSelect}
                  className="carousel slide carousel"
                >
                  {this.renderCarouselItems()}
                </Carousel>
              </div>

              <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                <div className="row">{this.renderNewsBox()}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(NewsPage);
