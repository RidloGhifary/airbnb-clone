import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./_components/ListingClient";

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params || "");
  const currentUser = getCurrentUser();

  if (!listing) {
    <EmptyState showReset />;
  }

  return <ListingClient listing={listing} currentUser={currentUser} />;
}
