import axios from "axios";

// import { useEffect, useState } from "react";

// import {
//   QuestionMarkCircleIcon,
//   MagnifyingGlassIcon,
//   CalendarDaysIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/20/solid";

// import Link from "next/link";

// import DateRangePicker from "../components/DateRangePicker";

// import moment from "moment";

// import Search from "../components/Search";

// import { useRouter } from "next/router";

// import Head from "next/head";

// interface InventoryTableData {
//   _id: string;
//   name: string;
//   image_urls: string;
//   category: string;
//   hub: string;
//   in_storage: number;
//   in_delivery: number;
//   price: string;
//   currency_code: string;
//   date_updated: Date | number;
// }

// const Inventory = () => {

//   const [userStateData, setUsersStateData] = useState<InventoryTableData[]>([]);

//   const redirectPage = useRouter();
  
//   useEffect(() => {
//     const fetchUsersData = async () => {
//       try {
//         const usersData = await axios.get(
//           `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/products/owner/${redirectPage.query.id}`
//           );
//           console.log(redirectPage.query.id,'redirectPage');
//           const { data } = usersData;
//           console.log(data,'red');

//         setUsersStateData(data.responses);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUsersData();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Inventory</title>
//         <meta name="keywords" content="inventory" />
//       </Head>
      
//       <main className="flex flex-col gap-6 p-6 sm:px-6 lg:px-8 min-w-full bg-[#F3F4F6] min-h-screen">
//         {/* date and time, wirehouse and button section start */}
//         <div className="sm:flex sm:items-center justify-between">
//           {/* date and time section */}
//           <div className="flex gap-2">
//             <div
//               className="py-[9px] pl-4 pr-6  divide-y divide-gray-200 rounded-lg bg-white"
//               style={{ boxShadow: " 0px 1px 2px rgba(16, 24, 40, 0.05)" }}
//             >
//               <div className="flex  items-center h-12 gap-[9.25px]">
//                 <CalendarDaysIcon
//                   className="h-5 w-5 text-[#6B7280]"
//                   aria-hidden="true"
//                   />
//                   <DateRangePicker
//                   start_date={moment().toDate()}
//                   end_date={moment().toDate()}
//                   onChange={function ([start, end]: [number, number]): void {}}
//                 />
//               </div>
//             </div>

//             {/* warehouse section  */}
//             <div
//               className="py-[9px] pl-4 pr-6  divide-y divide-gray-200 rounded-lg bg-white"
//               style={{ boxShadow: " 0px 1px 2px rgba(16, 24, 40, 0.05)" }}
//             >
//               <div className="flex  items-center h-12 gap-[9.25px]">
//                 <span className="truncate text-sm leading-[22] font-medium text-[#0A0A0A]">
//                   All warehouses
//                 </span>

//                 <ChevronDownIcon
//                   className="h-5 w-5 text-[#374151]"
//                   aria-hidden="true"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* button section  */}
//           <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
//             >
//               Request Pickup
//             </button>
//           </div>
//         </div>
//         {/* date and time, wirehouse and button section ends */}

//         {/* cards section for incomin, storage section  */}
//         <ul
//           role="list"
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           <li
//             className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
//             style={{ boxShadow: " 0px 1px 2px rgba(16, 24, 40, 0.05)" }}
//           >
//             <div className="flex w-full h-[110px] items-center space-x-6 pl-6">
//               <div className="flex-1 truncate">
//                 <div className="flex gap-1.5 items-center">
//                   <h3 className="truncate text-sm font-normal text-neutral-placeholder">
//                     Incoming Items
//                   </h3>

//                   <QuestionMarkCircleIcon
//                     className="h-5 w-5 text-neutral-disabled-icon"
//                     aria-hidden="true"
//                   />
//                 </div>

//                 <p className="pt-4 truncate text-2xl font-medium text-[#0A0A0A]">
//                   40
//                 </p>
//               </div>
//             </div>
//           </li>

//           <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
//             <div className="flex w-full h-[110px] items-center space-x-6 pl-6">
//               <div className="flex-1 truncate">
//                 <div className="flex items-center gap-1.5">
//                   <h3 className="truncate text-sm font-normal text-neutral-placeholder">
//                     In Storage
//                   </h3>

//                   <QuestionMarkCircleIcon
//                     className="h-5 w-5 text-neutral-disabled-icon"
//                     aria-hidden="true"
//                   />
//                 </div>

//                 <p className="pt-4 truncate text-2xl font-medium text-[#0A0A0A]">
//                   173
//                 </p>
//               </div>
//             </div>
//           </li>

//           <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
//             <div className="flex w-full h-[110px] items-center space-x-6 pl-6">
//               <div className="flex-1 truncate">
//                 <div className="flex items-center gap-1.5">
//                   <h3 className="truncate text-sm font-normal text-neutral-placeholder">
//                     Items in Storage
//                   </h3>

//                   <QuestionMarkCircleIcon
//                     className="h-5 w-5 text-neutral-disabled-icon"
//                     aria-hidden="true"
//                   />
//                 </div>

//                 <p className="pt-4 truncate text-2xl font-medium text-[#0A0A0A]">
//                   GHS 10,859.00
//                 </p>
//               </div>
//             </div>
//           </li>
//         </ul>

