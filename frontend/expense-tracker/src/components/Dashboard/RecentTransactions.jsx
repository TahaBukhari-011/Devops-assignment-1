import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { IoMdDocument } from "react-icons/io";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

// const RecentTransactions = ({ transactions, onSeeMore }) => {
//   return (
//     <div className="card">
//       <div className="flex items-center justify-between">
//         <h5 className="text-lg">Recent Transactions</h5>
//         <button className="card-btn" onClick={onSeeMore}>
//           See All <LuArrowRight className="text-base" />
//         </button>
//       </div>
//       <div className="mt-6">
//         {transactions?.slice(0, 5).map((item) => {
//           console.log("Transaction data:", item);
//           return (
//             <TransactionInfoCard
//               key={item._id}
//               title={item.type == "expense" ? item.category : item.source}
//               icon={item.icon}
//               date={moment(item.date).format("Do MMM YYYY")}
//               amount={item.amount}
//               type={item.type}
//               hidenDeleteBtn
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RecentTransactions;
const RecentTransactions = ({ transactions, onSeeMore }) => {
  // Function to determine correct type based on data properties
  const getCorrectedType = (item) => {
    // If item has 'source' property, it should be income
    if (item.source) return "income";
    // If item has 'category' property, it should be expense
    if (item.category) return "expense";
    // Fallback to whatever type is provided
    return item.type || "expense";
  };

  // Function to get the correct title
  const getCorrectedTitle = (item) => {
    const correctType = getCorrectedType(item);
    return correctType === "expense" ? item.category : item.source;
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className="mt-6">
        {transactions?.slice(0, 5).map((item) => {
          const correctedType = getCorrectedType(item);
          const correctedTitle = getCorrectedTitle(item);

          console.log("Corrected transaction:", {
            originalType: item.type,
            correctedType,
            source: item.source,
            category: item.category,
          });

          return (
            <TransactionInfoCard
              key={item._id}
              title={correctedTitle}
              icon={item.icon}
              date={moment(item.date).format("Do MMM YYYY")}
              amount={item.amount}
              type={correctedType} // Use the corrected type
              hidenDeleteBtn
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentTransactions;
