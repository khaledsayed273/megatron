import Header from "./components/Home/Header";
import Discover from "./components/Home/Discover";
import Projects from "../shared/projects/Project";
import Blogs from "./components/Home/Blogs";
import Services from "./components/Home/Services";
import API from "@/api/API";
import { getDictionary } from "./dictionaries";
import Link from "next/link";

async function getData(lang) {
  const res = await API.get(`/projects/latest/project`, {
    headers: { "X-localization": lang }
  })
  return res
}

export const revalidate = +process.env.time;

export default async function Home({ params }) {

  const translate = await getDictionary(params.lang)

  const data = await getData()

  return (
    <main className="container mx-auto px-5 my-10">
      <Header translate={translate} />
      <Discover translate={translate} />
      <h2 data-aos-duration="1000" data-aos="fade-up" className='text-center mb-10 text-white text-xl lg:text-4xl'> From our Latest projects </h2>

      {data.status && (
        <Projects data={data.data} pagination={false} />
      )}
      <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center mt-2">
        <Link className="btnOrange text-sm md:text-base text-white font-semibold capitalize px-6 py-2 rounded-full" href={"/projects"}>View More</Link>
      </div>
      {/* <GlobalCustomers /> */}
      <Services translate={translate} />
      <Blogs />
    </main>
  );
}

