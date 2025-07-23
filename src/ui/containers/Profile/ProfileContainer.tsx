import { useAuth } from "@/src/domain/auth/AuthContext";
import { useAuthSignOut } from "@/src/domain/auth/operations/useAuthSignOut";
import { useNavigation } from "expo-router";
import { CityFavoriteList } from "../CityFavoriteList/CityFavoriteList";
import { ProfileFooter } from "./ProfileFooter";
import { ProfileHeader } from "./ProfileHeader";

export function ProfileContainer() {
  const { mutate: signOut } = useAuthSignOut();
  const { authUser } = useAuth();

  const navigation = useNavigation();

  function navigateToEditProfile() {
    //navigation
  }
  function navigateToEditPassword() {
    //navigation
  }

  return (
    <CityFavoriteList
      ListHeaderComponent={
        authUser && (
          <ProfileHeader
            authUser={authUser}
            navigateToEditProfile={navigateToEditProfile}
            navigateToEditPassword={navigateToEditPassword}
          />
        )
      }
      ListFooterComponent={<ProfileFooter signOut={signOut} />}
    />
  );
}
