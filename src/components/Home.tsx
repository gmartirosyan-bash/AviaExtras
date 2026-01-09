interface Service {
  id: number;
  name: string;
  price: number;
}

export function Home({
  services,
  addedServices,
  handleService,
}: {
  services: Service[];
  addedServices: number[];
  handleService: (id: number) => void;
}) {
  return (
    <div className="w-full mt-6 sm:mt-8 px-4 sm:px-0">
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
        {services.map((service) => (
          <div
            className={`w-full sm:w-80 md:w-72 flex flex-col items-center justify-between bg-orange-500 rounded-lg p-4 sm:p-6 shadow-md transition-all duration-300 ${addedServices.includes(service.id) ? "opacity-50 scale-95" : "hover:shadow-xl hover:scale-105"}`}
            key={service.id}
          >
            <div className="text-center mb-4 w-full">
              <p className="text-base sm:text-lg font-semibold text-white mb-2">
                {service.name}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {service.price}$
              </p>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-6 py-2 rounded font-semibold transition-colors duration-200 w-full text-sm sm:text-base"
              onClick={() => handleService(service.id)}
            >
              {addedServices.includes(service.id) ? "Удалить" : "Добавить"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
