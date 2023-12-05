import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        "agriculture",
        "animal",
        "beauty",
        "education",
        "electronic",
        "food",
        "furnishing",
        "hardware",
        "liquor/beverages",
        "manufacturing",
        "medical/health",
        "services",
        "sports",
        "technology",
        "vehicles",
      ],
    };
  }
  render() {
    const elements = this.state.arr.map((item) => (
      <option value={item} key={item.toUpperCase(

      )}>
        {item}
      </option>
    ));
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#fcdf03" }}
        >
          <div className="container-fluid">
            <select
              className="form-select form-select-lg "
              aria-label=".form-select-lg example"
              name="selectCoin"
              style={{ width: "fit-content" }}
              onChange={this.props.handle_Submit}
            >
              {elements}
            </select>

            <a
              className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              href="/"
            >
              Shark Tank India Analsis.
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
