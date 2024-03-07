import Header from "./components/Home/Header";
import Discover from "./components/Home/Discover";
import Projects from "../shared/projects/Project";
import GlobalCustomers from "./components/Home/GlobalCustomers";
import Blogs from "./components/Home/Blogs";
import Services from "./components/Home/Services";


import API from "@/api/API";
import { getDictionary } from "./dictionaries";

async function getData(lang) {
  const res = await API.get(`/projects/latest/project`, {
      headers: { "X-localization": lang }
  })
  return res
}

export const revalidate = +process.env.time; 



export default async function Home({params}) {


  const translate = await getDictionary(params.lang)

  const data = await getData()


  // const data = [
  //   {
  //     id: 1,
  //     title: "vintage platform",
  //     about: "The Future of AI in Healthcare: Transforming Patient Care",
  //     img: img
  //   },
  //   {
  //     id: 2,
  //     title: "shahin application",
  //     about: "The Future of AI in Healthcare: Transforming Patient Care",
  //     img: img2
  //   },
  //   {
  //     id: 3,
  //     title: "megatron web",
  //     about: "The Future of AI in Healthcare: Transforming Patient Care",
  //     img: img3
  //   }
  // ]



  return (
    <main className="container mx-auto px-5 my-10">
      <Header translate={translate} />
      <Discover translate={translate} />
      {data.status && (
        <Projects data={data.data} pagination={false} />
      )}
      <GlobalCustomers />
      <Blogs />
      <Services />
    </main>
  );
}

