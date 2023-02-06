import React, { useState } from "react";
import Logo from "../../assets/download.png";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavShowing, setisNavShowing] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setisNavShowing((prev) => !prev)}
          >
            {isNavShowing ? (
              <MdOutlineClose className="close" />
            ) : (
              <span className=" navbar-toggler-icon"></span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" links navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="active nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="pages nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-links dropdown-menu">
                  <li>
                    <Link className="link dropdown-item" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className=" link dropdown-item" to="/team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link className=" link dropdown-item" to="/faq's">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link className=" link dropdown-item" to="/booking">
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link className=" link dropdown-item" to="/error">
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link className="link dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pages nav-item dropdown">
                <Link
                  className="nav-link "
                  to="/servicespage"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-links dropdown-menu">
                  <li>
                    <Link className=" link dropdown-item" to="/servicespage">
                      Service
                    </Link>
                  </li>
                  <li>
                    <a className=" link dropdown-item" href="#/">
                      Service Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pages nav-item dropdown">
                <Link
                  className="nav-link "
                  to="/blogpage"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </Link>
                <ul className="dropdown-links dropdown-menu">
                  <li>
                    <Link className="link dropdown-item" to="/blogpage">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a className="link dropdown-item" href="#/">
                      BLog Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="icons">
              <a href="#/">
                <VscSearch className="search" />
              </a>
              <a href="#/" className="numlink">
                <FaPhoneAlt className="phone" />
                (+01) 999 888 777
              </a>
            </div>
            <div>
              <Link to="/contact" className="contact">
                contact <IoIosArrowForward className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   const [isNavShowing, setisNavShowing] = useState(false);
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={Logo} alt="Logo Imag" />
//         </div>
//         <ul className="links">
//           <li>
//             <a href="#/" className="active">
//               Home
//             </a>
//           </li>
//           <li className="mlinks">
//             <a href="#/">
//               Pages <BsPlus />
//             </a>
//             <div className="pages">
//               <ul>
//                 <li>
//                   <a href="/#">About Us</a>
//                 </li>
//                 <li>
//                   <a href="/#">Our Team</a>
//                 </li>
//                 <li>
//                   <a href="/#">FAQ's</a>
//                 </li>
//                 <li>
//                   <a href="/#">Booking</a>
//                 </li>
//                 <li>
//                   <a href="/#">Error 404</a>
//                 </li>
//                 <li>
//                   <a href="/#">Login</a>
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li className="mlinks">
//             <a href="#/">
//               Services <BsPlus />
//             </a>
//             <div className="pages service">
//               <ul>
//                 <li>
//                   <a href="/#">Service</a>
//                 </li>
//                 <li>
//                   <a href="/#">Service Details</a>
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li className="mlinks">
//             <a href="#/">
//               Blog <BsPlus />
//             </a>
//             <div className="pages blog">
//               <ul>
//                 <li>
//                   <a href="/#">Blog</a>
//                 </li>
//                 <li>
//                   <a href="/#">Blog Details</a>
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <a href="#/">Contact Us</a>
//           </li>
//           <li className="media">
//             <a href="#/">
//               <VscSearch className="search" />
//             </a>
//           </li>
//           <li className="media">
//             <a href="#/">
//               {" "}
//               <FaPhoneAlt className="phone" />
//               (+01) 999 888 777
//             </a>
//           </li>
//           <li className="contact media">
//             <a href="#/" className="contact-button">
//               Contact Us
//             </a>
//             <a href="#/" className="div-arrow">
//               <IoIosArrowForward className="arrow" />
//             </a>
//           </li>
//         </ul>
//         <button
//           className="toggler-button"
//           onClick={() => setisNavShowing((prev) => !prev)}
//         >
//           {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
