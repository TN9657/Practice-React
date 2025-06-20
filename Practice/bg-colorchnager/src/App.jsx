import {useState} from 'react'
import './App.css'
function App() {
  
const [Color , setColor] = useState("red");

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:Color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex justify-start gap-3 shadow-3xl bg-white px-3 py-2 rounded-xl overflow-x-auto whitespace-nowrap max-w-full crollbar-track-white">
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1  text-white shadow-3xl  rounded-full font-bold'  style={{backgroundColor:"red"}}> Red</button>
        <button onClick={()=>setColor("green")} className='outline-none px-4 py-1  text-white shadow-3xl  rounded-full font-bold'  style={{backgroundColor:"Green"}}> Green</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1  text-white shadow-3xl  rounded-full font-bold'  style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1  text-white shadow-3xl  rounded-full font-bold'  style={{backgroundColor:"Purple"}}> Purple</button>
        <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "purple" }}>Purple</button>
 <button onClick={() => setColor("gold")} className="outline-none px-4 py-1 text-black shadow-3xl rounded-full font-bold" style={{ backgroundColor: "gold" }}>Gold</button>

  <button onClick={() => setColor("skyblue")} className="outline-none px-4 py-1 text-black shadow-3xl rounded-full font-bold" style={{ backgroundColor: "skyblue" }}>Sky Blue</button>

  <button onClick={() => setColor("indigo")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "indigo" }}>Indigo</button>

  <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "brown" }}>Brown</button>

  <button onClick={() => setColor("#FF69B4")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "#FF69B4" }}>Hot Pink</button>

  <button onClick={() => setColor("#34495e")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "#34495e" }}>Wet Asphalt</button>

  <button onClick={() => setColor("#e67e22")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "#e67e22" }}>Carrot</button>

  <button onClick={() => setColor("#9b59b6")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "#9b59b6" }}>Amethyst</button>

  <button onClick={() => setColor("#2ecc71")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "#2ecc71" }}>Emerald</button>
{/* 
  <button onClick={() => setColor("#f1c40f")} className="outline-none px-4 py-1 text-black shadow-3xl rounded-full font-bold" style={{ backgroundColor: "#f1c40f" }}>Sunflower</button>
<button onClick={() => setColor("orange")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "orange" }}>Orange</button>
  <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "pink" }}>Pink</button>
  <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 text-white shadow-3xl rounded-full font-bold" style={{ backgroundColor: "gray" }}>Gray</button>
   */}
      </div>

    </div>
    </div>
    </>
  );
};

export default App;
