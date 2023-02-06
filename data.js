import { BiCalendar, BiPlusMedical } from "react-icons/bi";
import { TbAmbulance } from "react-icons/tb";
import { GiTripleNeedle } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin, FaHandHoldingMedical } from "react-icons/fa";
import { CiMedicalCase } from "react-icons/ci";

export const services = [
  {
    id: 1,
    icon: <BiPlusMedical />,
    name: "Emergency",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 2,
    icon: <TbAmbulance />,
    name: "Emergency",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 3,
    icon: <GiTripleNeedle />,
    name: "Medical Treatment",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
];

export const servicesPage = [
  {
    id: 1,
    icon: <BiPlusMedical />,
    name: "Diagnostics",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 2,
    icon: <TbAmbulance />,
    name: "Emergency",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 3,
    icon: <GiTripleNeedle />,
    name: "Medical Treatment",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 4,
    icon: <FaHandHoldingMedical />,
    name: "Emergency",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 5,
    icon: <CiMedicalCase />,
    name: "Surgery",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
  {
    id: 6,
    icon: <GiTripleNeedle />,
    name: "Medical Treatment",
    desc: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    button: "View More",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: require("./assets/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: require("./assets/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: require("./assets/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: require("./assets/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: require("./assets/avatar5.jpg"),
  },
];

export const news = [
  {
    id: 1,
    avatar: require("./assets/blog1.jpg"),
    smAvatar: require("./assets/avatar1.jpg"),
    name: "Diana Ayi",
    icon: <BiCalendar />,
    date: "19 july 2021",
    quote: "Dental Care for Women is very important",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 2,
    avatar: require("./assets/blog2.jpg"),
    smAvatar: require("./assets/avatar2.jpg"),
    name: "Daniel Vinyo",
    icon: <BiCalendar />,
    date: "19 july 2021",
    quote: "In this hospital there are special surgeon",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 3,
    avatar: require("./assets/blog3.jpg"),
    smAvatar: require("./assets/avatar3.jpg"),
    name: "Edem Quist",
    icon: <BiCalendar />,
    date: "19 july 2021",
    quote: "Why is Skin Surgeon Considered",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
];

export const blogs = [
  {
    id: 1,
    avatar: require("./assets/blog1.jpg"),
    smAvatar: require("./assets/avatar1.jpg"),
    name: "Diana Ayi",
    icon: <BiCalendar />,
    date: "19 july 2021",
    quote: "Dental Care for Women is very important",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 2,
    avatar: require("./assets/blog2.jpg"),
    smAvatar: require("./assets/avatar2.jpg"),
    name: "Daniel Vinyo",
    icon: <BiCalendar />,
    date: "19 july 2021",
    quote: "In this hospital there are special surgeon",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 3,
    avatar: require("./assets/blog3.jpg"),
    smAvatar: require("./assets/avatar3.jpg"),
    name: "Edem Quist",
    icon: <BiCalendar />,
    date: "19 july 2021",
    quote: "Why is Skin Surgeon Considered",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 4,
    avatar: require("./assets/blog4.jpg"),
    smAvatar: require("./assets/avatar4.jpg"),
    name: "Kalina",
    icon: <BiCalendar />,
    date: "18 july 2021",
    quote: "Understand Health Before You Regret",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 5,
    avatar: require("./assets/blog5.jpg"),
    smAvatar: require("./assets/avatar5.jpg"),
    name: "Michel",
    icon: <BiCalendar />,
    date: "17 july 2021",
    quote: "Health Will Be A Thing Of The Past And here",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 6,
    avatar: require("./assets/blog6.jpg"),
    smAvatar: require("./assets/avatar1.jpg"),
    name: "Peter Packer",
    icon: <BiCalendar />,
    date: "16 july 2021",
    quote: "Can you get a diflucan prescription online?",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 7,
    avatar: require("./assets/blog7.jpg"),
    smAvatar: require("./assets/avatar1.jpg"),
    name: "Sonar Moyna",
    icon: <BiCalendar />,
    date: "15 july 2021",
    quote: "Ten Gigantic Influences Of Health",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 8,
    avatar: require("./assets/blog8.jpg"),
    smAvatar: require("./assets/avatar2.jpg"),
    name: "Kalina",
    icon: <BiCalendar />,
    date: "14 july 2021",
    quote: "Why Is Skin Surgeon Considered Underrated",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
  {
    id: 9,
    avatar: require("./assets/blog9.jpg"),
    smAvatar: require("./assets/avatar4.jpg"),
    name: "Edem Quist",
    icon: <BiCalendar />,
    date: "13 july 2021",
    quote: "Everyone need to go Dentist regularly",
    button: "Read More",
    icon2: <IoIosArrowForward />,
  },
];

export const aboutInfo = [
  {
    number: 120,
    title: "Years With You",
    quote: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
  {
    number: 400,
    title: "Awards",
    quote: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
  {
    number: 250,
    title: "Doctors",
    quote: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
  {
    number: 800,
    title: "Satisfied Client",
    quote: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
];

export const doctors = [
  {
    id: 1,
    image: require("./assets/avatar1.jpg"),
    name: "Dr. Addition Smith",
    job: "Dentist",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 2,
    image: require("./assets/avatar2.jpg"),
    name: "Dr. Mahfuz Riad",
    job: "Chirpractor",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 3,
    image: require("./assets/avatar3.jpg"),
    name: "Dr. David Benjamin",
    job: "Cardiologist",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
];

export const team = [
  {
    id: 1,
    image: require("./assets/avatar1.jpg"),
    name: "Dr. Addition Smith",
    job: "Dentist",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 2,
    image: require("./assets/avatar2.jpg"),
    name: "Dr. Mahfuz Riad",
    job: "Chirpractor",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 3,
    image: require("./assets/avatar3.jpg"),
    name: "Dr. David Benjamin",
    job: "Cardiologist",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 4,
    image: require("./assets/avatar4.jpg"),
    name: "Dr. Addition Smith",
    job: "Dentist",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 5,
    image: require("./assets/avatar5.jpg"),
    name: "Dr. Mahfuz Riad",
    job: "Chirpractor",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
  {
    id: 6,
    image: require("./assets/avatar2.jpg"),
    name: "Dr. David Benjamin",
    job: "Cardiologist",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    icon1: <BsInstagram />,
    icon2: <FaLinkedin />,
    icon3: <AiOutlineTwitter />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How Doctors Can Ease Your Pain?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    question: "How Do I withdraw from a subject?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    question: "Understant Doctoe Before You Regret?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    question: "What Typs of system do you support?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    question: "We teach you how to feel better?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    question: "How can I contact you?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7,
    question: "How Doctors Can Ease Your Pain?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 8,
    question: "How do I withdraw from a subject?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 9,
    question: "What's a payment statment?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 10,
    question: "How can I conact you?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 11,
    question: "How do I withdraw from a subject?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 12,
    question: "How Doctors Can Ease Your Pain?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
