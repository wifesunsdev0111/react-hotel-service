import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { setZipCodeData } from "../../features/ZipCode/ZipCodeDataSlice";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetZipCodeDatasQuery } from "../../services/api/api";
interface DataTableProps {
  rows: { result: any[] }; // Update the type of the "rows" prop if needed
}

const columns: GridColDef[] = [
  { field: "zip", headerName: "ZIP Code", width: 100 },
  { field: "type", headerName: "Type", width: 120 },
  {
    field: "primary_city",
    headerName: "Primary City",
    width: 150,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.primary_city || ""} ${params.row.acceptable_cities || ""}`,
  },
  {
    field: "acceptable_cities",
    headerName: "Acceptable Cities",
    width: 400,
  },
  {
    field: "unacceptable_cities",
    headerName: "Unacceptable Cities",
    width: 500,
  },
  {
    field: "county",
    headerName: "County",
    width: 200,
  },
  {
    field: "areaCodes",
    headerName: "Area Codes",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${"Area Code "} ${params.row.area_codes || ""}`,
  },
];

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  const navigate = useNavigate();

  const [selectedRowId, setSelectedRowId] = React.useState(null);

  const [searchZipCode, setSearchZipCode] = React.useState("1234567890");
  
  const [selectedZip, setSelectedZip] = React.useState(null)

  const dispatch = useDispatch();

  const handleSelectionChange = (newSelection: string | any[]) => {
    setSelectedRowId(newSelection.length > 0 ? newSelection[0] : null);
  };

  const rowData = rows.result;
  

  

  const { data, isLoading } = useGetZipCodeDatasQuery({
    searchZipCode,
  });

  React.useEffect(() => {
    if(rowData.length == 1){
      setSelectedZip(rowData[0].zip)
    }else if (selectedRowId !== null) {
      const selectedRowData = rowData.find((row) => row.id === selectedRowId);
      setSelectedZip(selectedRowData?.zip || null);
    }
  }, [selectedRowId, rowData]);
  
  React.useEffect(() => {
    if (selectedZip !== null) {
      setSearchZipCode(selectedZip);
    }
  }, [selectedZip, searchZipCode]);
  
  React.useEffect(() => {
    if (data !== undefined && data !== null && data.message !== "no match" && !isLoading) {
      console.log(data)
      dispatch(setZipCodeData(data));
      navigate("/inner/statesdemo");
    }
  }, [data, isLoading, dispatch, navigate]);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        sx={{ backgroundColor: "#ffffff" }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        rowSelectionModel={selectedRowId ? [selectedRowId] : []}
        onRowSelectionModelChange={handleSelectionChange}
      />
    </div>
  );
};

export default DataTable;
