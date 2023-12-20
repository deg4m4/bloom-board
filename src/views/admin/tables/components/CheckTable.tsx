import React from "react";
import CardMenu from "../../../../components/card/CardMenu";
import Checkbox from "../../../../components/checkbox";
import Card from "../../../../components/card";

import InputField from "../../../../components/fields/InputField";

type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
};

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Check Table
        </div>

        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                name
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                photos
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                progress
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                quantity
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              <th className="border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-[#ffffff33]">
                date
              </th>
              
            </tr>

          </thead>
          <tbody>

            {tableData.map((r: RowObj, r_i: number) => {
              return (

                <tr id={r_i.toString()} >

                  <td
                    className="border-white/0 py-3  pr-4 "
                  >
                    <Checkbox checked={r.name[1]} />
                  </td>

                  <td
                    className=" border-white/0 py-3  pr-4 "
                  >
                   <img
  src="/src/assets/img/avatars/avatar4.png"
  className="h-12 w-12 rounded-full"
  alt="avatar"
/>
                  </td>
                  
                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    <p className="block m-0">
                      {r.name[0]}
                    </p>
                    <p className="text-sm m-0">
                      {r.name[0]}
                    </p>
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    <InputField variant="" id={`i_${r_i}`} label="" extra="" placeholder="" />
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                  <td
                    className="min-w-[150px] border-white/0 py-3  pr-4 "
                  >
                    {r.date}
                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CheckTable;
