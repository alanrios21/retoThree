import React from 'react';

interface SalesData {
  country: string;
  sales: number;
  amount: number;
}

const salesData: SalesData[] = [
  { country: 'United States', sales: 1000, amount: 50000 },
  { country: 'Canada', sales: 750, amount: 30000 },
  { country: 'Mexico', sales: 500, amount: 20000 },
  { country: 'Brazil', sales: 600, amount: 25000 },
  { country: 'United Kingdom', sales: 800, amount: 35000 },
  { country: 'Germany', sales: 900, amount: 40000 },
  { country: 'France', sales: 850, amount: 37000 },
  { country: 'Italy', sales: 700, amount: 32000 },
  { country: 'Spain', sales: 650, amount: 29000 },
  { country: 'Australia', sales: 900, amount: 42000 },
  { country: 'Japan', sales: 950, amount: 45000 },
  { country: 'China', sales: 1100, amount: 50000 },
  { country: 'India', sales: 700, amount: 30000 },
  { country: 'Russia', sales: 600, amount: 25000 },
  { country: 'South Africa', sales: 550, amount: 23000 },
  { country: 'Argentina', sales: 500, amount: 20000 },
  { country: 'Chile', sales: 400, amount: 18000 },
  { country: 'Colombia', sales: 450, amount: 19000 },
  { country: 'Peru', sales: 350, amount: 16000 },
  { country: 'Venezuela', sales: 300, amount: 14000 },
  { country: 'Netherlands', sales: 750, amount: 32000 },
  { country: 'Belgium', sales: 700, amount: 31000 },
  { country: 'Switzerland', sales: 800, amount: 35000 },
  { country: 'Sweden', sales: 600, amount: 27000 },
  { country: 'Norway', sales: 500, amount: 23000 },
  { country: 'Denmark', sales: 550, amount: 24000 },
  { country: 'Finland', sales: 450, amount: 20000 },
  { country: 'Poland', sales: 650, amount: 28000 },
  { country: 'Ukraine', sales: 400, amount: 17000 },
  { country: 'Romania', sales: 350, amount: 15000 },
];

const SalesTable: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Sales by Country
      </h4>
      <table className="min-w-full divide-y divide-gray-200 text-xs">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Sales
            </th>
            <th className="hidden md:table-cell px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data) => (
            <tr key={data.country}>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                {data.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                {data.sales}
              </td>
              <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-gray-500">
                ${data.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;