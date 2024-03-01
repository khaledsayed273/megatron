import Header from "./components/Home/Header";
import Discover from "./components/Home/Discover";
import Projects from "../shared/projects/Project";
import GlobalCustomers from "./components/Home/GlobalCustomers";
import Blogs from "./components/Home/Blogs";
import Services from "./components/Home/Services";

import img from "../../../public/images/download.jpg"
import img2 from "../../../public/images/8464a2ee2e9e7405ca2ba0a7f097f92d.jpg"
import img3 from "../../../public/images/345ba3a36dabf573a2bc6abca60fc5ee.jpg"
import API from "@/api/API";



export default async function Home() {

  const data = [
    {
      id: 1,
      title: "vintage platform",
      about: "The Future of AI in Healthcare: Transforming Patient Care",
      img: img
    },
    {
      id: 2,
      title: "shahin application",
      about: "The Future of AI in Healthcare: Transforming Patient Care",
      img: img2
    },
    {
      id: 3,
      title: "megatron web",
      about: "The Future of AI in Healthcare: Transforming Patient Care",
      img: img3
    }
  ]


  return (
    <main  className="container mx-auto px-5 my-10">
      <Header />
      <Discover />
      <Projects data={data} />
      <GlobalCustomers />
      <Blogs />
      <Services />
    </main>
  );
}

