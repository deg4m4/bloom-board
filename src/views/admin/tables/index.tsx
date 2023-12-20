import tableDataCheck from "./variables/tableDataCheck";
import Table from "./components/Table";

const Tables = () => {
  return (
    <div>
      <div className="mt-5">
        <Table tableData={tableDataCheck} />
      </div>

    </div>
  );
};

export default Tables;
