import { RouteProp } from "@react-navigation/native";
import { Todo } from "../models/models";

export type MainStackParamList = {
  Home: undefined;
  Details: { todo: Todo };
  Settings: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">
