import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
} from "recharts";

const CustomBarChart = ({
  data,
  xAxisKey = "category",
  tooltipLabel = "Category",
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white mt-6 h-64 flex items-center justify-center">
        <p className="text-gray-500">No data available for the chart</p>
      </div>
    );
  }

  const getBarColor = (index) => (index % 2 === 0 ? "#875cf5" : "#cfbefb");

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {tooltipLabel}: {label}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              ${payload[0].value}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis
            dataKey={xAxisKey}
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;

//1

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";
// import CustomTooltip from "./CustomTooltip";

// const CustomBarChart = ({ data }) => {
//   // Function to alternate colors
//   const getBarColor = (index) => {
//     return index % 2 === 0 ? "#875cf5" : "#cfbefb";
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
//           <p className="text-xs font-semibold text-purple-800 mb-1">
//             {payload[0].payload.category}
//           </p>
//           <p className="text-sm text-gray-600">
//             Amount:{" "}
//             <span className="text-sm font-medium text-gray-900">
//               ${payload[0].payload.amount}
//             </span>
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="bg-white mt-6">
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid stroke="none" />

//           <XAxis
//             dataKey="source"
//             tick={{ fontSize: 12, fill: "#555" }}
//             stroke="none"
//           />
//           <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

//           <Tooltip content={CustomTooltip} />

//           <Bar
//             dataKey="amount"
//             fill="#FF8042"
//             radius={[10, 10, 0, 0]}
//             activeDot={{ r: 8, fill: "yellow" }}
//             activeStyle={{ fill: "green" }}
//           >
//             {data.map((entry, index) => (
//               <Cell key={index} fill={getBarColor(index)} />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CustomBarChart;

//2

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// const CustomBarChart = ({ data }) => {
//   // Add this check for empty data
//   if (!data || data.length === 0) {
//     return (
//       <div className="bg-white mt-6 h-64 flex items-center justify-center">
//         <p className="text-gray-500">No data available for the chart</p>
//       </div>
//     );
//   }

//   // Function to alternate colors
//   const getBarColor = (index) => {
//     return index % 2 === 0 ? "#875cf5" : "#cfbefb";
//   };

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white shadow-md rounded-lg p-3 border border-gray-200">
//           <p className="text-sm font-semibold text-gray-800 mb-1">{label}</p>
//           <p className="text-sm text-gray-600">
//             Amount:{" "}
//             <span className="font-medium text-purple-700">
//               ${payload[0].value}
//             </span>
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="bg-white mt-6 h-80">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//           <XAxis
//             dataKey="category"
//             tick={{ fontSize: 12, fill: "#555" }}
//             angle={-45}
//             textAnchor="end"
//             height={80}
//           />
//           <YAxis
//             tick={{ fontSize: 12, fill: "#555" }}
//             tickFormatter={(value) => `$${value}`}
//           />
//           <Tooltip content={<CustomTooltip />} />
//           <Bar
//             dataKey="amount"
//             name="Amount"
//             radius={[4, 4, 0, 0]}
//             barSize={40} // Set a fixed bar width
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={getBarColor(index)} />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CustomBarChart;
