import { useServiceStore } from "../../store/service-store.js";
import { useCustomerStore } from "../../store/Customer-store.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useVehicleTypeStore } from "../../store/vehicleType-store.js";
import { useVehicleStore } from "../../store/vehicle-store.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useServiceTypeStore } from "../../store/serviceType-store.js";
import { useUserStore } from "../../store/user-store.js"; // Import userStore

const AddCustomerpage = ({ closeModal }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn); // Access isLoggedIn
  const logout = useUserStore((state) => state.logout); // Access logout function
  const token = localStorage.getItem("authToken"); // Get token from local storage

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [amount, setAmount] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // customer store
  const { fetchCustomer } = useCustomerStore();

  // service store
  const { fetchServices, services } = useServiceStore();

  // vehicleType store
  const { fetchVehicleTypes, vehicleTypes } = useVehicleTypeStore();

  // serviceType store
  const { fetchServiceType, serviceType } = useServiceTypeStore();

  const { fetchVehicles } = useVehicleStore();

  // fetching service types
  useEffect(() => {
    const getServiceTypes = async () => {
      if (isLoggedIn) {
        await fetchServiceType();
      } else {
        console.log("User not logged in");
      }
    };

    getServiceTypes();
  }, [isLoggedIn]);

  // fetching services
  useEffect(() => {
    const getServices = async () => {
      if (isLoggedIn) {
        await fetchServices();
      } else {
        console.log("User not logged in");
      }
    };
    getServices();
  }, [isLoggedIn]);

  // fetching vehicle types
  useEffect(() => {
    const fetchvehicleTypesFunc = async () => {
      if (isLoggedIn) {
        await fetchVehicleTypes();
      } else {
        console.log("User not logged in");
      }
    };
    fetchvehicleTypesFunc();
  }, [isLoggedIn]);

  // phone number validation
  const handlePhoneChange = (value, country) => {
    if (!country) return;

    const cleanedValue = value.replace(/\D/g, "");
    const dialCode = country.dialCode;
    const localNumber = cleanedValue.substring(dialCode.length);

    if (localNumber.length < 9) {
      setError("Phone number must be 9 digits after the country code.");
    } else if (localNumber.length > 9) {
      setError("Phone number can only be 9 digits after the country code.");
    } else {
      setError("");
    }

    setPhone(value);
  };

  // submitting customer data to be posted
  const submitHandler = async (e) => {
    e.preventDefault();

    

    try {
      if (isLoggedIn) {
        const formData = {
          name,
          phone,
          numberPlate,
          vehicleType,
          service,
          amount,
        };

        const responseSuccess = await fetchCustomer(formData, token); // pass token

        console.log("Token being sent:", token)
        if (responseSuccess) {
          toast.success("Customer saved successfully");
          closeModal();
          navigate("/");
          fetchVehicles(token); // pass token
        } else {
          toast.error("Failed to save the customer");
        }
      } else {
        toast.error("User not logged in");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to save the customer");
    }
  };

  return (
    <>
      <div className="items-center justify-center w-full p-2">
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
                  required
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start w-full">
                <label>Phone</label>
                <PhoneInput
                  country={"ke"}
                  containerClass="w-full"
                  inputClass="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  buttonClass="bg-gray-100 border border-gray-300  rounded-l-md"
                  dropdownClass="bg-white border border-gray-300 rounded-md shadow-lg"
                  placeholder="+254712345678"
                  value={phone}
                  onChange={(value, country) =>
                    handlePhoneChange(value, country)
                  }
                  required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
                  value={numberPlate}
                  onChange={(e) => setNumberPlate(e.target.value)}
                  required
                />
              </div>

              {/*  */}
              <div className="mb-3 w-full">
                <div className="relative">
                  <label>Vehicle Type</label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a vehicle
                    </option>
                    {vehicleTypes && vehicleTypes.length > 0 ? (
                      vehicleTypes.map((vehicle, i) => (
                        <option key={i} value={vehicle.type}>
                          {vehicle.type}
                        </option>
                      ))
                    ) : (
                      <option value="">Loading vehicle types...</option>
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full flex space-x-8">
              <div className="w-full mb-3">
                <div className="relative">
                  <label>Service</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services && services.length > 0 ? (
                      services.map((service, i) => (
                        <option key={i} value={service.service}>
                          {service.service}
                        </option>
                      ))
                    ) : (
                      <option value="">Loading services types...</option>
                    )}
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
                  required
                />
              </div>
            </div>

            <div className="flex flex-row-reverse justify-around w-full my-6">
              <button
                type="submit"
                className="bg-black text-white w-[40%] py-2 px-12 mb-5 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-transparent border px-12 w-[40%] text-DarkGray border-black py-2 mb-5 rounded-md"
              >
                Cancel
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
