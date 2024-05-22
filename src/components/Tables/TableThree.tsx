import { useEffect, useState } from 'react';
import { Package } from '../../types/package';

const packageData: Package[] = [
  {
    name: 'Free package',
    price: 0.0,
    invoiceDate: 'Jan 13,2023',
    status: 'Paid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: 'Jan 13,2023',
    status: 'Paid',
  },
  {
    name: 'Business Package',
    price: 99.0,
    invoiceDate: 'Jan 13,2023',
    status: 'Unpaid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: 'Jan 13,2023',
    status: 'Pending',
  },
  // Nuevos productos agregados
  {
    name: 'Premium Package',
    price: 129.0,
    invoiceDate: 'Jan 15,2023',
    status: 'Paid',
  },
  {
    name: 'Pro Package',
    price: 79.0,
    invoiceDate: 'Jan 16,2023',
    status: 'Unpaid',
  },
  {
    name: 'Ultimate Package',
    price: 199.0,
    invoiceDate: 'Jan 17,2023',
    status: 'Pending',
  },
  {
    name: 'Basic Package',
    price: 39.0,
    invoiceDate: 'Jan 18,2023',
    status: 'Paid',
  },
];

const TableThree = () => {
  const [showInvoiceDate, setShowInvoiceDate] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowInvoiceDate(window.innerWidth > 460);
    };

    handleResize(); // Call on first render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto text-xs">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-3 px-3 font-medium text-black dark:text-white">
                Package
              </th>
              {showInvoiceDate && (
                <th className="min-w-[150px] py-3 px-3 font-medium text-black dark:text-white">
                  Invoice date
                </th>
              )}
              <th className="min-w-[120px] py-3 px-3 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-3 px-3 dark:border-strokedark">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                    <p className="text-xs">${packageItem.price}</p>
                  </div>
                </td>
                {showInvoiceDate && (
                  <td className="border-b border-[#eee] py-3 px-3 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.invoiceDate}
                    </p>
                  </td>
                )}
                <td className="border-b border-[#eee] py-3 px-3 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-2 text-xs font-medium ${
                      packageItem.status === 'Paid'
                        ? 'bg-success text-success'
                        : packageItem.status === 'Unpaid'
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
