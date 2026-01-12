import OrderDetailsPanel from "@/components/order-success/OrderDetailsPanel";
import OrderSuccessBanner from "@/components/order-success/OrderSuccessBanner";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px] min-h-[calc(100vh-80px)]">
        <OrderSuccessBanner />
        <OrderDetailsPanel />
      </div>
    </main>
  );
}
