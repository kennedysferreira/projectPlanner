import {
  ArrowRight,
  AtSign,
  Calendar,
  Mail,
  MapPin,
  Plus,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreatTripPage() {
const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "jessica.white44@yahoo.com",
  ]);

  const openGuestsInput = () => {
    setIsGuestsInputOpen(true);
  };

  const closeGuestsInput = () => {
    setIsGuestsInputOpen(false);
  };

  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
  };

  const closeGuestsModal = () => {
    setIsGuestsModalOpen(false);
  };

  const openConfirmModal = () => {
    setIsConfirmTripModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmTripModalOpen(false);
  };

  const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      alert("Email já registrado");
      event.currentTarget.reset();
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  };

  const removeEmailFromInvites = (emailToRemove: string) => {
    const newEmailsList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite([...newEmailsList]);
  };

  const creatTrip = () => {
    return navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-bgpattern bg-no-repeat bg-center bg-cover">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className=" flex items-center flex-col gap-3">
          <img src="/public/logo.svg" alt="logo planner" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>
            <div className="w-px h-6 bg-zinc-800 mr-2"></div>

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen ? (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-lg text-zinc-100">
                    {`${emailsToInvite.length} pessoa(s) convidada(s)`}
                  </span>
                ) : (
                  <span className="text-lg text-zinc-400">
                    Quem estará na viagem?
                  </span>
                )}
              </button>
              <div className="flex items-center gap-2"></div>
              <div className="w-px h-6 bg-zinc-800 mr-2"></div>
              <button
                onClick={openConfirmModal}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          ) : null}
        </div>

        <p className=" text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen ? (
      ) : null}

      {isConfirmTripModalOpen ? (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-zinc-900 px-6 py-5 rounded-xl flex flex-col gap-5 max-w-[540px] w-full shadow-shape">
            <div>
              <div className="flex justify-between">
                <h2 className="text-white text-lg font-semibold ">
                  Confirmar criação da viagem
                </h2>
                <button onClick={closeGuestsModal}>
                  <X
                    onClick={closeConfirmModal}
                    className="size-5 text-zinc-400"
                  />
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

            <form className="flex flex-col gap-2">
              <div className=" bg-zinc-950 rounded-xl flex items-center shadow-shape gap-2 px-4 py-2.5">
                <User className="size-5 text-zinc-400" />
                <input
                  type="text"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className=" bg-zinc-950 rounded-xl flex items-center shadow-shape gap-2 px-5 py-2">
                <Mail className="size-5 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  placeholder="Seu e-mail pessoal"
                />
              </div>

              <button
              onClick={creatTrip}
                type="submit"
                className="bg-lime-300 text-lime-950 mt-1 rounded-lg px-5 py-2 font-medium flex justify-center gap-2 hover:bg-lime-400 w-full "
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
