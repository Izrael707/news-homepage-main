export default function Component1({ title, subtitle }) {
  return (
    <div className="my-6 flex flex-col gap-y-3">
      <h2 className="font-bold text-2xl xl:text-3xl">{title}</h2>
      <p className="text-neutral-400 text-xl xl:text-2xl">{subtitle}</p>
    </div>
  );
}
