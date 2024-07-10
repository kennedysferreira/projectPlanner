import { AtSign, Plus, X } from "lucide-react";

export function InviteGuestsModal() {
  
<div className="fixed inset-0 bg-black/60 flex justify-center items-center">
<div className="bg-zinc-900 px-6 py-5 rounded-xl flex flex-col gap-5 max-w-[640px] w-full shadow-shape">
  <div>
    <div className="flex justify-between">
      <h2 className="text-white text-lg font-semibold ">
        Selecionar convidados
      </h2>
      <button onClick={closeGuestsModal}>
        <X className="size-5 text-zinc-400" />
      </button>
    </div>
    <p className="text-zinc-400 text-sm mt-2">
      Os convidados irão receber e-mails para confirmar a participação
      na viagem.
    </p>
  </div>
  <div className="flex flex-wrap gap-2">
    {emailsToInvite.map((email) => {
      return (
        <div
          key={email}
          className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
        >
          <span className="text-zinc-300">{email}</span>
          <button>
            <X
              onClick={() => {
                removeEmailFromInvites(email);
              }}
              className="size-5 text-zinc-400"
            />
          </button>
        </div>
      );
    })}
  </div>
  <div className="bg-zinc-800 w-full h-px"></div>
  <form
    onSubmit={addNewEmailToInvite}
    className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3"
  >
    <div className="flex items-center gap-2 flex-1">
      <AtSign className="size-5 text-zinc-400" />
      <input
        type="email"
        name="email"
        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        placeholder="Digite o e-mail do convidado"
      />
    </div>
    <div className="w-px h-6 bg-zinc-800 mr-2"></div>
    <button
      type="submit"
      className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-lime-400"
    >
      Convidar
      <Plus className="size-5" />
    </button>
  </form>
</div>
</div>
}