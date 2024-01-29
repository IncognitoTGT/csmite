"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Disc } from "lucide-react";
export default function Home() {
  const boards = useMemo(
    () => [
      "ambassador",
      "brask",
      "brya",
      "clapper",
      "coral",
      "corsola",
      "dedede",
      "enguarde",
      "glimmer",
      "grunt",
      "hana",
      "hatch",
      "jacuzzi",
      "kukui",
      "lulu",
      "nami",
      "octopus",
      "orco",
      "pyro",
      "reks",
      "sentry",
      "stout",
      "strongbad",
      "tidus",
      "ultima",
      "volteer",
      "zork",
    ],
    [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBoards, setFilteredBoards] = useState(boards);
  useEffect(() => {
    setFilteredBoards(
      boards.filter((board) =>
        board.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, boards]);
  return (
    <main
      className={`min-h-screen flex-col justify-between p-5 mx-auto overflow-y-auto bg-base`}
    >
      <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center mt-6 mx-1/2">
        Download Images
      </div>
      <div className="flex text-lg text-text font-sans justify-center items-center w-[1000px] flex-col mx-auto mt-6 mx-1/2">
        Here, you will find the Cryptosmite images for your Chromebook. These
        images are specific to your Chromebook&apos;s board, not your device
        specifically.
        <br />
        <input
          type="text"
          className="border-none focus:ring-4 ring-overlay2 ring-offset-4 ring-offset-base rounded-lg w-35 p-2 mt-2 bg-surface0 focus:outline-none mb-5"
          placeholder="Search for your board"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="table-auto w-full text-left border-collapse">
          <tbody>
            {filteredBoards.map((board) => (
              <tr key={board}>
                <td
                  className={`px-4 py-2 bg-mantle hover:bg-crust ${filteredBoards.indexOf(board) === 0 && "rounded-t-lg"} ${filteredBoards.indexOf(board) === filteredBoards.length - 1 && "rounded-b-lg"}`}
                >
                  <a
                    href={`/bin/${board}.bin`}
                    className="text-subtext0 hover:text-subtext1 outline-none border-none focus:ring-4 ring-subtext0 ring-offset-4 ring-offset-base flex items-center"
                  >
                    <Disc className="h-5 w-5 mr-2" />
                    {board}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
