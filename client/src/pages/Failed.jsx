import { useNavigate } from "react-router-dom";
import successImg from "../../public/imagess/done.png";

export const Failed = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="container">
        <div className="success-failed-page">
          <img src={successImg} alt="" />
          <h2>Thank You</h2>
          <p>Payment failed.Please try again</p>
          <div>
            <button onClick={() => navigate("/")}>Go to Home</button>
          </div>
        </div>
      </section>
    </>
  );
};
