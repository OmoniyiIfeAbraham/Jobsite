import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function DeleteAccount() {
  return (
    <div>
      <Header page={"deleteAccount"} />
      <section className="clearfix job-bg delete-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Close account</li>
            </ol>
            <h2 className="title">Close Account</h2>
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
              <li>
                <a href="bookmark.html">Bookmark</a>
              </li>
              <li>
                <a href="applied-job.html">applied job</a>
              </li>
              <li className="active">
                <a href="delete-account.html">Close account</a>
              </li>
            </ul>
          </div>
          <div className="close-account text-center">
            <div className="delete-account section">
              <h2>Delete Your Account</h2>
              <h4>Are you sure, you want to delete your account?</h4>
              <a href="#" className="btn">
                Delete Account
              </a>
              <a href="#" className="btn cancle">
                Cancle
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DeleteAccount;
