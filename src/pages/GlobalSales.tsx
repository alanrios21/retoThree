import SalesTable from "../components/Charts/SalesTable"
import MapOne from "../components/Maps/MapOne"
import DefaultLayout from "../layout/DefaultLayout"

const GlobalSales = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <MapOne />
          </div>
          <div className="col-span-12">
            <SalesTable />
          </div>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default GlobalSales
