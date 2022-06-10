import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import RadiosPageNavbar from "../components/RadiosPageNavbar";
import Navbar from "../components/Navbar";
import Playbar from "../components/Playbar";

function About() {
  const router = useRouter();
  console.log(router);
  const handleClick = (e) => window.history.back();
  return (
    <Layout>
      <style jsx>{`
        .About {
          width: 100vw;
          height: 100vh;
          background-color: tomato;
          padding-top: 80px;
        }
      `}</style>
      <main className="About">
        <RadiosPageNavbar />
        <Navbar />
        <Link href="/">
          <a className="About-btn">Volver</a>
        </Link>
        <button onClick={handleClick}>go back</button>
        <Playbar />
      </main>
    </Layout>
  );
}

export default About;
