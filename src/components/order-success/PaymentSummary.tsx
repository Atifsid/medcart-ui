export default function PaymentSummary() {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-baseline mb-3 font-semibold text-base text-black">
          <h3>Amount paid</h3>
          <span>₹1,999.00*</span>
        </div>

        <div className="relative overflow-hidden rounded-[18px] bg-[#3149D2] px-6 pt-5 pb-4 text-center">
          <svg
            className="absolute -top-px left-0 w-full block"
            viewBox="0 0 360 16"
            preserveAspectRatio="none"
            height="12"
          >
            <path
              d="
        M0 10
        Q6 4 12 10
        T24 10
        T36 10
        T48 10
        T60 10
        T72 10
        T84 10
        T96 10
        T108 10
        T120 10
        T132 10
        T144 10
        T156 10
        T168 10
        T180 10
        T192 10
        T204 10
        T216 10
        T228 10
        T240 10
        T252 10
        T264 10
        T276 10
        T288 10
        T300 10
        T312 10
        T324 10
        T336 10
        T348 10
        T360 10
        V0 H0 Z
      "
              fill="white"
            />
          </svg>

          <p className="relative z-10 text-white text-sm font-semibold flex items-center justify-center gap-2 leading-snug">
            🎉 You saved ₹577.00 on this order!
          </p>
        </div>

        <p className="text-xs text-[#666666] mt-4">
          *Prices shown on the page are indicative, inclusive of all taxes and
          may slightly vary once the fin....{" "}
          <span className="text-[#60096A] cursor-pointer">See more</span>
        </p>

        <hr className="border-t border-[#E3E3E3] rounded-lg mt-4" />
      </div>

      <div>
        <h3 className="font-semibold text-base mb-3 text-black">
          Paid via UPI
        </h3>
        <div className="flex flex-col space-y-2 font-normal">
          <span className="text-black text-base">From : Slice cc (XX9395)</span>
          <span className="text-[#666666] text-sm">
            Txn ID : 123456789012345
          </span>
          <span className="text-[#666666] text-sm">
            Date : 29 Dec ‘25 8:10 PM{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
