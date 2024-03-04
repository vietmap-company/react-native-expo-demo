import { SafeAreaView } from "react-native";
import Navigation from "./Navigation";
import Vietmap from "@vietmap/vietmap-gl-react-native"
Vietmap.setApiKey(null)
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation />
    </SafeAreaView>
  );
}
 
