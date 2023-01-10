import { InventoriesStorages } from "../data/dummyData";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Inventory = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 bg-[#F3F4F6]">

      <div className="-mx-4 mt-8 overflow-hidden shadow sm:-mx-6 md:mx-0 md:rounded-lg flex flex-col gap-3 bg-white">
        <div className="rounded-lg w-3/12 h-12 border border-solid border-gray-300 flex gap-x-3 items-center py-3 px-3.5 mt-3 ml-6 ">
          <div className="pointer-events-none">
            <MagnifyingGlassIcon
              className="h-5 w-5"
              style={{ color: "#4B5563" }}
              aria-hidden="true"
            />
          </div>

          <input
            type="search"
            id="search"
            className="block w-full outline-none sm:text-sm"
            placeholder="Search code, contact"
          />
        </div>

        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="pl-4 pr-3 sm:px-6">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                  />

                  <span>Photo</span>
                </div>
              </th>

              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 w-2/6 text-left text-sm font-semibold sm:pl-6"
              >
                Item Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
              >
                Category
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
              >
                Hub
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                In Storage
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                In Delivery
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Item Price
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Last Updated
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {InventoriesStorages.map((inventory, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <input
                        type="checkbox"
                        className="left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                      />
                    </div>

                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={inventory.Photo}
                        alt={inventory.Photo}
                      />
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <span
                    className="text-sm leading-6 font-normal text-[#4B5563]"
                  >
                    {inventory.ItemName}
                  </span>
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <span
                    className="text-sm font-normal text-[#4B5563]"
                  >
                    {inventory.Category}
                  </span>
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  <span
                    className="rounded-xl px-2 py-1 text-blue-700 text-xs leading-5 font-medium not-italic bg-[#EFF8FF]">
                    {inventory.Hub}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span
                    className="text-sm font-normal text-[#4B5563]"
                  >
                    {inventory.InStorage}
                  </span>
                </td>

                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <span
                    className="text-sm font-normal text-[#4B5563]"
                  >
                    {" "}
                    {inventory.InDelivery}
                  </span>
                </td>

                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <span
                    className="text-sm font-normal text-[#4B5563]"
                  >
                    {" "}
                    {inventory.ItemPrice}
                  </span>
                </td>

                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <span
                    className="text-sm font-normal text-[#4B5563]"
                  >
                    {" "}
                    {inventory.LastUpdated}
                  </span>
                    <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
