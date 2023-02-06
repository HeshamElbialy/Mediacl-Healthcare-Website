import { Link } from "react-router-dom";
import PageHead from "../../components/PageHead";
import { AiFillHome } from "react-icons/ai";
import "./error.css";

const Error = () => {
  return (
    <section className="error">
      <PageHead title=" Page Not Found">
        <h6>
          <a href="/">
            <AiFillHome />
            Home
          </a>{" "}
          / Page Not Found
        </h6>
      </PageHead>
      <div className="error-container text-center">
        <h1>
          4 <span></span> 4
        </h1>
        <h3>The Page you were looking for, couldn't be found.</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
