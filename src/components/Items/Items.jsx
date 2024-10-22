import {TierGrid, TierLabel} from "../../components"
import { useContext } from "react"
import { TabContext } from "../../components"
import { colors } from "../../Colors"
import './Items.css'

const Items = () => {
  const { currentTab, setCurrentTab, getCurrentStyle } = useContext(TabContext);

  return (
    <div className="items" style={getCurrentStyle(currentTab, 600)}>
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