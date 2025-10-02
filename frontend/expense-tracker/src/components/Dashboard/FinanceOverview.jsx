import React from "react";
import CustomPiChart from "../Charts/CustomPiChart";
const COLORS = ["#875CF5", "#FAC37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expense", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Finance Overview</h5>
      </div>

      <CustomPiChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
