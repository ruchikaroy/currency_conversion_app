import { useState } from "react";
import ConversionForm from "./ConversionComponent";
import Header from "./Header";
import axios from "axios";

const BASE_URL = "http://localhost:9090";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

function App() {
  const currencies = ["AED", "GBP", "INR", "CAD", "USD"];
  const [conversionValue, setConversionValue] = useState<number>(0);

  return (
    <>
      <Header />
      <ConversionForm
        currencySymbols={currencies}
        onClick={() => {
          axiosInstance
            .get("/api/1/conversions")
            .then((res) => res.data)
            .then((data: number) => {
              const result = Object.values(data);
              setConversionValue(Number(result));
            });
        }}
        value={conversionValue}
      />
    </>
  );
}

export default App;
