import React from "react";
import NewsCarouselItem from "../nav/NewsCarouselItem";
import { connect } from "react-redux";
import { getPosts } from "../../actions";

class NewsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      totalSlides: this.props.posts.length,
    };
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  handleSlideChange(slideNumber) {
    this.setState({ activeSlide: slideNumber });
  }

  componentDidMount() {
    this.props.getPosts();
  }

  getItemsCount = () => {
    return this.props.posts.filter(function (post) {
      return post.isRelated === false;
    }).length;
  };

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

  rederDotsNavigate() {
    // <Link to={`/post/${props.id}`} className="text-muted">
    //   <h3 id="link-post-list">{formatTitle(props.title)}</h3>
    // </Link>;

    return (
      <ol class="carousel-indicators top-indicator">
        <li data-target="#featured" data-slide-to="0" class="active"></li>
        <li onClick={() => this.handleSlideChange(1)} data-target="#featured" data-slide-to="1"></li>
        <li data-target="#featured" data-slide-to="2"></li>
        <li data-target="#featured" data-slide-to="3"></li>
      </ol>
    );
  }

  renderCarouselNavigation() {
    return (
      <div>
        {/*navigation*/}
        <a
          className="carousel-control-prev"
          href="#featured"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#featured"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }

  renderItemsSlider() {
    if (this.props.posts) {
      var firstRendered = false;
      console.log(this.props.posts);
      return this.props.posts.map(
        ({ title, meta_info, timestamp, image, isRelated, id }) => {
          var img = image.substring(1); // removes a slash
          if (!isRelated) {
            if (!firstRendered) {
              firstRendered = true;
              return (
                <div className="cr-item" key={id}>
                  <NewsCarouselItem
                    title={title}
                    meta_info={meta_info}
                    timestamp={timestamp}
                    image={img}
                    active="active"
                  />
                </div>
              );
            }

            return (
              <div className="cr-item" key={id}>
                <NewsCarouselItem
                  title={title}
                  meta_info={meta_info}
                  timestamp={timestamp}
                  image={img}
                  active=""
                />
              </div>
            );
          }
          return null;
        }
      );
    }
  }

  renderBoxNews() {
    return (
      <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
        <div className="row"> 
          {/*news box*/}
          <div className="col-6 pb-1 pt-0 pr-1">
            <div className="card border-0 rounded-0 text-white overflow zoom">
              <div className="position-relative">
                {/*thumbnail img*/}
                <div className="ratio_right-cover-2 image-wrapper">
                  <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                    <img
                      className="img-fluid"
                      src="https://bootstrap.news/source/img5.jpg"
                      alt="simple blog template bootstrap"
                    />
                  </a>
                </div>
                <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                  {/* category */}
                  <a
                    className="p-1 badge badge-primary rounded-0"
                    href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/"
                  >
                    Lifestyle
                  </a>
                  {/*title*/}
                  <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                    <h2 className="h5 text-white my-1">
                      Should you see the Fantastic Beasts sequel?
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end news box*/}
        </div>
      </div>
    );
  }

  render() {
    return (
      <section class="row" id="news-carousel">
        {/* <!--Start slider news--> */}
        <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
          <div
            id="featured"
            class="carousel slide carousel"
            data-ride="carousel"
          >
            {/* <!--dots navigate--> */}
            {this.rederDotsNavigate()}

            <div class="carousel-inner">
              {/* <!--Item slider--> */}
              {this.renderItemsSlider()}
            </div>
          </div>

          {/* {this.renderCarouselNavigation()} */}
          {/*navigation*/}
        <a
          className="carousel-control-prev"
          href="#featured"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#featured"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
        </div>
        {this.renderBoxNews()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(NewsCarousel);
