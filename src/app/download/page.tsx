"use client";
import { useState, useEffect, useMemo } from "react";
import { Disc2, ChevronDownIcon } from "lucide-react";
// jeez its slow
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
  const [mirrorUrl, setMirrorUrl] = useState("");
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
            {/* todo: mirrorlist dropdown box*/}
            <div className="relative inline-block flex-row">
              <select
                defaultValue={mirrorUrl}
                value={mirrorUrl}
                onChange={(e) => setMirrorUrl(e.target.value)}
                className="mx-20 appearance-none border-none focus:ring-4 ring-overlay2 ring-offset-4 ring-offset-base rounded-lg w-96 text-center p-2 mt-2 bg-surface0 focus:outline-none mb-5"
              >
                <option value="https://dl.example.com/">
                  https://dl.example.com/
                </option>
                <option value="https://dl.example.com/">
                  https://dl.example.com/
                </option>
                <option value="https://dl.example.com/">
                  https://dl.example.com/
                </option>
              </select>
              <ChevronDownIcon className="text-subtext0 absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"  />
            </div>
          </div>
          <table className="table-auto w-full text-left border-collapse">
            <tbody>
              {filteredBoards.map((board) => (
                <tr key={board}>
                  <td
                    className={`px-4 py-2 bg-mantle hover:bg-crust ${filteredBoards.indexOf(board) === 0 && "rounded-t-lg"} ${filteredBoards.indexOf(board) === filteredBoards.length - 1 && "rounded-b-lg"}`}
                  >
                    <a
                      // file path - pls fix when ready for release.
                      href={mirrorUrl + board}
                      className="text-subtext0 hover:text-subtext1 outline-none border-none focus:ring-4 ring-subtext0 ring-offset-4 ring-offset-base flex items-center"
                    >
                      <Disc2 className="h-5 w-5 mr-2" />
                      {board}
                    </a>
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
