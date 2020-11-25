import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import api from "../apis/api";
import { runMobileNav } from "../jQuery/mobileNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import history from "../history";
import Navigation from "./baseComponents/Navigation";
import Footer from "./baseComponents/Footer";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import PostDetailed from "./items/PostDetailed";
import Skeleton from "@yisheng90/react-loading";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyInfo: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  componentDidUpdate() {
    runMobileNav();
  }

  getInfo = async () => {
    await api.get("info").then((response) => {
      this.setState({ companyInfo: response.data });
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="">
          <Skeleton width={2500}  height="100vh" translucent/>
        </div>
      );
    }

    const { companyInfo } = this.state;
    const info = companyInfo[0];
    console.log(info["company_name"]);
    return (
      <div className="container">
        <Router history={history}>
          <div></div>
          <Navigation
            companyName={info["company_name"]}
            email={info["contact_email"]}
            contactNumber={info["contact_number"]}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  companyName={info["company_name"]}
                  description={info["company_description"]}
                />
              )}
            />
            <Route path="/news" exact component={NewsPage} />
            <Route path="/services" exact component={ServicesPage} />
            <Route path="/portfolio" exact component={PortfolioPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/post/:id" exact component={PostDetailed} />
            <Route
              path="/contact"
              exact
              component={() => (
                <ContactPage
                  title={info["contact_title"]}
                  address={info["contact_address"]}
                  email={info["contact_email"]}
                  number={info["contact_number"]}
                />
              )}
            />
          </Switch>
          <Footer
            number={info["contact_number"]}
            email={info["contact_email"]}
            address={info.contact_address_array}
            sn_title={info["footer_title"]}
          />
        </Router>
      </div>
    );
  }
}

export default App;
