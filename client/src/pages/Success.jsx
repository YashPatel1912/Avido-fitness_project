import { useNavigate } from "react-router-dom";
import successImg from "../../public/imagess/done.png";

export const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="container">
        <div className="success-failed-page">
          <img src={successImg} alt="" />
          <h2>Thank You </h2>
          <p>Payment Done successfully</p>
          <div>
            <button onClick={() => navigate("/")}>Go to Home</button>
          </div>
        </div>
      </section>
    </>
  );
};
