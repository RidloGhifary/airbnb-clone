import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservation";
import ReservationsClient from "./_components/ReservationsClient";

export default async function ReservationsPage() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const reservations = await getReservations({ authorId: currentUser.id });

    if (reservations.length === 0) {
      return (
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties"
        />
      );
    }

    return (
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    );
  } catch (error) {
    console.error("Error occurred while fetching reservations:", error);
    return <EmptyState title="Error" subtitle="Something went wrong" />;
  }
}
