import { useState } from "react";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable.jsx";
import InvestmentUser from "./components/InvestmentUser/InvestmentUser";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const tableView = (userData.duration <= 0 ? (
    <p className="warning-message">Please enter a duration greater than zero</p>
  ) : (
    <InvestmentTable dataTable={userData} />
  ));

  return (
    <>
      <InvestmentUser userData={userData} newUserData={setUserData} />
      {tableView}
    </>
  );
}

export default App;
