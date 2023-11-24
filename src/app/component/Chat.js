import React from "react";

import Messagebox from "./Messagebox";

const messages = [
    {id:2, Time: "1 hour ago", Name:"Gordon Morales", message:"Hi, How are you?", messageType:"sender"},
    {id:1, Time: "1 hour ago", Name:"Alice", message:"Hi, I'm fine", messageType:"receiver"},
    {id:2, Time: "1 hour ago", Name:"Gordon Morales", message:"How's going?", messageType:"sender"},
    {id:1, Time: "1 hour ago", Name:"Alice", message:"Its going well?", messageType:"receiver"},
    {id:2, Time: "1 hour ago", Name:"Gordon Morales", message:"Ok", messageType:"sender"},
    {id:2, Time: "1 hour ago", Name:"Gordon Morales", message:"Can you send me something?", messageType:"sender"},
    {id:1, Time: "1 hour ago", Name:"Alice", message:"What?", messageType:"receiver"},

]

const Chat = () => {
    return (
        <div className="flex flex-col justify-between w-full h-full">
            <div className="overflow-auto no-scrollbar">
                {
                    messages.map((message, i) => {
                        if (message.messageType==="sender")
                            return (
                                <div key={i} className="grid grid-cols-1 mb-3">
                                    <div className="flex items-centre justify-content">
                                        <div className="rounded-full h-9 w-9">
                                            <img className="rounded-full h-9 w-9" src="https://source.unsplash.com/random/200x200?sig=1" />
                                        </div>
                                        <div className="ml-2 text-sm text-white grid grid-cols-1  items-center justify-center">
                                            <b>{message.Name}</b>
                                        </div>
                                        <div className="ml-5 text-xs text-gray-600 grid grid-cols-1  items-center justify-center">
                                            <p>{message.Time}</p>
                                        </div>
                                    </div>
                                    <div className="ml-9 w-8/12 text-white text-xs p-2">
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            )
                        else if(message.messageType==="receiver") 
                                return (

                                    <div key={i} className="relative grid grid-cols-1 mb-3 ">
                                        <div className="flex flex-row-reverse items-center justify-content">
                                            <div className="rounded-full h-9 w-9">
                                                <img className="rounded-full h-9 w-9" src="https://source.unsplash.com/random/200x200?sig=1" />
                                            </div>
                                            <div className="mr-2 text-right text-sm text-white grid grid-cols-1  items-center justify-center">
                                                <b>{message.Name}</b>
                                            </div>
                                            <div className="mr-5 text-right text-xs text-gray-600 grid grid-cols-1  items-center justify-center">
                                                <p>{message.Time}</p>
                                            </div>
                                        </div>
                                        <div className="absolute mr-9 top-12 right-0 text-right w-8/12 text-white text-xs">
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                            )

                    })
                }
                

                

                

        
            </div>

            

            <div className="relative background w-full p-8">
                <Messagebox  />
            </div>
            
            
        </div>
    )
}

export default Chat;