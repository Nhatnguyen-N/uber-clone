import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

type Props = {};

const Home = (props: Props) => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href={"/(root)/(tabs)/home"} />;

  return <Redirect href={`/(auth)/welcome`} />;
};

export default Home;
