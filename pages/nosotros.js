import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

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
        }
      `}</style>
      <main className="About">
        <Link href="/">
          <a className="About-btn">Volver</a>
        </Link>
        <buton onClick={handleClick}>go back</buton>
      </main>
    </Layout>
  );
}

export default About;
