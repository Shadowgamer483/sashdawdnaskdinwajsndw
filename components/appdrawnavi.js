import React from "react"
import {createDrawerNavigator}from "react-navigation-drawer"
import {AppTabNavigator}from "./AppTabNavigator"
import Costomsidebarmenue from "./costomsidebarmenue"
import Settingscreen from "../screens/settingscreen"
export const Appdrawnavigator=createDrawerNavigator({

Home:{screen:AppTabNavigator},

Setting:{screen:{Settingscreen}}

},
{contentComponent:Costomsidebarmenue},{

initialRoutName:"Home"


}


)



























