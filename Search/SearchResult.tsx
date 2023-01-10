import { useRouter } from "next/router";
import moment, { MomentInput } from "moment";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";

const SearchResult = ({ inventory }:any) => {
  console.log(inventory.name,'inventory');
  
    const redirectPage = useRouter();
  return (
    <>
                <tr
                  
                  className="cursor-pointer hover:bg-neutral-secondary-background"
                  onClick={() => {
                    redirectPage.push(`/details?id=${inventory._id}&section=item_details`);
                  }}
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">

                    <div className="h-14 w-14 flex-shrink-0">
                      <img
                        loading="lazy"
                        className="h-14 w-14 rounded-lg"
                        src={inventory.image_urls[0]}
                        alt={inventory.image_urls[0]}
                      />
                    </div>
                  </td>

                  <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                    <span className="text-sm leading-6 font-normal text-[#4B5563]">
                      {inventory.name}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
                    <span className="text-sm font-normal text-[#4B5563]">
                    {(inventory.category === "")? ("N/A"):(inventory.category)}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 lg:table-cell">
                    <span className="rounded-xl px-2 py-1 text-blue-700 text-xs leading-5 font-medium not-italic bg-[#EFF8FF]">
                      N/A
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4">
                    <span className="text-sm font-normal text-[#4B5563]">
                      N/A
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
                    <span className="text-sm font-normal text-[#4B5563]">
                      N/A
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
                    <span className="text-sm font-normal text-[#4B5563]">
                      {`${inventory.currency_code} ${inventory.price}`}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 sm:table-cell">
                    <span className="text-sm font-normal text-[#4B5563]">
                      <span key={inventory._id} className="flex flex-col gap-1">
                        <span>
                          {moment(inventory.date_updated).format("YYYY-MM-DD")}
                        </span>

                        <span>
                          {moment(inventory.date_updated).format("hh:mm:ss")}
                        </span>
                      </span>
                    </span>
                  </td>
                </tr>
    </>
  );
};

export default SearchResult;
