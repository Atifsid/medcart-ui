import Image from "next/image";
import PrescriptionStatusCard from "./PrescriptionStatusCard";

export default function OrderSuccessBanner() {
  return (
    <section className="bg-[linear-gradient(180deg,#037253_0%,#05CD7C_100%)] text-white relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="inset-0 flex items-center justify-center pointer-events-none opacity-90 z-20">
        <Image
          src="/images/confetti.svg"
          alt="Confetti"
          width={260}
          height={160}
          className="w-48 md:w-72 h-auto"
          priority
        />
      </div>

      <div className="flex flex-col items-center text-center gap-4 relative z-30 w-full px-8">
        <h1 className="text-xl font-normal">Great Job</h1>

        <p className="text-2xl md:text-3xl font-semibold leading-tight">
          Your order no. 122334455 is placed!
        </p>

        <p className="text-sm font-normal max-w-lg">
          We will notify you once this order gets confirmed and send your
          updates thereafter
        </p>

        <div className="mt-8 w-full relative z-10 pb-16 sm:pb-0">
          <PrescriptionStatusCard />
        </div>
      </div>
    </section>
  );
}
