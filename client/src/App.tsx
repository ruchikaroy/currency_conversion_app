import { useEffect } from "react";
import ConversionForm from "./ConversionForm";
import Header from "./Header";
import axios from "axios";

const BASE_URL = "http://localhost:9090";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

function App() {
  const currencies = ["AED", "GBP", "INR", "CAD", "USD"];

  useEffect(() => {
    axiosInstance
      .get("/api/1/conversions")
      .then((response) => console.log(response));
  });

  return (
    <>
      <Header />
      <ConversionForm
        currencySymbols={currencies}
        onClick={() => console.log("clicked")}
      />
    </>
  );
}

export default App;
