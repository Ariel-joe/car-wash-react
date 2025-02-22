import { useEffect, useState } from "react";

const AddCustomerpage = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [numberplate, setNumberplate] = useState("");
  const [amount, setAmount] = useState("");

  const [detailersData, setDetailersData] = useState([]);
  const [detailer, setDetailer] = useState("");

  const [vehicletypeData, setVehicletypeData] = useState([]);
  const [vehicletype, setVehicletype] = useState("");

  const [servicesData, setServicesData] = useState([]);
  const [service, setService] = useState("");

  // fetching available services
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/services");

        const result = await response.json();

        if (result.success) {
          setServicesData(result.data);
          return;
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getServices();
  }, []);

  // fetching vehicle types
  useEffect(() => {
    const fetchvehicleTypes = async (params) => {
      try {
        const response = await fetch(
          "http://localhost:3006/api/vehicles/types"
        );

        const result = await response.json();

        if (result.success) {
          setVehicletypeData(result.data);
          return;
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchvehicleTypes();
  }, []);

  // fetching detailers.
  useEffect(() => {
    const fetchDetailers = async () => {
      try {
        const response = await fetch("http://localhost:3006/api/detailers");

        const result = await response.json();

        if (result.success) {
          setDetailersData(result.data);

          return;
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchDetailers();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      formData = {
        name,
        phonenumber,
        numberplate,
        vehicletype,
        service,
        amount,
        detailer
      };

      const response = await fetch("http://localhost:3006/api/");
    } catch (error) {
      toast.error("failed to save the customer");
    }
  };
  return (
    <>
      <div className="items-center justify-center w-3/5 p-2">
        <form onSubmit={submitHandler} className="bg-white px-8 py-4 w-full">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-xl mb-5">New Customer</h1>
            </div>

            {/*  */}
            <div className="w-full flex space-x-8 mb-6">
              <div className="flex flex-col items-start mb-3 w-full">
                <label>Name</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-1 px-3"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label>Phone</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-1 px-3"
                  placeholder="+254712345678"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>

            {/* vehicle details */}

            <div className="w-full flex space-x-8">
              <div className="flex flex-col items-start mb-3 w-full">
                <label>Number Plate</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-1 px-3"
                  placeholder="KAA 001A"
                  value={numberplate}
                  onChange={(e) => setNumberplate(e.target.value)}
                />
              </div>

              {/*  */}
              <div className="mb-3 w-full">
                <div className="relative">
                  <label>vehicle Type</label>
                  <select
                    onChange={(e) => setVehicletype(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                  >
                    {vehicletypeData.map((vehicle, i) => (
                      <option key={i} value={vehicle.type}>
                        {vehicle.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full mb-3">
              <div className="relative">
                <label>Detailers</label>
                <select
                  onChange={(e) => setDetailer(e.target.value)}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                >
                  {detailersData.map((detailer, i) => (
                    <option key={i} value={detailer.name}>
                      {detailer.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/*  */}

            {/*  */}
            <hr />
            {/*  */}

            <div className="w-full flex space-x-8">
              <div className="w-full mb-3">
              <div className="relative">
                <label>Service</label>
                <select
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                >
                  {servicesData.map((service, i) => (
                    <option key={i} value={service.service}>
                      {service.service}
                    </option>
                  ))}
                </select>
              </div>
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label>Amount</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-1 px-3"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-black w-full text-white px-10 py-1"
              >
                Submit
              </button>
            </div>

            {/*  */}
          </div>
        </form>
      </div>
    </>
  );
};

export { AddCustomerpage };
