import { Calendar, Tag, X } from "lucide-react";

interface CreatActivityModalProps {
  closeCreatActivityModal: () => void;
}

export function CreatActivityModal({
  closeCreatActivityModal,
}: CreatActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-zinc-900 px-6 py-5 rounded-xl flex flex-col gap-5 max-w-[540px] w-full shadow-shape">
        <div>
          <div className="flex justify-between">
            <h2 className="text-white text-lg font-semibold ">
              Cadastrar atividade
            </h2>
            <button>
              <X
                onClick={closeCreatActivityModal}
                className="size-5 text-zinc-400"
              />
            </button>
          </div>
          <p className="text-zinc-400 text-sm mt-2">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="flex flex-col gap-2">
          <div className=" bg-zinc-950 rounded-xl flex items-center shadow-shape gap-2 px-4 py-2.5">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Qual a atividade?"
            />
          </div>

          <div className=" bg-zinc-950 rounded-xl flex items-center shadow-shape gap-2 px-5 py-2 ">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs-at"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="20 de agosto"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 mt-1 rounded-lg px-5 py-2 font-medium flex justify-center gap-2 hover:bg-lime-400 w-full "
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  );
}
