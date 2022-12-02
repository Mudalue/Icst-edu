import React, { useState, useEffect } from "react";
import Navbar from "../ui/organisms/Navbar";
import background from "../assets/home.png";
import { colors } from "../constant/colors";
import { style } from "./style";
import Button from "../ui/atoms/Button";
import { getRequest } from "../utils/api";
import { endpoints } from "../constant/endpoints";
import Card from "../ui/molecules/cards/general/Card";
import Carousel from "react-grid-carousel";
import Loader from "../ui/atoms/Loader";

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  //get featured courses
  const getFeaturedCourses = async () => {
    setShow(true);
    try {
      const response = await getRequest(endpoints.featured);
      if (response !== null) {
        setFeaturedCourses(response.data);
      } else {
        alert("server Error!! please reload");
      }
    } catch (error) {
      console.log(error);
      alert("server Error!!");
    }
    setShow(false);
  };

  //get category
  const getCategory = async () => {
    setShow(true);
    try {
      const response = await getRequest(endpoints.category);
      console.log(response);
      if (response !== null) {
        setCategory(response?.data);
      } else {
        alert("server Error!!");
      }
    } catch (error) {
      console.log(error);
      alert("server Error!!");
    }
    setShow(false);
  };
  console.log(category);
  useEffect(() => {
    getFeaturedCourses();
  }, []);
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-md-6 g-0">
            <img src={background} alt="bgImg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div
              style={style.container}
              className="animate__animated animate__fadeInRight"
            >
              <h4 style={style.header}>
                Accelerate your quest,
                <br /> learn anywhere,
                <br /> anytime
              </h4>
              <p style={style.text}>
                Acquire new knowledge and skills, train for
                <br /> certification diplomas and degrees from
                <br /> world-class instituitions at your
                <br /> own pace and space.
              </p>
              <div className="d-flex">
                <div>
                  <button
                    className="btn btn-outline-dark fw-bold"
                    style={style.navButton}
                  >
                    login
                  </button>
                </div>
                <div className="mx-2">
                  <Button text={"sign up"} color={colors.mint} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="d-flex justify-content-between"
              style={{ marginTop: 30 }}
            >
              <h5 style={style.subHeader}>Featured Courses</h5>
              <Button text={"see all courses >"} color={colors.mint} />
            </div>
          </div>
          {show ? (
            <Loader />
          ) : featuredCourses.length === 0 ? (
            <p className="text-danger">No data found!</p>
          ) : (
            featuredCourses.map((courses) => {
              return (
                <div className="col-md-3">
                  <Card
                    image={courses.card_image}
                    name={courses.name}
                    thumbnail={courses.thumbnail}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ marginTop: 30 }}>
              <h5 style={style.subHeader}>Category</h5>
            </div>
          </div>
          {show ? (
            <Loader />
          ) : category.length === 0 ? (
            <p className="text-center">No data found!</p>
          ) : (
            <Carousel cols={3} rows={1} gap={10} loop>
              {category.map((categories) => {
                return (
                  <Carousel.Item>
                    <div className="card" style={style.card}>
                      <div style={{ padding: "20px 10px 0px 10px" }}>
                        <h4 className="text-center text-light">
                          {categories.category}
                        </h4>
                        <p className="text-center text-light">Not available</p>
                      </div>

                      <div
                        className="d-flex justify-content-between p-4 bg-light"
                        style={{ borderRadius: 8 }}
                      >
                        <span>Category</span>
                        <span>Details</span>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          )}

          <div className="col-md-12">
            <div
              className="d-flex justify-content-end"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <Button text={"see all courses >"} color={colors.mint} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
