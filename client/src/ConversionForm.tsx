interface Props {
  currencySymbols: string[];
  onClick: () => void;
}

const ConversionForm = ({ currencySymbols, onClick }: Props) => {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "20px" }}>Amount</label>
        <input
          type="number"
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "solid black 1px",
          }}
        />
      </div>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "20px" }}>From Currency</label>
          <select
            style={{
              padding: "5px",
              width: "200px",
              borderRadius: "4px",
              border: "solid black 1px",
            }}
          >
            {currencySymbols.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ marginRight: "38px" }}>To Currency</label>
          <select
            style={{
              padding: "5px",
              width: "200px",
              borderRadius: "4px",
              border: "solid black 1px",
            }}
          >
            {currencySymbols.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={onClick}
            style={{
              marginTop: "10px",
              padding: "10px",
              width: "100px",
              borderRadius: "5px",
              border: "solid blue 1px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            CONVERT
          </button>
          <p style={{ marginLeft: "20px", fontWeight: "bold" }}>
            This is value
          </p>
        </div>
      </form>
    </>
  );
};

export default ConversionForm;
