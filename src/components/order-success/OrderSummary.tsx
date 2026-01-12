import Image from "next/image";

export default function OrderSummary() {
  return (
    <div>
      <h3 className="font-semibold text-base mb-4 text-black">Order Summary</h3>

      <div className="mb-4">
        <p className="font-normal text-basetext-black pb-4">Items</p>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-16 h-16 rounded-md border border-gray-200 flex items-center justify-center shrink-0 overflow-hidden bg-white">
            <Image
              src="/images/dolo.png"
              alt="Dolo 500 Tablet"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-black">Dolo 500 Tablet</p>
            <p className="text-sm font-semibold text-black">Pain killer</p>
          </div>
        </div>
        <p className="text-sm text-[#666666]">+4 More Items</p>
      </div>

      <hr className="border-t border-[#E3E3E3] rounded-lg mb-4" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-normal text-sm text-[#666666]">
            Item total (MRP)
          </span>
          <span className="font-normal text-sm text-black">₹4,274.43</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span className="font-normal text-sm text-[#666666]">
            Handling charges
          </span>
          <span className="font-normal text-sm text-black">₹45</span>
        </div>

        <div className="flex justify-between font-normal text-sm text-[#106536]">
          <span>Total Discount:</span>
          <span>-₹50</span>
        </div>

        <div className="flex justify-between font-normal text-sm text-[#106536]">
          <span>Coupon Code</span>
          <span>-₹70</span>
        </div>

        <div className="flex justify-between font-normal text-sm text-[#106536]">
          <span>Medcart Credits</span>
          <span>-₹70</span>
        </div>

        <div className="flex justify-between font-normal text-sm text-[#106536]">
          <span>Shipping fee</span>
          <span>₹12</span>
        </div>
      </div>
    </div>
  );
}
