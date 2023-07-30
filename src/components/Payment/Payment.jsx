import React from "react";
import "./Payment.css";
import axios from "axios";

const Payment = ({ amount }) => {
  const handleOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_JEWW6lKdPr0kPa",
      amount: data.amount,
      currency: data.currency,
      name: "GAHAN-AI",
      description: "payment",
      image: 'https://gahanai.com/Images/logo_nobackground.png',
      order_id: data.id,
      handler: function (response) {
        axios.post('http://localhost:5000/verify',{response:response})
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log("error :"+err)})
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios
      .post("http://www.localhost:5000/orders", _data)
      .then((res) => {
        console.log(res.data);
        handleOpenRazorpay(res.data);
      })
      .catch((err) => {
        console.log("error in axios" + err);
      });
  };

  return (
    <div>
      PAYMENT
      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ADAS</h5>
                <h5>
                  <div class="price">
                    <sub class="currency">Rs.</sub>
                    35,000{" "}
                    <del>
                      <i class="fas fa-rupee-sign" aria-hidden="true"></i>
                      ₹50,000
                    </del>
                    <sup class="dis">30% off</sup>
                  </div>
                </h5>
                <p class="card-text">
                  Introduction to Vehicle Architecture And Self-Driving Car ,
                  Components in Autonomous Driving , ADAS/AV Software
                  Development Cycle Setup of the systems and coding Environment
                  ,Introduction to CARLA Simulator , Camera Sensor ,Lidar Sensor
                  , RADAR Sensor ,Sensor Setup with ROS on Jetson Nano Vehicle
                  Dynamics , Dynamic Bicycle Model, Dynamics of a Rigid Body
                  ,Vehicle Control Odometry, SLAM, and Localization
                  ,Localization ,NVIDIA Jetson Road and Lane Detection ,Object
                  Detection ,3D Object Detection ,Object Tracking E2E Perception
                  , Decision Making and Planning , Autonomous Navigation with
                  CARLA Simulato ,Preparing Vehicle for Data Acquisition and
                  Testing ,Data recording tools and Annotation Pipelines
                  ,Adaptive Cruise Control
                </p>
                <div className="btndiv">
                  <button
                    onClick={() => handlePayment(amount)}
                    class="btn btn-primary"
                  >
                    Buy Course
                  </button>
                  <button href="./" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">SOFTWARE-DEFINED VEHICLE DEVELOPMENT</h5>
                <h5>
                  <div class="price">
                    <sub class="currency">Rs.</sub>
                    35,000{" "}
                    <del>
                      <i class="fas fa-rupee-sign" aria-hidden="true"></i>
                      ₹50,000
                    </del>
                    <sup class="dis">30% off</sup>
                  </div>
                </h5>
                <p class="card-text">
                  Introduction to Vehicle Architecture And Self-Driving Car ,
                  Components in Autonomous Driving , ADAS/AV Software
                  Development Cycle Setup of the systems and coding Environment
                  ,Introduction to CARLA Simulator , Camera Sensor ,Lidar Sensor
                  , RADAR Sensor ,Sensor Setup with ROS on Jetson Nano Vehicle
                  Dynamics , Dynamic Bicycle Model, Dynamics of a Rigid Body
                  ,Vehicle Control Odometry, SLAM, and Localization
                  ,Localization ,NVIDIA Jetson Road and Lane Detection ,Object
                  Detection ,3D Object Detection ,Object Tracking E2E Perception
                  , Decision Making and Planning , Autonomous Navigation with
                  CARLA Simulato ,Preparing Vehicle for Data Acquisition and
                  Testing ,Data recording tools and Annotation Pipelines
                  ,Adaptive Cruise Control
                </p>
                <div className="btndiv">
                  <button class="btn btn-primary">Buy Course</button>
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
