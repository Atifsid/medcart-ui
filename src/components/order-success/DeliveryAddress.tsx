export default function DeliveryAddress() {
  return (
    <div>
      <h3 className="font-semibold text-base mb-2 text-black">Delivering to</h3>
      <p className="text-sm font-normal mb-1 text-black">Home</p>
      <p className="text-base font-normal leading-relaxed text-[#666666]">
        Singhal General store, Varun Path, Varun Nagar, JAIPUR, RAJASTHAN,
        302020, India
      </p>

      <p className="text-base text-[#FF6D00] mt-3 font-semibold">
        Expected delivery date:{" "}
        <span className="font-bold">25 Dec '25 - 27 Dec '25</span>
      </p>
    </div>
  );
}
