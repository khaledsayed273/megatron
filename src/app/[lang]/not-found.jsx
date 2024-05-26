import Link from "next/link";


function NotFound() {


  return (
    <main className="h-screen flex justify-center flex-col items-center">
      <h1 className="font-bold text-orange capitalize text-xl mb-5" >sorry this is page not found</h1>
      <Link className="btnOrange text-white font-bold rounded-full py-1.5 px-5" href={"/"}>Home Page</Link>

    </main>
  );
}

export default NotFound
