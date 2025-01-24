import { Image } from "react-native";

export const HomeIcon = ({ color }: { color: any }) => {
  return (
    <Image source={require("../assets/icons/home.svg")} tintColor={color} />
  );
};

export const AlbumIcon = ({ color }: { color: any }) => {
  return (
    <Image source={require("../assets/icons/library.svg")} tintColor={color} />
  );
};
export const RoomsIcon = ({ color }: { color: any }) => {
  return (
    <Image source={require("../assets/icons/rooms.svg")} tintColor={color} />
  );
};
export const PersonIcon = ({ color }: { color: any }) => {
  return (
    <Image source={require("../assets/icons/person.svg")} tintColor={color} />
  );
};
export const LogoIcon = () => {
  return (
    <Image
      source={require("../assets/images/Thunder_logo.png")}
      style={{
        width: 38,
        height: 38,
        marginLeft: 10,
        marginTop: 12,
        marginRight: 5,
      }}
    />
  );
};
