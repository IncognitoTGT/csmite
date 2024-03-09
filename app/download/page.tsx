"use client";
import { useState, useEffect } from "react";
import devices from "./boards.json";
import Link from "next/link";
import { Disc2 } from "lucide-react";
export default function Download() {
  const disabledBoards = [""];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBoards, setFilteredBoards] = useState(devices);
  useEffect(() => {
    setFilteredBoards(
      devices.filter((device) =>
        device.board.toLowerCase().startsWith(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm]);
  return (
    <>
      <main className="flex-col p-5 mx-auto bg-base">
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center">
          Download Images
        </div>
        <div className="flex text-lg text-text font-sans justify-center items-center flex-col mx-auto mt-6 text-center">
          Here, you will find the Cryptosmite images for your Chromebook. These
          images are specific to your Chromebook&apos;s board, not just your
          device.{" "}
          <div className="font-bold text-red mt-2">
            &nbsp;If your Chromebook is not on the list, your Chromebook is not
            supported by Cryptosmite. Do not ask for support for your device.
          </div>
          <br />
          <div className="flex flex-auto">
            <input
              type="text"
              className="mx-20 border-none focus:ring-4 ring-overlay2 ring-offset-4 caret-rosewater ring-offset-base rounded-lg w-96 text-center p-2 mt-2 bg-mantle focus:outline-none mb-5"
              placeholder="Search for your board"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="table-auto w-full text-left border-collapse">
            <tbody>
              {filteredBoards.map((device) => {
                return (
                  <tr key={device.board}>
                    <td
                      className={`px-4 py-2
                      ${disabledBoards.includes(device.board) ? "bg-surface0" : "bg-surface0 hover:bg-surface1"}
                      ${filteredBoards.indexOf(device) === 0 && "rounded-t-lg"} ${
                        filteredBoards.indexOf(device) ===
                          filteredBoards.length - 1 && "rounded-b-lg"
                      }`}
                    >
                      <Link
                        {...(disabledBoards.includes(device.board)
                          ? { scroll: false }
                          : {})}
                        href={
                          disabledBoards.includes(device.board)
                            ? "#"
                            : "/download/handler/" + device.board
                        }
                        className={`${disabledBoards.includes(device.board) ? "text-surface1 cursor-not-allowed" : "text-subtext0 hover:text-subtext1"} outline-none border-none ${!disabledBoards.includes(device.board) && "focus:ring-4 ring-subtext0 ring-offset-4 ring-offset-surface0 rounded"} flex items-center justify-between`}
                      >
                        <Disc2 className="h-5 w-5 mr-2" />
                        <div className="flex items-center w-full justify-between">
                          <p className="text-left">{device.board}</p>
                          <p className="text-right pr-4">
                            {device.size + " GiB"}
                          </p>
                        </div>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
