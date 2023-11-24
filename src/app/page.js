import React from "react";

import Search from "./component/Search";
import Chatheader from "./component/Chatheader";
import Chatmember from "./component/Chatmember";
import Chatbox from "./component/Chatbox";

const Home = () => {
    return (
        <div className="m-10 h-screen">
            <div className="flex flex-row w-full">
                <div className="flex-1 w-[25%] p-4 border border-gray-600"><Search /></div>
                <div className="w-[75%] p-4 border border-gray-600"><Chatheader /></div>
            </div>
            <div className="flex flex-row h-3/4 w-full">
                <div className="flex-1 overflow-y-scroll scroll-smooth no-scrollbar border border-gray-600 "><Chatmember /></div>
                <div className="flex p-4 border border-gray-600 h-full w-3/4"><Chatbox /></div>
            </div>
        </div>
    )
}

export default Home;