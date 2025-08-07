// // import logo from "../../public/images/fitness-logo.png";
// import { FaAngleDoubleLeft } from "react-icons/fa";
// import FitnessLogo from "/public/imagess/fitness-logo.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../store/token";

// import { loadStripe } from "@stripe/stripe-js";

// export const Payment = () => {
//   const { memebership } = useAuth();

//   // const [paymentData, setPaymentData] = useState({
//   //   cardNumber: "",
//   //   expiry: "",
//   //   cvv: "",
//   //   name: "",
//   // });

//   // const handleOnChangeData = (e) => {
//   //   let name = e.target.name;
//   //   let value = e.target.value;

//   //   setPaymentData({
//   //     ...paymentData,
//   //     [name]: value,
//   //   });
//   // };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/check-out", {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(memebership),
//       });

//       const session = await response.json();
//       console.log(session, "dd");

//       const stripe = await stripeKey;
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (result.error) {
//         console.log(result.error);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <>
//       <section className="container">
//         <div className="payment-section">
//           <div className="payment-left">
//             <div className="payment-logo">
//               <img src={FitnessLogo} alt="" />
//             </div>
//             <div className="payment-total">
//               <div className="payabal">
//                 <h2>Payable Now</h2>
//               </div>
//               <div className="sub-total">
//                 <p>Sub Total</p>
//                 <p></p>
//               </div>
//             </div>
//           </div>
//           <div className="payment-right">
//             <div className="back-btn">
//               <NavLink to={-1}>
//                 <FaAngleDoubleLeft />
//                 <p>Back</p>
//               </NavLink>
//             </div>

//             <div className="payment-form">
//               <form action="">
//                 <div className="cards-details">
//                   <div>
//                     <label htmlFor="cardNumber">Card Number : </label>
//                     <input
//                       type="number"
//                       id="cardNumber"
//                       name="cardNumber"
//                       placeholder="Enter Card Number"
//                       value={paymentData.cardNumber}
//                       onChange={(e) => handleOnChangeData(e)}
//                     />
//                   </div>
//                   <div className="extra-details">
//                     <div>
//                       <label htmlFor="expiry">Expiry : </label>
//                       <input
//                         type="date"
//                         id="expiry"
//                         name="expiry"
//                         value={paymentData.expiry}
//                         onChange={(e) => handleOnChangeData(e)}
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="cvv">CVV : </label>
//                       <input
//                         type="number"
//                         id="cvv"
//                         name="cvv"
//                         placeholder="Enter CVV "
//                         value={paymentData.cvv}
//                         onChange={(e) => handleOnChangeData(e)}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="name">Name on card : </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Enter name as on card"
//                       value={paymentData.name}
//                       onChange={(e) => handleOnChangeData(e)}
//                     />
//                   </div>
//                 </div>
//                 <div className="payment-success">
//                   <button onClick={handleFormSubmit} type="submit">
//                     {" "}
//                     PROCEED{" "}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
