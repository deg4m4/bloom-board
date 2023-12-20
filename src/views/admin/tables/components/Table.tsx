import { useEffect, useState } from "react";
import CardMenu from "../../../../components/card/CardMenu";
import Checkbox from "../../../../components/checkbox";
import Card from "../../../../components/card";
import InputField from "../../../../components/fields/InputField";
import { Pagenation, TBody, THeade, Table, Td, Th, Tr } from "../../../../components/table/Table";
import Spinner from "../../../../components/spinner/spinner";

type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
};

function TableCon(props: { tableData: any }) {

  const { tableData: tableDataMain } = props;
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const perPage = 6
  const totalPage = Math.ceil(tableDataMain.length / perPage)

  const [loadOrders, setLoadOrders] = useState(false)

  useEffect(() => {
    setLoadOrders(true)
    setData([])
    setTimeout(() => {
      setData(tableDataMain.slice(perPage * (page - 1), (perPage * page)))
      setLoadOrders(false)
    }, 1000);
  }, [page])

  return (

    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Table
        </div>
        <CardMenu />
      </header>

      <Table >
        <THeade>
          <Tr>
            <Th>
              name
            </Th>
            <Th>
              photos
            </Th>
            <Th>
              progress
            </Th>
            <Th>
              quantity
            </Th>
            <Th>
              date
            </Th>
            <Th>
              date
            </Th>
            <Th>
              date
            </Th>
            <Th>
              date
            </Th>
            <Th>
              date
            </Th>
            <Th>
              date
            </Th>
            <Th>
              date
            </Th>

          </Tr>

        </THeade>

        <TBody>

          {data.map((r: RowObj, r_i: number) => {
            return (

              <Tr id={r_i.toString()} >

                <Td>
                  <Checkbox checked={r.name[1]} />
                </Td>

                <Td>
                  <img
                    src="/src/assets/img/avatars/avatar4.png"
                    className="h-12 w-12 rounded-full"
                    alt="avatar"
                  />
                </Td>

                <Td>
                  <p className="block m-0">
                    {r.name[0]}
                  </p>
                  <p className="text-sm m-0">
                    {r.name[0]}
                  </p>
                </Td>

                <Td>
                  <InputField variant="" id={`i_${r_i}`} label="" extra="" placeholder="" />
                </Td>

                <Td>
                  {r.date}
                </Td>

                <Td>
                  {r.date}
                </Td>

                <Td>
                  {r.date}
                </Td>

                <Td>
                  {r.date}
                </Td>

                <Td>
                  {r.date}
                </Td>

                <Td>
                  {r.date}
                </Td>

                <Td>
                  {r.date}
                </Td>

              </Tr>
            )
          })}

        </TBody>

      </Table>

      {
        loadOrders &&
        <div className="h-[500px] w-full flex">
          <Spinner />
        </div>
      }

      <Pagenation
        totalPage={totalPage}
        currentPage={page}
        onChange={(e: number) => {
          setPage(e)
        }}
      />

    </Card>
  );
}



export default TableCon;
