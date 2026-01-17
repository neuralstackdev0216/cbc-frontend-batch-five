import { useState } from "react"

export default function TestPage(){
    const [count,setCount]=useState(0)
    const [status,setStatus]=useState("Passed")
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex justify-center items-center shadow w-[450px] h-[250px] ">
                <button onClick={()=>setCount(count-1)} className="w-[100px] h-[40px] bg-blue-600 text-white font-bold text-center text-[20px] cursor-pointer">-</button>
                <span className="text-[40px] flex justify-center items-center font-bold text-center w-[100px] h-[40px] mx-[10px]">{count}</span>
                <button onClick={()=>setCount(count+1)} className="w-[100px] h-[40px] bg-blue-600 text-white font-bold text-center text-[20px] cursor-pointer">+</button>
            </div>
            <div className="flex flex-col justify-center items-center w-[450px] h-[250px] shadow">
                <span className="text-[40px] font-bold text-center w-[100px] h-[10px] mx-[10px] flex justify-center items-center m-[10px]">{status}</span>
                <div>
                    <button onClick={()=>setStatus("Passed")} className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer m-[20px]">Passed</button>
                    <button onClick={()=>setStatus("Failed")} className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer m-[20px]">Failed</button>
                </div>
            </div>
        </div>
    )
}