export default function Component2() {
  return (
    <div className="p-4 mt-16 bg-slate-950 text-white">
      <h1 className="text-4xl font-bold text-orange-400 mb-6">New</h1>
      <Comp title='Hydrogen VS Electric Cars' subtitle='Will hydroen-fueled cars ever catch up to EVs?' />
      <hr size="1" noshade />
      <Comp title='The Downsides of AI Artistry' subtitle='What are the possible adverse effects of on-demand AI image generation?' />
      <hr size="1" noshade />
      <Comp title='Is VC Funding Drying Up' subtitle='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
    </div>
  );
}

function Comp({title, subtitle}) {
  return (
    <div className="my-6 flex flex-col gap-y-3">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-neutral-400 text-xl">
        {subtitle}
      </p>
    </div>
  );
}
