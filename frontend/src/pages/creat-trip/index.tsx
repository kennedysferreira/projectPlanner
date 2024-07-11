import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "../steps/destination-and-date-step";
import { InviteGuestSteps } from "../steps/invite-guest-steps";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreatTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([]);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

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

  async function creatTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!destination) {
      return;
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      return;
    }

    if (emailsToInvite.length === 0) {
      return;
    }

    if (!ownerName || !ownerEmail) {
      return;
    }

    const response = await api.post("/trips", {
      destination,
      starts_at: eventStartAndEndDates?.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    console.log('Response:', response.data);

    const { tripID } = response.data;
    navigate(`/trips/${tripID}`);
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
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />

          {isGuestsInputOpen ? (
            <InviteGuestSteps
              openGuestsModal={openGuestsModal}
              openConfirmModal={openConfirmModal}
              emailsToInvite={emailsToInvite}
            />
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
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      ) : null}

      {isConfirmTripModalOpen ? (
        <ConfirmTripModal
          closeGuestsModal={closeGuestsModal}
          closeConfirmModal={closeConfirmModal}
          creatTrip={creatTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      ) : null}
    </div>
  );
}
