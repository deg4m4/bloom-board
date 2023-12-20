import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";

const Tables = () => {
  return (
    <div>
      <div className="mt-5">
        <CheckTable tableData={tableDataCheck} />
      </div>

    </div>
  );
};

export default Tables;
