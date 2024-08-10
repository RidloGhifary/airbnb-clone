import getCurrentUser from "@/actions/getCurrentUser";
import getFavouriteListings from "@/actions/getFavouriteListings";
import EmptyState from "@/components/EmptyState";
import FavouritesClient from "./_components/FavouritesClient";

export default async function FavouritesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const favourites = await getFavouriteListings();

  if (favourites.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourites"
      />
    );
  }

  return <FavouritesClient listings={favourites} currentUser={currentUser} />;
}
