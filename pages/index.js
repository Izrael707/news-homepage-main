import Head from "next/head";
import Component1 from "../components/Component1";
import Navbar from "../components/Navbar";
import Component2 from "../components/Component2";

export default function App() {
  return (
    <div className="h-screen p-4 relative">
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
      <main className="lg:grid grid-cols-3 h-screen gap-x-8">
        <div className="mt-4 col-span-2 lg:grid lg:gap-x-4 grid-cols-2">
          <div className="col-span-2 lg:mb-4">
            <img
              src="/images/image-web-3-mobile.jpg"
              alt="web-3"
              className="lg:hidden w-full"
            />
            <img
              src="/images/image-web-3-desktop.jpg"
              alt="web-3"
              className="lg:block hidden h-full"
            />
          </div>
          <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl my-2 col-span-1">
            The Bright Future of Web 3.0?
          </h1>
          <div className="col-span-1">
            <p className="text-neutral-600 text-lg xl:text-2xl font-medium my-2 lg:mb-4">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="px-12 py-4 text-lg xl:text-xl my-2 bg-red-500 uppercase font-medium text-white tracking-widest hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300">
              Read more
            </button>
          </div>
        </div>

        <div className="p-4 mt-16 lg:mt-4 bg-slate-950 text-white col-span-1 grid">
          <h1 className="text-4xl xl:text-5xl font-bold text-orange-400 mb-6">
            New
          </h1>
          <Component1
            title="Hydrogen VS Electric Cars"
            subtitle="Will hydroen-fueled cars ever catch up to EVs?"
          />
          <hr size="1" noshade={true} />
          <Component1
            title="The Downsides of AI Artistry"
            subtitle="What are the possible adverse effects of on-demand AI image generation?"
          />
          <hr size="1" noshade={true} />
          <Component1
            title="Is VC Funding Drying Up"
            subtitle="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          />
        </div>

        <div className="flex flex-col gap-y-4 lg:grid lg:gap-x-4 grid-cols-3 my-12 col-span-3">
          <Component2
            imgsrc="/images/image-retro-pcs.jpg"
            id="01"
            title="Reviving Retro PCs"
            subtitle="What happens when old PCs are given modern upgrade?"
          />
          <Component2
            imgsrc="/images/image-top-laptops.jpg"
            id="02"
            title="Top 10 Laptops of 2022"
            subtitle="Our best picks for various needs and budgets."
          />
          <Component2
            imgsrc="/images/image-gaming-growth.jpg"
            id="03"
            title="The Growth of Gaming"
            subtitle="How the pandemic has sparked fresh opportunities."
          />
        </div>
        <div class="text-center text-2xl text-neutral-500">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="github.com/izrael707">Izrael707</a>.
        </div>
      </main>
    </div>
  );
}
