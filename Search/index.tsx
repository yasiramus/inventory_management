import axios from "axios";

import { useCallback, useEffect, useState } from "react";

import {
  QuestionMarkCircleIcon,
  // ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { motion, AnimatePresence } from "framer-motion"

import { useRouter } from "next/router";

// import Search from "../components/Search/Search";

import Head from "next/head";

import Pagination from "../components/Table.tsx/Pagination";
// import SearchResult from "../components/Search/SearchResult";
import TableBody from "../components/Table.tsx/TableBody";
import TableHead from "../components/Table.tsx/TableHead";

interface InventoryTableData {
  _id: string;
  name: string;
  image_urls: string;
  category: string;
  warehouse: string;
  in_storage: number;
  in_delivery: number;
  price: string;
  currency_code: string;
  date_updated: Date | number;
}

const Inventory = () => {
  const redirectPage = useRouter();

  const [userStateData, setUsersStateData] = useState<InventoryTableData[]>([]);

  const [paginationData, setPaginationData] = useState<any>({});

  const fetchUsersData = useCallback(
    async (page_number: number = 0) => {
      const usersData = await axios.get(
        `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/products/owner/${redirectPage.query.id}?page_number=${page_number}&limits=10&meta=true`
      );

      setUsersStateData(usersData.data.responses.docs);

      const { page, nextPage, limit, prevPage, totalDocs, totalPages } =
        usersData.data.responses;

      setPaginationData({
        page,
        nextPage,
        limit,
        prevPage,
        totalDocs,
        totalPages,
      });
    },
    [redirectPage]
  );

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  return (
    <>
      <Head>
        <title>Inventory</title>

        <meta name="keywords" content="inventory" />
      </Head>

      <main className="lg:flex lg:flex-col gap-y-6 p-6 sm:px-6 lg:px-8 min-w-full bg-[#F3F4F6] min-h-screen">
        {/* cards section for incomin, storage section  */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3"
        >
          <li
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
            style={{ boxShadow: " 0px 1px 2px rgba(16, 24, 40, 0.05)" }}
          >
            <div className="flex w-full h-[100px] items-center space-x-6 pl-6">
              <div className="flex-1 truncate">
                <div className="flex gap-1.5 items-center">
                  <h3 className="truncate text-sm font-normal text-neutral-placeholder">
                    Incoming Items
                  </h3>

                  <QuestionMarkCircleIcon
                    className="h-5 w-5 text-neutral-disabled-icon"
                    aria-hidden="true"
                  />
                </div>

                <p className="pt-4 truncate text-2xl font-medium text-[#0A0A0A]">
                  40
                </p>
              </div>
            </div>
          </li>

          <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full h-[100px] items-center space-x-6 pl-6">
              <div className="flex-1 truncate">
                <div className="flex items-center gap-1.5">
                  <h3 className="truncate text-sm font-normal text-neutral-placeholder">
                    In Storage
                  </h3>

                  <QuestionMarkCircleIcon
                    className="h-5 w-5 text-neutral-disabled-icon"
                    aria-hidden="true"
                  />
                </div>

                <p className="pt-4 truncate text-2xl font-medium text-[#0A0A0A]">
                  173
                </p>
              </div>
            </div>
          </li>

          <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full h-[100px] items-center space-x-6 pl-6">
              <div className="flex-1 truncate">
                <div className="flex items-center gap-1.5">
                  <h3 className="truncate text-sm font-normal text-neutral-placeholder">
                    Value of Items in storage
                  </h3>

                  <QuestionMarkCircleIcon
                    className="h-5 w-5 text-neutral-disabled-icon"
                    aria-hidden="true"
                  />
                </div>

                <p className="pt-4 truncate text-2xl font-medium text-[#0A0A0A]">
                  GHS 10,859.00
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className="lg:mt-0 mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow sm:-mx-6 md:mx-0 rounded-lg flex flex-col gap-3 bg-white">
                {/* <Search
            onSearch={(keyword) => {
              console.log("search term: ", keyword);
            }}
          /> */}

                <table className="min-w-full table-fixed divide-y border-b-[1px] border-gray-300 divide-gray-300">
                  {/* table header */}
                  <thead className="bg-gray-50">
                    <TableHead />
                  </thead>

                  {/* table body  */}
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <TableBody userStateData={userStateData} />
                  </tbody>
                </table>

                <div
                  className="pl-6 pb-4 sm:pl-6 w-max"
                  aria-label="Pagination"
                >
                  <Pagination
                    paginationData={paginationData}
                    onNext={(page: number) => {
                      fetchUsersData(page);
                    }}
                    onPrevious={(page: number) => {
                      fetchUsersData(page);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Inventory;
