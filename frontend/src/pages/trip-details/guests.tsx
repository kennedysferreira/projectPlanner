import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="font-medium text-zinc-100">Jessica White</p>
            <p className="text-sm text-zinc-400  truncate ">
              jessica.white44@yahoo.com
            </p>
          </div>
          <CircleCheck className="text-lime-300 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="font-medium text-zinc-100">Dr. Rita Pacocha</p>
            <p className="text-sm text-zinc-400 truncate ">
              lacy.stiedemann@gmail.com
            </p>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-zinc-700 w-full justify-center">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
