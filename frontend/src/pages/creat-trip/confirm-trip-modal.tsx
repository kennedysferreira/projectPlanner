import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeGuestsModal: () => void;
  closeConfirmModal: () => void;
  creatTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void;
  setOwnerEmail: (ownerEmail: string) => void;
}

export function ConfirmTripModal({
  closeGuestsModal,
  closeConfirmModal,
  creatTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-zinc-900 px-6 py-5 rounded-xl flex flex-col gap-5 max-w-[540px] w-full shadow-shape">
        <div>
          <div className="flex justify-between">
            <h2 className="text-white text-lg font-semibold ">
              Confirmar criação da viagem
            </h2>
            <button onClick={closeGuestsModal}>
              <X onClick={closeConfirmModal} className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm mt-2">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={creatTrip} className="flex flex-col gap-2">
          <div className=" bg-zinc-950 rounded-xl flex items-center shadow-shape gap-2 px-4 py-2.5">
            <User className="size-5 text-zinc-400" />
            <input
              onChange={(event) => setOwnerName(event.target.value)}
              type="text"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Seu nome completo"
            />
          </div>

          <div className=" bg-zinc-950 rounded-xl flex items-center shadow-shape gap-2 px-5 py-2">
            <Mail className="size-5 text-zinc-400" />
            <input
              onChange={(event) => setOwnerEmail(event.target.value)}
              type="email"
              name="email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Seu e-mail pessoal"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 mt-1 rounded-lg px-5 py-2 font-medium flex justify-center gap-2 hover:bg-lime-400 w-full "
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}