//         <div className="-mx-4 overflow-hidden shadow sm:-mx-6 md:mx-0 md:rounded-lg flex flex-col gap-3 bg-white">
//           <div className="rounded-lg sm:w-3/12 w-4/12 h-12 border border-solid border-gray-300 flex gap-x-3 items-center py-3 px-3.5 mt-3 ml-6 ">
//             <div className="pointer-events-none">
//               <MagnifyingGlassIcon
//                 className="h-5 w-5 text-[#4B5563]"
//                 aria-hidden="true"
//               />
//             </div>

//             <Search searhInventoryByName={userStateData} />
//           </div>

//           {/* tables section start */}
//           <table className="min-w-full table-fixed divide-y border-b-[1px] border-gray-300 divide-gray-300">
//             {/* table header */}
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="pl-4 pr-3 sm:px-6">
//                   {/* <div className="flex items-center gap-3">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 sm:left-6"
//                     /> */}

//                   <span>Photo</span>
//                   {/* </div> */}
//                 </th>
//                 <th
//                   scope="col"
//                   className="py-3.5 pl-4 pr-3 w-2/6 text-left text-sm font-semibold sm:pl-6"
//                 >
//                   Item Name
//                 </th>

//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold sm:table-cell"
//                 >
//                   Category
//                 </th>

//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
//                 >
//                   Hub
//                 </th>

//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold"
//                 >
//                   In Storage
//                 </th>

//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold"
//                 >
//                   In Delivery
//                 </th>

//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold"
//                 >
//                   Item Price
//                 </th>

//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold"
//                 >
//                   Last Updated
//                 </th>
//               </tr>
//             </thead>

//             {/* table body  */}
//             <tbody className="divide-y divide-gray-200 bg-white">
//               {userStateData.map((inventory) => (
//                 <tr
//                   key={inventory._id}
//                   className="cursor-pointer hover:bg-neutral-secondary-background"
//                   onClick={() => {
//                     redirectPage.push(`/details?id=${inventory._id}&section=item_details`);
//                   }}
//                 >
//                   {/* <Link href={`/${inventory._id}`}> */}
//                   <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
//                     {/* <div className="flex items-center gap-3"> */}
//                     {/* <div>
//                         <input
//                           type="checkbox"
//                           className="left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
//                         />
//                       </div> */}

//                     <div className="h-14 w-14 flex-shrink-0">
//                       <img
//                         loading="lazy"
//                         className="h-14 w-14 rounded-lg"
//                         src={inventory.image_urls[0]}
//                         alt={inventory.image_urls[0]}
//                       />
//                     </div>
//                     {/* </div> */}
//                   </td>

//                   <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
//                     <span className="text-sm leading-6 font-normal text-[#4B5563]">
//                       {inventory.name}
//                     </span>
//                   </td>

//                   <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
//                     <span className="text-sm font-normal text-[#4B5563]">
//                     {(inventory.category === "")? ("N/A"):(inventory.category)}
//                     </span>
//                   </td>

//                   <td className="whitespace-nowrap px-3 py-4 lg:table-cell">
//                     <span className="rounded-xl px-2 py-1 text-blue-700 text-xs leading-5 font-medium not-italic bg-[#EFF8FF]">
//                       N/A
//                     </span>
//                   </td>

//                   <td className="whitespace-nowrap px-3 py-4">
//                     <span className="text-sm font-normal text-[#4B5563]">
//                       N/A
//                     </span>
//                   </td>

//                   <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
//                     <span className="text-sm font-normal text-[#4B5563]">
//                       N/A
//                     </span>
//                   </td>

//                   <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
//                     <span className="text-sm font-normal text-[#4B5563]">
//                       {`${inventory.currency_code} ${inventory.price}`}
//                     </span>
//                   </td>

//                   <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
//                     <span className="text-sm font-normal text-[#4B5563]">
//                       <span key={inventory._id} className="flex flex-col gap-1">
//                         <span>
//                           {moment(inventory.date_updated).format("YYYY-MM-DD")}
//                         </span>

//                         <span>
//                           {moment(inventory.date_updated).format("hh:mm:ss")}
//                         </span>
//                       </span>
//                     </span>
//                   </td>
//                   {/* </Link> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* table section ends here  */}

//           {/* pagination section start */}
//           <div className="pl-6 py-4 sm:pl-6" aria-label="Pagination">
//             <div className="flex gap-4">
//               <Link
//                 href="#"
//                 className="flex gap-1 items-center rounded-md border border-solid border-gray-300 bg-white pr-4 pl-2 py-3 text-sm font-normal text-[#374151] hover:bg-gray-50"
//               >
//                 <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />

//                 <span className="text-sm font-normal">Prev</span>
//               </Link>

//               <div className="flex gap-1 items-center bg-white text-[#374151] pr-4 pl-2 py-3 text-sm font-medium">
//                 <span>1 - 2 of</span>

//                 <span>2</span>
//               </div>

//               <Link
//                 href="#"
//                 className="flex gap-1 items-center rounded-md border border-gray-300 bg-white text-[#374151] pr-4 pl-2 py-3 text-sm font-medium hover:bg-gray-50"
//               >
//                 <span>Next</span>

//                 <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//               </Link>
//             </div>
//           </div>
//           {/* pagination section ends here */}
//         </div>
//       </main>
//     </>
//   );
// };

// export default Inventory;
