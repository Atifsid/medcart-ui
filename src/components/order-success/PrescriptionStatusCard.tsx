import Image from "next/image";

export default function PrescriptionStatusCard() {
  return (
    <div className="bg-white rounded-lg p-6 w-full shadow-lg border border-green-100 relative z-10">
      <div className="flex flex-col items-center">
        <div className="w-32">
          <Image
            src="/images/prescription.svg"
            alt="Prescription"
            width={128}
            height={180}
            priority
          />
        </div>
        <p className="text-sm font-normal text-center text-black mt-4">
          We're reviewing your prescription now to confirm your order
        </p>
      </div>
    </div>
  );
}
