"use client"
import Link from "next/link";


function NotFound() {
  return (
    <html lang={"en"}>
      <body style={{ background: "#0F1428", height: "95vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ fontWeight: "bold", color: "#ad3131", textTransform: "capitalize" }}>sorry this is page not found</h1>
        <Link style={{ textDecoration: "none", fontWeight: "bold", background: "white", padding: "5px 20px", borderRadius: "50px", color: "black", fontSize: "15px", marginTop: "15px" }} href={"/"}>Home Page</Link>
      </body>
    </html>
  );
}

export default NotFound
