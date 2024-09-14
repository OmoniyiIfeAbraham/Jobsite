import { useParams } from "react-router-dom";

function Header({ page }) {
  return (
    <div>
      <header id="header" class="clearfix">
        <nav class="navbar navbar-default navbar-expand-lg">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="fa fa-align-justify"></i>
              </span>
            </button>
            <a class="navbar-brand" href="/">
              <img class="img-fluid" src="images/logo.png" alt="Logo" />
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="nav navbar-nav">
                <li class={page == "Home" ? "active" : null}>
                  <a href="/">Home</a>
                </li>
                <li class={page == "JobList" ? "active" : null}>
                  <a href="/job-list">Job list</a>
                </li>
                <li class={page == "Details" ? "active" : null}>
                  <a href="/job-details">Job Details</a>
                </li>
                <li class={page == "Resume" ? "active" : null}>
                  <a href="/resume">Resume</a>
                </li>
                <li
                  class={
                    page == "profile" ||
                    "postResume" ||
                    "post" ||
                    "editResume" ||
                    "profileDetails" ||
                    "bookmark" ||
                    "appliedJob" ||
                    "deleteAccount" ||
                    "signup" ||
                    "signin"
                      ? "dropdown active"
                      : "dropdown"
                  }
                >
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages<span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class={page == "profile" ? "active" : null}>
                      <a href="/profile">Profile</a>
                    </li>
                    <li class={page == "postResume" ? "active" : null}>
                      <a href="/post-resume">Post Resume</a>
                    </li>
                    <li class={page == "post" ? "active" : null}>
                      <a href="/job-post">Job Post</a>
                    </li>
                    <li class={page == "editResume" ? "active" : null}>
                      <a href="edit-resume.html">Edit Resume</a>
                    </li>
                    <li class={page == "profileDetails" ? "active" : null}>
                      <a href="profile-details.html">profile Details</a>
                    </li>
                    <li class={page == "bookmark" ? "active" : null}>
                      <a href="bookmark.html">Bookmark</a>
                    </li>
                    <li class={page == "appliedJob" ? "active" : null}>
                      <a href="applied-job.html">Applied Job</a>
                    </li>
                    <li class={page == "deleteAccount" ? "active" : null}>
                      <a href="delete-account.html">Close Account</a>
                    </li>
                    <li class={page == "signup" ? "active" : null}>
                      <a href="signup.html">Job Signup</a>
                    </li>
                    <li class={page == "signin" ? "active" : null}>
                      <a href="signin.html">Job Signin</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="nav-right">
              <ul class="sign-in">
                <li>
                  <i class="fa fa-user"></i>
                </li>
                <li>
                  <a href="signin.html">Sign In</a>
                </li>
                <li>
                  <a href="signup.html">Register</a>
                </li>
              </ul>
              <a href="post.html" class="btn">
                Post Your Job
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
