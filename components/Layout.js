import Head from "next/head";
function Layout(props) {
  return (
    <div>
      <Head>
        <title>next app test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
