import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

interface TableRow {
  id: string;
  para: string;
  criterion: number;
  value: string;
  type: number;
}

interface TableProps {
  rows: TableRow[];
  deleteRow: (idx: number) => void;
  editRow: (idx: number) => void;
}


export const Table: React.FC<TableProps> = ({ rows, deleteRow, editRow }) => {
  
  return (
    <div className="max-w-full overflow-x-auto table-wrapper">
      <table className="table">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Bond</th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Parameter</th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">Criterion</th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">Value to give alert</th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">Alert type</th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: TableRow, idx: number) => (
            <tr key={idx} className="content-center">
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{row.id}</td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <span className={`label label-${row.para}`}>
                  {row.para}
                </span>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <span>
                  {row.criterion === 0 ? "goes down by" : row.criterion === 1 ? "goes up by" : row.criterion === 2 ? "is smaller than" : row.criterion === 3 ? "is greater than" : "is equal to"}
                </span>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{row.value}</td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <span>
                  {row.type === 0 ? 'Info' : row.type === 1 ? "Warning" : "Alert"}
                </span>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <span className="actions flex grid-cols-2 gap-4">
                  <BsFillTrashFill
                    className="delete-btn cursor-pointer"
                    onClick={() => deleteRow(idx)} />
                  <BsFillPencilFill
                    className="edit-btn cursor-pointer"
                    onClick={() => editRow(idx)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};