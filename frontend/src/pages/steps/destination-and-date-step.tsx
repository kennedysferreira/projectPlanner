import { format } from "date-fns";
import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void,
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}
export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  const closeDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de' LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de' LLL" ))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
        onChange={event => setDestination(event.target.value)}
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 outline-none "
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-48 text-left flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>
      <div className="w-px h-6 bg-zinc-800 mr-2"></div>

      {isDatePickerOpen ? (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-zinc-900 px-6 py-5 rounded-xl flex flex-col gap-5 shadow-shape">
            <div>
              <div className="flex justify-between">
                <h2 className="text-white text-lg font-semibold ">
                  Selecione uma data
                </h2>
                <button onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
              modifiersClassNames={{
                selected: "my-selected", // Use a classe CSS personalizada
              }}
            />
          </div>
        </div>
      ) : null}

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
  );
}
