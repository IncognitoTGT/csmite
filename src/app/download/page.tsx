"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Disc2 } from "lucide-react";
import NavBar from "../NavBar";
export default function Download() {
  const boards = useMemo(
    () => [
      "ambassador.bin",
      "brask.bin",
      "brya.bin",
      "clapper.bin",
      "coral.bin",
      "corsola.bin",
      "dedede.bin",
      "enguarde.bin",
      "glimmer.bin",
      "grunt.bin",
      "hana.bin",
      "hatch.bin",
      "jacuzzi.bin",
      "kukui.bin",
      "lulu.bin",
      "nami.bin",
      "octopus.bin",
      "orco.bin",
      "pyro.bin",
      "reks.bin",
      "sentry.bin",
      "stout.bin",
      "strongbad.bin",
      "tidus.bin",
      "ultima.bin",
      "volteer.bin",
      "zork.bin",
    ],
    [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBoards, setFilteredBoards] = useState(boards);
  useEffect(() => {
    setFilteredBoards(
      boards.filter((board) =>
        board.toLowerCase().startsWith(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, boards]);
  // alert() / console.log() best debugger trust
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex-col justify-between p-5 mx-auto  bg-base">
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Download Images
        </div>
        <div className="flex text-lg text-text font-sans justify-center items-center w-[1000px] flex-col mx-auto mt-6 ">
          Here, you will find the Cryptosmite images for your Chromebook. These
          images are specific to your Chromebook&apos;s board, not just your
          device.
          <br />
          <div className="flex flex-auto">
            <input
              type="text"
              className="mx-20 border-none focus:ring-4 ring-overlay2 ring-offset-4 caret-rosewater ring-offset-base rounded-lg w-96 text-center p-2 mt-2 bg-surface0 focus:outline-none mb-5"
              placeholder="Search for your board"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="table-auto w-full text-left border-collapse">
            <tbody>
              {filteredBoards.map((board) => (
                <tr key={board}>
                  <td
                    className={`px-4 py-2 bg-mantle hover:bg-crust ${filteredBoards.indexOf(board) === 0 && "rounded-t-lg"} ${filteredBoards.indexOf(board) === filteredBoards.length - 1 && "rounded-b-lg"}`}
                  >
                    <Link
                      // file path - pls fix when ready for release.
                      href={"/download/handler/" + board}
                      className="text-subtext0 hover:text-subtext1 outline-none border-none focus:ring-4 ring-subtext0 ring-offset-4 ring-offset-base flex items-center"
                    >
                      <Disc2 className="h-5 w-5 mr-2" />
                      {board}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
