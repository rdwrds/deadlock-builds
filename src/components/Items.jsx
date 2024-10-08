import TierGrid from "./TierGrid"
import TierLabel from "./TierLabel"
import { useContext } from "react"
import { TabContext } from "./TabContext"
import { colors } from "../Colors"

const Items = () => {
  const { currentTab, setCurrentTab, getCurrentStyle } = useContext(TabContext);

  return (
    <div className="items" style={getCurrentStyle(currentTab)}>
      <TierLabel tier={1} key={1}/>
      <TierGrid tier={1} key = {2}/>
      <TierLabel tier={2} key = {3}/>
      <TierGrid tier={2} key = {4}/>
      <TierLabel tier={3} key = {5}/>
      <TierGrid tier={3} key = {6}/>
      <TierLabel tier={4} key = {7}/>
      <TierGrid tier={4} key = {8}/>
    </div>
  )
}
export default Items