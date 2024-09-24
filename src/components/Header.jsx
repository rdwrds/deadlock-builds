import data from "../sorted_deadlock_items_condis.json"

const Header = () => {
  const handleButtonClick = () => {
    const arr = Object.entries(data);
    arr.map((key, value) => {
      console.log(key[0]);
    }) 
   }

  return (
    <div class="header">
      <button onClick={handleButtonClick}>data</button>
    </div>
  )
}
export default Header