export default function Component2({ imgsrc, id, title, subtitle }) {
  return (
    <div className="grid grid-cols-3 gap-x-4 py-2">
      <div className="col-span-1">
        <img src={imgsrc} alt="retro pics" className="h-full" />
      </div>
      <div className="col-span-2 grid">
        <span className="text-neutral-400 text-4xl lg:text-5xl xl:text-6xl font-bold">{id}</span>
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-neutral-500 md:text-lg xl:text-xl">{subtitle}</p>
      </div>
    </div>
  );
}
