import InvestmentInput from "./InvestmentInput";
import "./InvestmentUser.css";

const InvestmentUser = ({ userData, newUserData }) => {
  const updateUserValue = (event) => {
    const { name, value } = event.target;
    if (value >= 0) {
      newUserData((prevValue) => ({
        ...prevValue,
        [name]: +value,
      }));
    }
  };

  return (
    <div id="user-input">
      <InvestmentInput
        name={"initialInvestment"}
        value={userData.initialInvestment}
        onChange={updateUserValue}
      >
        Initial investment
      </InvestmentInput>
      <InvestmentInput
        name={"annualInvestment"}
        value={userData.annualInvestment}
        onChange={updateUserValue}
      >
        Annual investment
      </InvestmentInput>
      <InvestmentInput
        name={"expectedReturn"}
        value={userData.expectedReturn}
        onChange={updateUserValue}
      >
        Expected return
      </InvestmentInput>
      <InvestmentInput
        name={"duration"}
        value={userData.duration}
        onChange={updateUserValue}
      >
        Duration
      </InvestmentInput>
    </div>
  );
};
export default InvestmentUser;
