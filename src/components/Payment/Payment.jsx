import React from "react";
import axios from "axios";
import Frontend from "./Frontend";

const Payment = ({ amount }) => {
  const email = localStorage.getItem("EMAIL");

  const handleOpenRazorpay = async (data) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/getkey")
    const options = {
      key: key,
      amount: data.amount,
      currency: data.currency,
      name: "GAHAN-AI",
      description: "payment",
      image: "https://gahanai.com/Images/logo_nobackground.png",
      order_id: data.id,
      handler: function (response) {
        axios
          .post("http://localhost:5000/verify", { response: response })
          .then((res) => {
            if(res.data.code===200)
            {
              console.log("payment done")
            }  
          })
          .catch((err) => {
            console.log("error :" + err);
          });
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const handlePayment = (amount) => {
    const _data = { amount: amount, email: email};
    axios
      .post("http://www.localhost:5000/orders", _data)
      .then((res) => {
        if (res.data.code === 404) {
          alert("YOUR PAYMENT alredy done");
        }else{
        handleOpenRazorpay(res.data);}
      })
      .catch((err) => {
        console.log("error in fronten while order creation" + err);
      });
  };

  return <Frontend event={() => handlePayment(amount)} />;
};

export default Payment;
