import React from "react"

const users = [
    {id:1, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Alice',LastMessage: 'PA'},
    {id:2, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob',  LastMessage:'Hi, I am a Developer'},
    {id:3, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob2', LastMessage:'Hi, I am a Tester'},
    {id:4, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob3', LastMessage:'Hi, I am a Fr. Developer'},
    {id:5, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob4', LastMessage:'Hi, I am a BD. Developer'},
    {id:6, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob5', LastMessage:'Hi, I am a Tester'},
    {id:7, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob6', LastMessage:'Hi, I am a Fr. Developer'},
    {id:8, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob7', LastMessage:'Hi, I am a BD. Developer'},
    {id:9, Time: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`, Name: 'Bob8', LastMessage:'Hi, I am a Tester'},
]

function truncateString(str) {
    if (str.length > 15) {
        let subStr = str.substring(0, 15);
        return subStr + "...";
    } else {
        return str;
    }
}

const Chatmember = () => {
    return (
        <div className="w-full h-full ">
            {
                users.map((user, i) => {
                    return(<div key={i} className=" relative p-2 border border-gray-600 w-full flex items-centre justify-content">
                    <div className="rounded-full h-14 w-14">
                        <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
                    </div>
                    <div className="ml-6 text-white grid grid-cols-1 gap-0 items-center justify-center">
                        <p className="text-sm"><b>{user.Name}</b></p>
                        <p className="text-xs text-gray-400">You: {truncateString(user.LastMessage)}</p>
                    </div>
                    <div className="absolute text-xs text-gray-400 mr-5 mt-1 right-0">{user.Time}</div>
                    </div>)
                })
            }
            

            {/* <div className="p-2 border border-gray-600 w-full flex items-centre justify-content">
                <div className="rounded-full h-14 w-14">
                    <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
                </div>
                <div className="ml-6 text-white grid grid-cols-1  items-center justify-center">
                    <h4><b>Gordon Morales</b></h4>
                    <p>Founder & CEO</p>
                </div>
            </div>

            <div className="p-2 border border-gray-600 w-full flex items-centre justify-content">
                <div className="rounded-full h-14 w-14">
                    <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
                </div>
                <div className="ml-6 text-white grid grid-cols-1  items-center justify-center">
                    <h4><b>Gordon Morales</b></h4>
                    <p>Founder & CEO</p>
                </div>
            </div>

            <div className="p-2 border border-gray-600 w-full flex items-centre justify-content">
                <div className="rounded-full h-14 w-14">
                    <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
                </div>
                <div className="ml-6 text-white grid grid-cols-1  items-center justify-center">
                    <h4><b>Gordon Morales</b></h4>
                    <p>Founder & CEO</p>
                </div>
            </div>

            <div className="p-2 border border-gray-600 w-full flex items-centre justify-content">
                <div className="rounded-full h-14 w-14">
                    <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
                </div>
                <div className="ml-6 text-white grid grid-cols-1  items-center justify-center">
                    <h4><b>Gordon Morales</b></h4>
                    <p>Founder & CEO</p>
                </div>
            </div>

            <div className="p-2 border border-gray-600 w-full flex items-centre justify-content">
                <div className="rounded-full h-14 w-14">
                    <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
                </div>
                <div className="ml-6 text-white grid grid-cols-1  items-center justify-center">
                    <h4><b>Gordon Morales</b></h4>
                    <p>Founder & CEO</p>
                </div>
            </div> */}



        </div>
    )
}

export default Chatmember;