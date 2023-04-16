import Head from "next/head";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <div className="h-screen p-4">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />

        <title>Frontend Mentor | News homepage</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Component1 />
        <Component2 />
        {/* <div class="">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Izrael707</a>.
        </div> */}
      </main>
    </div>
  );
}
