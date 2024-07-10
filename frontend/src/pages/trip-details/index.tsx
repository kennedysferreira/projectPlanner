import { Calendar,  MapPin,  Settings2 } from "lucide-react";
import { useState } from "react";
import { CreatActivityModal } from "./creat-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const openCreatActivityModal = () => {
    setIsCreateActivityModalOpen(true);
  };

  const closeCreatActivityModal = () => {
    setIsCreateActivityModalOpen(false);
  };

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-100" />
          <span className=" text-zinc-100">Florianópolis, Brasil</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-100" />
            <span className=" text-zinc-100">17 a 23 de Agosto</span>
          </div>
          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        < Activities 
        openCreatActivityModal={openCreatActivityModal}/>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="bg-zinc-800 w-full h-px"></div>
          <Guests/>
        </div>

        {isCreateActivityModalOpen ? (
          <CreatActivityModal
            closeCreatActivityModal={closeCreatActivityModal}
          />
        ) : null}
      </main>
    </div>
  );
}
