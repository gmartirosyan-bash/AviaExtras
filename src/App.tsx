import { useState } from "react";
import { CheckoutForm } from "./components/CheckoutForm";
import { Home } from "./components/Home";
import { Total } from "./components/Total";

interface Service {
  id: number;
  name: string;
  price: number;
}

const services: Service[] = [
  { id: 1, name: "Дополнительный багаж", price: 30 },
  { id: 2, name: "Приоритетная посадка", price: 15 },
  { id: 3, name: "Выбор места", price: 10 },
  { id: 4, name: "Питание на борту", price: 12 },
  { id: 5, name: "Доступ к Wi-Fi", price: 8 },
  { id: 6, name: "Страховка путешествия", price: 20 },
];

export default function App() {
  const [addedServices, setAddedServices] = useState<number[]>([]);
  const [page, setPage] = useState<"home" | "total">("home");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleService = (buttonId: number) => {
    if (addedServices.includes(buttonId))
      setAddedServices((prev) => prev.filter((p) => p !== buttonId));
    else {
      setAddedServices((prev) => [...prev, buttonId]);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-900 text-white px-0">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 sm:mt-6 mb-6 sm:mb-8 px-4 sm:px-0 w-full sm:w-auto">
        <button
          onClick={() => setPage("home")}
          className={`flex-1 sm:flex-none px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 cursor-pointer ${
            page === "home"
              ? "bg-orange-500 hover:bg-orange-600 shadow-lg"
              : "bg-neutral-700 hover:bg-neutral-600"
          }`}
        >
          Услуги
        </button>
        <button
          onClick={() => setPage("total")}
          className={`flex-1 sm:flex-none px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 cursor-pointer ${
            page === "total"
              ? "bg-blue-600 hover:bg-blue-700 shadow-lg"
              : "bg-neutral-700 hover:bg-neutral-600"
          }`}
        >
          Итого
        </button>
      </div>
      {page === "home" && (
        <Home
          services={services}
          addedServices={addedServices}
          handleService={handleService}
        />
      )}
      {page === "total" && (
        <Total
          services={services}
          addedServices={addedServices}
          onCheckout={() => setShowCheckoutForm(true)}
        />
      )}
      <CheckoutForm
        isOpen={showCheckoutForm}
        onClose={() => setShowCheckoutForm(false)}
        onSuccess={() => setAddedServices([])}
      />
    </div>
  );
}
