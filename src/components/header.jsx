import UserData from "./userData";

export default function Header(){
    return(
        <div className="bg-red-500">
            <h1 className="text-[30px] font-bold text-blue-700">Crystal Beauty Clear</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia laborum est error culpa, a ducimus magnam debitis nesciunt earum, fugiat velit sapiente hic accusantium autem libero voluptas. Quia, dolorem?</p>
            <UserData></UserData>
        </div>
    )
}