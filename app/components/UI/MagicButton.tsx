export default function MagicButton({
  title}: {
  title: string;}) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[2px] ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6617CB_0%,#CB218E_50%,#6617CB_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#1f0f1d] px-8 md:px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
      </span>
    </button>
  );
}
