import { useState } from "react";

export function CheckoutForm({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onSuccess();
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-neutral-800 p-6 sm:p-8 rounded-lg w-full max-w-sm">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-400 text-center">
              Платёж выполнен успешно!
            </h2>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Оформление заказа</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Имя"
                required
                className="px-4 py-2 rounded bg-neutral-700 text-white"
              />
              <input
                type="text"
                placeholder="Номер карты"
                required
                className="px-4 py-2 rounded bg-neutral-700 text-white"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                required
                className="px-4 py-2 rounded bg-neutral-700 text-white"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded cursor-pointer font-semibold"
              >
                Подтвердить
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded cursor-pointer font-semibold"
              >
                Отмена
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
