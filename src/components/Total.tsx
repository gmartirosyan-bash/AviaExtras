interface Service {
  id: number;
  name: string;
  price: number;
}

export function Total({
  services,
  addedServices,
  onCheckout,
}: {
  services: Service[];
  addedServices: number[];
  onCheckout: () => void;
}) {
  const selectedServices = services.filter((service) =>
    addedServices.includes(service.id),
  );
  const total = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0,
  );

  return (
    <div className="w-full mt-6 sm:mt-8 px-4 sm:px-0">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          {selectedServices.length === 0 ? (
            <p className="text-center text-gray-400 text-base sm:text-lg">
              Услуги не выбраны
            </p>
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                Выбранные услуги
              </h2>
              <ul className="list-none space-y-2 sm:space-y-3">
                {selectedServices.map((service) => (
                  <li
                    key={service.id}
                    className="flex justify-between items-center py-3 sm:py-4 px-4 sm:px-5 bg-orange-400 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base"
                  >
                    <span className="font-medium text-white">
                      {service.name}
                    </span>
                    <span className="font-bold text-white">
                      {service.price}$
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-5 text-xl sm:text-2xl font-boldrounded-lg mt-4 sm:mt-6 shadow-lg">
                <span className="text-white">Итого</span>
                <span className="text-yellow-300">{total}$</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full mt-4 sm:mt-6 bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg text-white shadow-lg transition-colors duration-200"
              >
                Оформить
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
