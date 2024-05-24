import Link from "next/link";

export const Explore = () => {
  return (
    <>
      <div className="group relative grid size-36 place-items-center rounded-full bg-white md:size-[272px]">
        <div className="absolute right-0 -z-[1] size-36 rounded-full bg-white/20 transition ease-in-out group-hover:scale-150 md:size-[272px]" />
        <Link
          href="/destination"
          className="heading-s grid size-full place-items-center text-dark-navy"
        >
          EXPLORE
        </Link>
      </div>
    </>
  );
};
