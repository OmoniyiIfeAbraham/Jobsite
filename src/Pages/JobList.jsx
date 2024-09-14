import Header from "./../Components/Header.jsx";
import Footer from "./../Components/Footer.jsx";

function JobList() {
  return (
    <div>
      <Header page="JobList" />
      <section class="job-bg page job-list-page">
        <div class="container">
          <div class="breadcrumb-section">
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Engineer/Architects</li>
            </ol>
            <h2 class="title">Software Engineer</h2>
          </div>
          <div class="banner-form banner-form-full job-list-form">
            <form action="#" class="clearfix">
              <div class="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span class="change-text">Job Category</span>{" "}
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu category-change">
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Software Engineer</a>
                  </li>
                  <li>
                    <a href="#">Program Development</a>
                  </li>
                  <li>
                    <a href="#">Project Manager</a>
                  </li>
                  <li>
                    <a href="#">Graphics Designer</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown category-dropdown language-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span class="change-text">Job Location</span>{" "}
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu category-change language-change">
                  <li>
                    <a href="#">Location 1</a>
                  </li>
                  <li>
                    <a href="#">Location 2</a>
                  </li>
                  <li>
                    <a href="#">Location 3</a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Type your key word"
              />
              <button type="submit" class="btn btn-primary" value="Search">
                Search
              </button>
            </form>
          </div>
          <div class="category-info">
            <div class="row">
              <div class="col-lg-3 col-md-4">
                <div class="accordion">
                  <div class="panel-group" id="tr-accordion">
                    <div class="card panel-faq">
                      <div class="card-header">
                        <button
                          data-toggle="collapse"
                          data-target="#accordion-one"
                          aria-expanded="true"
                          aria-controls="accordion-one"
                        >
                          Categories
                        </button>
                      </div>
                      <div
                        id="accordion-one"
                        class="collapse show"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <h5>
                            <a href="categories-main.html">
                              <i class="fa fa-caret-down"></i> All Categories
                            </a>
                          </h5>
                          <a href="#">
                            <i class="icofont icofont-man-in-glasses"></i>
                            Engineer/Architects
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Software <span>(129)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Architecture <span>(8342)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                UI & UX Designer <span>(782)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Telecommunication <span>(5247)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Civil Engineer <span>(634)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Chemical Engineer <span>(453)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Program Development <span>(7986)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Mechanical Engineer <span>(742)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Industrial Engineer <span>(149)</span>
                              </a>
                            </li>
                          </ul>
                          <div class="see-more">
                            <button type="button" class="show-more one">
                              <i
                                class="fa fa-plus-square-o"
                                aria-hidden="true"
                              ></i>
                              See More
                            </button>
                            <ul class="more-category one">
                              <li>
                                <a href="#">
                                  Fron end developer<span>(289)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Back end developer<span>(5402)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  IT Department Manager<span>(3829)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  QA Department Manager<span>(352)</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card panel-faq">
                      <div class="card-header">
                        <button
                          class="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-two"
                          aria-expanded="true"
                          aria-controls="accordion-two"
                        >
                          Date Posted
                        </button>
                      </div>
                      <div
                        id="accordion-two"
                        class="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <label for="today">
                            <input type="checkbox" name="today" id="today" />{" "}
                            Today
                          </label>
                          <label for="7-days">
                            <input type="checkbox" name="7-days" id="7-days" />{" "}
                            7 days
                          </label>
                          <label for="30-days">
                            <input
                              type="checkbox"
                              name="30-days"
                              id="30-days"
                            />{" "}
                            30 days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="card  panel-faq">
                      <div class="card-header">
                        <button
                          class="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-three"
                          aria-expanded="true"
                          aria-controls="accordion-three"
                        >
                          Salary Range
                        </button>
                      </div>
                      <div
                        id="accordion-three"
                        class="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <div class="price-range">
                            <div class="price">
                              <span>
                                $100 - <strong>$700</strong>
                              </span>
                              <div class="dropdown category-dropdown pull-right">
                                <a data-toggle="dropdown" href="#">
                                  <span class="change-text">USD</span>
                                  <i class="fa fa-caret-square-o-down"></i>
                                </a>
                                <ul class="dropdown-menu category-change">
                                  <li>
                                    <a href="#">USD</a>
                                  </li>
                                  <li>
                                    <a href="#">AUD</a>
                                  </li>
                                  <li>
                                    <a href="#">EUR</a>
                                  </li>
                                  <li>
                                    <a href="#">GBP</a>
                                  </li>
                                  <li>
                                    <a href="#">JPY</a>
                                  </li>
                                </ul>
                              </div>
                              <input
                                type="text"
                                value
                                data-slider-min="0"
                                data-slider-max="700"
                                data-slider-step="5"
                                data-slider-value="[250,450]"
                                id="price"
                              />
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card panel-faq">
                      <div class="card-header">
                        <button
                          class="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-four"
                          aria-expanded="true"
                          aria-controls="accordion-four"
                        >
                          Employment Type
                        </button>
                      </div>
                      <div
                        id="accordion-four"
                        class="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <label for="full-time">
                            <input
                              type="checkbox"
                              name="full-time"
                              id="full-time"
                            />{" "}
                            Full Time
                          </label>
                          <label for="part-time">
                            <input
                              type="checkbox"
                              name="part-time"
                              id="part-time"
                            />{" "}
                            Part Time
                          </label>
                          <label for="contractor">
                            <input
                              type="checkbox"
                              name="contractor"
                              id="contractor"
                            />{" "}
                            Contractor
                          </label>
                          <label for="intern">
                            <input type="checkbox" name="intern" id="intern" />{" "}
                            Intern
                          </label>
                          <label for="seasonal">
                            <input
                              type="checkbox"
                              name="seasonal"
                              id="seasonal"
                            />{" "}
                            Seasonal / Temp
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="card panel-faq">
                      <div class="card-header">
                        <button
                          class="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-five"
                          aria-expanded="true"
                          aria-controls="accordion-five"
                        >
                          Experience Level
                        </button>
                      </div>
                      <div
                        id="accordion-five"
                        class="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <label for="training">
                            <input
                              type="checkbox"
                              name="training"
                              id="training"
                            />{" "}
                            Training
                          </label>
                          <label for="entry-level">
                            <input
                              type="checkbox"
                              name="entry-level"
                              id="entry-level"
                            />{" "}
                            Entry Level
                          </label>
                          <label for="mid-senior">
                            <input
                              type="checkbox"
                              name="mid-senior"
                              id="mid-senior"
                            />{" "}
                            Mid-Senior Level
                          </label>
                          <label for="top-level">
                            <input
                              type="checkbox"
                              name="top-level"
                              id="top-level"
                            />{" "}
                            Top Level
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="card panel-faq">
                      <div class="card-header">
                        <button
                          class="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-six"
                          aria-expanded="true"
                          aria-controls="accordion-six"
                        >
                          Company
                        </button>
                      </div>
                      <div
                        id="accordion-six"
                        class="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <input
                            type="text"
                            placeholder="Search Company"
                            class="form-control"
                          />
                          <label for="apple">
                            <input type="checkbox" name="apple" id="apple" />{" "}
                            Apple
                          </label>
                          <label for="dropbox">
                            <input
                              type="checkbox"
                              name="dropbox"
                              id="dropbox"
                            />{" "}
                            Dropbox
                          </label>
                          <label for="micromax">
                            <input
                              type="checkbox"
                              name="micromax"
                              id="micromax"
                            />{" "}
                            Micromax
                          </label>
                          <label for="nokia">
                            <input type="checkbox" name="nokia" id="nokia" />{" "}
                            Nokia
                          </label>
                          <label for="microsoft">
                            <input
                              type="checkbox"
                              name="microsoft"
                              id="microsoft"
                            />{" "}
                            Microsoft
                          </label>
                          <label for="samsung">
                            <input
                              type="checkbox"
                              name="samsung"
                              id="samsung"
                            />{" "}
                            Samsung
                          </label>
                          <div class="see-more">
                            <button type="button" class="show-more two">
                              <i
                                class="fa fa-plus-square-o"
                                aria-hidden="true"
                              ></i>
                              See More
                            </button>
                            <div class="more-category two">
                              <label for="blackBerry">
                                <input
                                  type="checkbox"
                                  name="blackBerry"
                                  id="blackBerry"
                                />
                                BlackBerry
                              </label>
                              <label for="motorola">
                                <input
                                  type="checkbox"
                                  name="motorola"
                                  id="motorola"
                                />
                                Motorola
                              </label>
                              <label for="lenovo">
                                <input
                                  type="checkbox"
                                  name="lenovo"
                                  id="lenovo"
                                />
                                Lenovo
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card panel-faq">
                      <div class="card-header">
                        <button
                          class="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-seven"
                          aria-expanded="true"
                          aria-controls="accordion-seven"
                        >
                          Location
                        </button>
                      </div>
                      <div
                        id="accordion-seven"
                        class="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div class="panel-body">
                          <input
                            type="text"
                            placeholder="Search Location"
                            class="form-control"
                          />
                          <label for="angeles">
                            <input
                              type="checkbox"
                              name="angeles"
                              id="angeles"
                            />{" "}
                            Los Angeles, CA
                          </label>
                          <label for="kingdom">
                            <input
                              type="checkbox"
                              name="kingdom"
                              id="kingdom"
                            />{" "}
                            United Kingdom
                          </label>
                          <label for="states">
                            <input type="checkbox" name="states" id="states" />{" "}
                            United States
                          </label>
                          <label for="columbia">
                            <input
                              type="checkbox"
                              name="columbia"
                              id="columbia"
                            />{" "}
                            British Columbia
                          </label>
                          <label for="australia">
                            <input
                              type="checkbox"
                              name="australia"
                              id="australia"
                            />{" "}
                            Australia
                          </label>
                          <label for="germany">
                            <input
                              type="checkbox"
                              name="germany"
                              id="germany"
                            />{" "}
                            Germany
                          </label>
                          <div class="see-more">
                            <button type="button" class="show-more three">
                              <i
                                class="fa fa-plus-square-o"
                                aria-hidden="true"
                              ></i>
                              See More
                            </button>
                            <div class="more-category three">
                              <label for="belgium">
                                <input
                                  type="checkbox"
                                  name="belgium"
                                  id="belgium"
                                />
                                Belgium
                              </label>
                              <label for="brazil">
                                <input
                                  type="checkbox"
                                  name="brazil"
                                  id="brazil"
                                />
                                Brazil
                              </label>
                              <label for="denmark">
                                <input
                                  type="checkbox"
                                  name="denmark"
                                  id="denmark"
                                />
                                Denmark
                              </label>
                              <label for="indonesia">
                                <input
                                  type="checkbox"
                                  name="indonesia"
                                  id="indonesia"
                                />
                                Indonesia
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8 col-lg-7">
                <div class="section job-list-item">
                  <div class="featured-top clearfix">
                    <h4>Showing 1-25 of 65,712 ads</h4>
                    <div class="dropdown pull-right">
                      <div class="dropdown category-dropdown">
                        <h5>Sort by:</h5>
                        <a data-toggle="dropdown" href="#">
                          <span class="change-text">Most Relevant</span>
                          <i class="fa fa-caret-square-o-down"></i>
                        </a>
                        <ul class="dropdown-menu category-change">
                          <li>
                            <a href="#">Most Relevant</a>
                          </li>
                          <li>
                            <a href="#">Most Popular</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/1.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Project Manager
                          </a>{" "}
                          @ <a href="#">Dominos Pizza</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/2.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Graphics Designer
                          </a>{" "}
                          @ <a href="#">AOK Security</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/4.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            CTO
                          </a>{" "}
                          @ <a href="#">Volja Events & Entertainment</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/7.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Industrial Manager
                          </a>{" "}
                          @ <a href="#">Total Gas</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/8.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Software Engineer
                          </a>{" "}
                          @ <a href="#">Dell</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/9.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Human Resource Manager
                          </a>{" "}
                          @ <a href="#">Acrobat</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/10.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Program Development
                          </a>{" "}
                          @ <a href="#">Adidus</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ad-section text-center">
                    <a href="#">
                      <img
                        src="images/ads/3.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/11.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            CTO
                          </a>{" "}
                          @ <a href="#">IBM</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/12.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Human Resource Manager
                          </a>{" "}
                          @ <a href="#">BP</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/13.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Industrial Manager
                          </a>{" "}
                          @ <a href="#">SaraLee</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/14.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Software Engineer
                          </a>{" "}
                          @ <a href="#">Daman</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/15.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Program Development
                          </a>{" "}
                          @ <a href="#">Helix</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/16.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            CTO
                          </a>{" "}
                          @ <a href="#">Dutrigo</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/17.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Software Engineer
                          </a>{" "}
                          @ <a href="#">Costa Rica</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-ad-item">
                    <div class="item-info">
                      <div class="item-image-box">
                        <div class="item-image">
                          <a href="job-details.html">
                            <img
                              src="images/job/18.png"
                              alt="Image"
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="ad-info">
                        <span>
                          <a href="job-details.html" class="title">
                            Program Development
                          </a>{" "}
                          @ <a href="#">HSBC</a>
                        </span>
                        <div class="ad-meta">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                Full Time
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-money" aria-hidden="true"></i>
                                $25,000 - $35,000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-center">
                    <ul class="pagination ">
                      <li>
                        <a href="#">
                          <i class="fa fa-chevron-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li class="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a>...</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-2 d-none d-lg-block">
                <div class="advertisement text-center">
                  <a href="#">
                    <img src="images/ads/1.jpg" alt class="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="something-sell" class="clearfix parallax-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="title">
                Add your resume and let your next job find you.
              </h2>
              <h4>
                Post your Resume for free on <a href="#">Jobs.com</a>
              </h4>
              <a href="post-resume.html" class="btn btn-primary">
                Add Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JobList;