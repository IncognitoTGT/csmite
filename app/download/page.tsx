"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Disc2 } from "lucide-react";
export default function Download() {
  const devices = useMemo<
    {
      board: string;
      size: number;
    }[]
  >(
    () => [
      { board: "ambassador.bin", size: 3.2 },
      { board: "brask.bin", size: 4.7 },
      { board: "brya.bin", size: 5.4 },
      { board: "clapper.bin", size: 5.1 },
      { board: "coral.bin", size: 3.4 },
      { board: "corsola.bin", size: 5.7 },
      { board: "dedede.bin", size: 4.9 },
      { board: "enguarde.bin", size: 4.1 },
      { board: "glimmer.bin", size: 4.0 },
      { board: "grunt.bin", size: 3.7 },
      { board: "hana.bin", size: 5.1 },
      { board: "hatch.bin", size: 4.2 },
      { board: "jacuzzi.bin", size: 3.5 },
      { board: "kukui.bin", size: 3.7 },
      { board: "lulu.bin", size: 7.3 },
      { board: "nami.bin", size: 4.2 },
      { board: "octopus.bin", size: 4.2 },
      { board: "orco.bin", size: 4.1 },
      { board: "pyro.bin", size: 5.7 },
      { board: "reks.bin", size: 5.0 },
      { board: "sentry.bin", size: 5.0 },
      { board: "stout.bin", size: 3.7 },
      { board: "strongbad.bin", size: 4.3 },
      { board: "tidus.bin", size: 4.1 },
      { board: "ultima.bin", size: 4.3 },
      { board: "volteer.bin", size: 4.7 },
      { board: "zork.bin", size: 5.0 },
    ],
    [],
  );
  const disabledBoards = [""];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBoards, setFilteredBoards] = useState(devices);
  useEffect(() => {
    setFilteredBoards(
      devices.filter((device) =>
        device.board.toLowerCase().startsWith(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, devices]);
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
