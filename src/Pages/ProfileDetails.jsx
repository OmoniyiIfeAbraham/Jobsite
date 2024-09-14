import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ProfileDetails() {
  return (
    <div>
      <Header page={"profileDetails"} />
      <section class="clearfix job-bg  ad-profile-page">
        <div class="container">
          <div class="breadcrumb-section">
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Profile Details</li>
            </ol>
            <h2 class="title">My Profile</h2>
          </div>
          <div class="job-profile section">
            <div class="user-profile">
              <div class="user-images">
                <img
                  src="images/user.jpg"
                  alt="User Images"
                  class="img-fluid"
                />
              </div>
              <div class="user">
                <h2>
                  Hello, <a href="#">Jhon Doe</a>
                </h2>
                <h5>
                  You last logged in at: 10-01-2017 6:40 AM [ USA time (GMT +
                  6:00hrs)]
                </h5>
              </div>
              <div class="favorites-user">
                <div class="my-ads">
                  <a href="applied-job.html">
                    29<small>Apply Job</small>
                  </a>
                </div>
                <div class="favorites">
                  <a href="bookmark.html">
                    18<small>Favorites</small>
                  </a>
                </div>
              </div>
            </div>
            <ul class="user-menu">
              <li>
                <a href="profile.html">Account Info </a>
              </li>
              <li>
                <a href="resume.html">View Resume</a>
              </li>
              <li>
                <a href="edit-resume.html">Edit Resume</a>
              </li>
              <li class="active">
                <a href="job-profile-details.html">Profile Details</a>
              </li>
              <li>
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
          <div class="profile job-profile">
            <div class="user-pro-section">
              <div class="profile-details section">
                <h2>Profile Details</h2>
                <form action="#">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Jhon Doe"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email ID</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="jhondoe@mail.com"
                    />
                  </div>
                  <div class="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="+213 1234 56789"
                    />
                  </div>
                  <div class="form-group">
                    <label>Your City</label>
                    <select class="form-control">
                      <option value="#">Los Angeles, USA</option>
                      <option value="#">Dhaka, BD</option>
                      <option value="#">Shanghai</option>
                      <option value="#">Karachi</option>
                      <option value="#">Beijing</option>
                      <option value="#">Lagos</option>
                      <option value="#">Delhi</option>
                      <option value="#">Tianjin</option>
                      <option value="#">Rio de Janeiro</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>You are a</label>
                    <select class="form-control">
                      <option value="#">Employer</option>
                      <option value="#">Employee</option>
                    </select>
                  </div>
                </form>
              </div>

              <div class="change-password section">
                <h2>Change password</h2>

                <div class="form-group">
                  <label>Old Password</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label>New password</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Confirm password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>

              <div class="preferences-settings section">
                <h2>Preferences Settings</h2>

                <div class="checkbox">
                  <label>
                    <input type="checkbox" name="logged" />
                    Comments are enabled on my Resume
                  </label>
                  <label>
                    <input type="checkbox" name="receive" />I want to receive
                    newsletter.
                  </label>
                  <label>
                    <input type="checkbox" name="want" />I want to receive
                    advice on portfolio
                  </label>
                </div>
                <div class="buttons">
                  <a href="#" class="btn">
                    Update Profile
                  </a>
                  <a href="#" class="btn cancle">
                    Cancle
                  </a>
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

export default ProfileDetails;
