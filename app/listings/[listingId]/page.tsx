import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./_components/ListingClient";
import getReservation from "@/actions/getReservation";
import ClientOnly from "@/components/ClientOnly";

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservations = await getReservation(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    <ClientOnly>
      <EmptyState
        showReset
        title="Invalid listing"
        subtitle="Try again later"
      />
      ;
    </ClientOnly>;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
}
