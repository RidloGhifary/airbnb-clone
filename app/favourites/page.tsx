import getCurrentUser from "@/actions/getCurrentUser";
import getFavouriteListings from "@/actions/getFavouriteListings";
import EmptyState from "@/components/EmptyState";
import FavouritesClient from "./_components/FavouritesClient";
import ClientOnly from "@/components/ClientOnly";

export default async function FavouritesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />;
      </ClientOnly>
    );
  }

  const favourites = await getFavouriteListings();

  if (favourites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites found"
          subtitle="Looks like you have no favourites"
        />
      </ClientOnly>
    );
  }

  return <FavouritesClient listings={favourites} currentUser={currentUser} />;
}
