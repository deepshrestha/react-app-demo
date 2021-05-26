import React from "react";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/Home.css";
import Stories from "../components/Stories";
import PostsContainer from "../containers/PostsContainer";

const Home = () => {
  return (
    <div className="font-text">
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
      </div>
      <div className="container-fluid p-2" style={{ marginTop: "65px" }}>
        <div className="row">
          <div className="col-md-10 offset-1 box position-fixed">
            <div className="card">
              <img
                className="card-img-top"
                src="/src/images/img_avatar1.png"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Senior Manager</p>
                <a href="#" className="btn btn-sm btn-danger">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 offset-3">
            <div className="row">
              <div className="col-md-7">
                <div className="card">
                  <p className="card-header font-weight-bold">Create a post</p>
                  <div className="card-body">
                    <textarea
                      className="form-control form-rounded"
                      placeholder="How are you feeling today?"
                    />
                    <div className="text-right mt-2">
                      <div className="float-left">
                        <span className="badge badge-secondary mr-2">
                          <img src="/src/images/photo.png" />
                          &nbsp;Photo/Video
                        </span>
                        <span className="badge badge-secondary mr-2">
                          <img src="/src/images/tag.png" />
                          &nbsp;Tag Friends
                        </span>
                        <span className="badge badge-secondary mr-2">
                          <img src="/src/images/emotion.png" />
                          &nbsp;Feeling/Activity
                        </span>
                      </div>
                      <button className="pl-2 btn btn-sm btn-danger">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <PostsContainer />
                </div>
              </div>
              <div className="col-md-4 box">
                <Stories />
                <hr />
                <Advertisement />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
