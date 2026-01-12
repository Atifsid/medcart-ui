export default function ActionButtons() {
  return (
    <div className="flex gap-3 pt-2">
      <button className="flex-1 border border-[#60096A] text-[#60096A] rounded-lg py-3 text-sm font-semibold hover:bg-[#60096A]/5 transition-colors cursor-pointer">
        Explore more
      </button>

      <button className="flex-1 text-white rounded-lg py-3 text-sm font-semibold transition-colors bg-[linear-gradient(90deg,#6E0B78_0%,#B311C5_100%)] hover:opacity-90 shadow-md cursor-pointer">
        Track Order
      </button>
    </div>
  );
}
