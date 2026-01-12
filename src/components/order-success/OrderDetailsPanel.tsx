import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import ActionButtons from "./ActionButtons";

export default function OrderDetailsPanel() {
  return (
    <aside className="bg-white overflow-hidden flex flex-col h-[calc(100vh-80px)] sticky top-20">
      <div className="p-6 space-y-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <DeliveryAddress />
        <hr className="border-t border-[#E3E3E3] rounded-lg" />
        <OrderSummary />
        <hr className="border-t border-[#E3E3E3] rounded-lg" />
        <PaymentSummary />
      </div>
      <div className="p-6 pt-0 bg-white shrink-0">
        <ActionButtons />
      </div>
    </aside>
  );
}
