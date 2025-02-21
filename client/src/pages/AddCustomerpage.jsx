import { useEffect, useState } from "react";

const AddCustomerpage = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [numberplate, setNumberplate] = useState("");
  const [vehicletype, setVehicletype] = useState("");
  const [service, setService] = useState("");
  const [amount, setAmount] = useState("");

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
      };

      const response = await fetch("http://localhost:3006/api/")
    } catch (error) {
      toast.error("failed to save the customer")
    }
    
  }
  return (
    <>
      <div className="items-center justify-center w-3/5 p-2">
        <form onSubmit={submitHandler} className="bg-white px-8 py-4 w-full">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-xl mb-5">New Customer</h1>
            </div>

            {/*  */}
            <div className="flex space-x-8 mb-6">
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Name</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Phone</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="+254712345678"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>

            {/*  */}
            <div>vehicle details</div>
            {/*  */}

            <div className="flex space-x-8">
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Number Plate</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="John Doe"
                  value={numberplate}
                  onChange={(e) => setNumberplate(e.target.value)}
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Type</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="+254712345678"
                  value={vehicletype}
                  onChange={(e) => setVehicletype(e.target.value)}
                />
              </div>
            </div>

            {/*  */}
            <hr />
            {/*  */}

            <div className="flex space-x-8">
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Service</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="John Doe"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>

              {/*  */}
              <div className="flex flex-col items-start mb-3 w-full">
                <label className="text-lg">Amount</label>
                <input
                  type="text"
                  className="border w-full rounded-md py-2 px-3"
                  placeholder="+254712345678"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-black w-full text-white px-10 py-2"
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
