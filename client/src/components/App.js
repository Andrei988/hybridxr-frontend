import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Navigation
              companyName={info.company_name}
              email={info.contact_email}
              contactNumber={info.contact_number}
            />
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <Home
                    companyName={info.company_name}
                    description={info.company_description}
                  />
                )}
              />
              <Route path="/news" exact component={NewsPage} />
              <Route path="/services" exact component={() => <ServicesPage />} />
              <Route path="/portfolio" exact component={() => <PortfolioPage />} />
              <Route path="/about" exact component={() => <AboutPage />} />
              <Route path="/post/:id" exact component={PostDetailed} />
              <Route
                path="/contact"
                exact
                component={() => (
                  <ContactPage
                    title={info.contact_title}
                    address={info.contact_address}
                    email={info.contact_email}
                    number={info.contact_number}
                  />
                )}
              />
            </Switch>
            <Footer
              number={info.contact_number}
              email={info.contact_email}
              address={info.contact_address_array}
              sn_title={info.footer_title}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

const info = {
  company_name: "Hybrid XR",
  company_description:
    "We make augmented and virtual reality for improving the way peoplelive, train, study, explore and cure",
  contact_title:
    "Ut possimus qui ut temporibus culpa velit eveniet modi omnis estadipisci expedita at voluptas atque vitae autem.",
  contact_address: "Kollegievaenget 3 A311, Denmark Horsens, 8700",
  contact_address_array: ["Kollegievaenget 3 A311", "Denmark Horsens", "8700"],
  contact_email: "andreimain03@gmail.com",
  contact_number: "+45 50 36 58 21",
  footer_title:
    "Cras fermentum odio eu feugiat lide par naso tierra videa magnaderita valies",
};


