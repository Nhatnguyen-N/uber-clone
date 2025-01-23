import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const { user } = useUser();
  return <SafeAreaView></SafeAreaView>;
};

export default Home;
