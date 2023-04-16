export default function Component2({ imgsrc, id, title, subtitle }) {
  return (
    <div className="grid grid-cols-6 gap-x-4">
      <div className="col-span-2 py-4">
        <img src={imgsrc} alt="retro pics" />
      </div>
      <div className="col-span-4 flex flex-col justify-evenly">
        <span className="text-neutral-400 text-4xl font-bold">{id}</span>
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-neutral-500">{subtitle}</p>
      </div>
    </div>
  );
}
