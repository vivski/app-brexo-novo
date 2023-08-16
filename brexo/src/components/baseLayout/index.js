import { View } from "react-native";
import NavigatorTabs from "./../barraInferior";

export default function BaseLayout({children}) {
     return(
    <View style={{flex:1}}>
    {children}
    <NavigatorTabs/> 
    </View>
     )
}