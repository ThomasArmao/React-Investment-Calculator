const InvestmentInput = ({name, value, onChange, children}) => {

  return (
    <div className="input-group">
          <label>{children}</label>
      <input
        name= {name}
        type="number"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InvestmentInput