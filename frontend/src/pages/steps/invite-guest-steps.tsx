import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestStepsProps {
  openGuestsModal: () => void;
  openConfirmModal: () => void;
  emailsToInvite: string[];
}
export function InviteGuestSteps({
  openGuestsModal,
  emailsToInvite,
  openConfirmModal,
}: InviteGuestStepsProps) {
  return (
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
          <span className="text-lg text-zinc-400">Quem estará na viagem?</span>
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
  );
}
