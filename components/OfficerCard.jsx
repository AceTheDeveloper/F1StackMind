function OfficerCard({ img, name, position, delay }) {
  return (
    <div className="flex w-full items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:w-[330px]" data-aos="fade-up" data-aos-delay={delay}>
      {/* Image */}
      <img
        src={img}
        alt={name}
        className="h-16 w-16 shrink-0 rounded-full border-2 border-neutral-700 bg-neutral-800 object-cover ring-2 ring-neutral-800"
      />

      {/* Text */}
      <div className="min-w-0">
        <p className="truncate text-lg font-semibold tracking-tight text-white">
          {name}
        </p>
        <p className="mt-1 text-sm text-neutral-400">
          {position}
        </p>
      </div>
    </div>
  );
}

export default OfficerCard;
