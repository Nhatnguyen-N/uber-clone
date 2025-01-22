import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

type Props = {};

const Home = (props: Props) => {
  return <Redirect href={`/(auth)/welcome`} />;
};

export default Home;
