import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function BookMark() {
  return (
    <div>
      <Header page={"bookmark"} />
      <section className=" job-bg page  ad-profile-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Bookmark</li>
            </ol>
            <h2 className="title">Bookmark</h2>
          </div>
          <div className="job-profile section">
            <div className="user-profile">
              <div className="user-images">
                <img
                  src="images/user.jpg"
                  alt="User Images"
                  className="img-fluid"
                />
              </div>
              <div className="user">
                <h2>
                  Hello, <a href="#">Jhon Doe</a>
                </h2>
                <h5>
                  You last logged in at: 10-01-2017 6:40 AM [ USA time (GMT +
                  6:00hrs)]
                </h5>
              </div>
              <div className="favorites-user">
                <div className="my-ads">
                  <a href="applied-job.html">
                    29<small>Apply Job</small>
                  </a>
                </div>
                <div className="favorites">
                  <a href="bookmark.html">
                    18<small>Favorites</small>
                  </a>
                </div>
              </div>
            </div>
            <ul className="user-menu">
              <li>
                <a href="profile.html">Account Info </a>
              </li>
              <li>
                <a href="resume.html">View Resume</a>
              </li>
              <li>
                <a href="edit-resume.html">Edit Resume</a>
              </li>
              <li>
                <a href="profile-details.html">Profile Details</a>
              </li>
              <li className="active">
                <a href="bookmark.html">Bookmark</a>
              </li>
              <li>
                <a href="applied-job.html">applied job</a>
              </li>
              <li>
                <a href="delete-account.html">Close account</a>
              </li>
            </ul>
          </div>
          <div className="section trending-ads latest-jobs-ads">
            <h4>Bookmark</h4>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/3.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      CTO
                    </a>{" "}
                    @ <a href="#">Volja Events &amp; Entertainment</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Project Manager
                    </a>{" "}
                    @ <a href="#">Dominos Pizza</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Graphics Designer
                    </a>{" "}
                    @ <a href="#">AOK Security</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/4.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Human Resource Manager
                    </a>{" "}
                    @ <a href="#">Dropbox Inc</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/3.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      CTO
                    </a>{" "}
                    @ <a href="#">Volja Events &amp; Entertainment</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Project Manager
                    </a>{" "}
                    @ <a href="#">Dominos Pizza</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Graphics Designer
                    </a>{" "}
                    @ <a href="#">AOK Security</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/4.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Human Resource Manager
                    </a>{" "}
                    @ <a href="#">Dropbox Inc</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>San
                          Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>Full
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>$25,000
                          - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>HR/Org.
                          Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BookMark;
