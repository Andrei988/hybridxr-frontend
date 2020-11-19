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
      return this.props.posts.map(
        ({ title, meta_info, timestamp, image, isRelated, id }) => {
          if (isRelated) {
            var img = image.substring(1); // removes a slash
            return (
              <NewsBox
                key={id}
                title={title}
                meta_info={meta_info}
                timestamp={timestamp}
                image={img}
                id={id}
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
        <section className="row justify-content-around" id="news-carousel">
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
          <div className="row d-flex justify-content-around">
            {this.renderNewsBox()}
          </div>
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(NewsPage);
