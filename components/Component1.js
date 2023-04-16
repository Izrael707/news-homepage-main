export default function Component1({ title, subtitle }) {
  return (
    <div className="my-6 flex flex-col gap-y-3">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-neutral-400 text-xl">{subtitle}</p>
    </div>
  );
}
