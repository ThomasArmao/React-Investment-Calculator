import { calculateInvestmentResults, formatter } from "../../util/investment";
import "./InvestmentTable.css";

const InvestmentTable = ({ dataTable }) => {
  const resultData = calculateInvestmentResults(dataTable);
  const initialInvestment = dataTable.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultData.map((row, rowIndex) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;

            const totalAmountInvested = row.valueEndOfYear - totalInterest;
            
          return (
            <tr key={rowIndex}>
              <Row
                year={row.year}
                valueEndOfYear={row.valueEndOfYear}
                interest={row.interest}
                totalInterest={totalInterest}
                totalAmountInvested={totalAmountInvested}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Row = (props) => {
  return (
    <>
      <td>{props.year}</td>
      <td>{formatter.format(props.valueEndOfYear)}</td>
      <td>{formatter.format(props.interest)}</td>
      <td>{formatter.format(props.totalInterest)}</td>
      <td>{formatter.format(props.totalAmountInvested)}</td>
    </>
  );
};
export default InvestmentTable;
