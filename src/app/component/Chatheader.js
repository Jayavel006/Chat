import React from "react";

const Chatheader = () => {
    return (
        <div className="flex items-center justify-content">
            <div className="rounded-full h-18 w-18">
                <img className="rounded-full h-14 w-14" src="https://source.unsplash.com/random/200x200?sig=1" />
            </div>
            <div className="ml-6 w-[80%] text-white grid grid-cols-1  items-center justify-center">
                <h8><b>Gordon Morales</b></h8>
                <p>Founder & CEO</p>
            </div>
            {/* <div className="mr-52"></div> */}
            {/* <div className="ml-16 h-12 w-12 rounded-full border flex items-center justify-center"></div> */}
            <div className="flex flex-row-reverse float-right">
            
            
            <div className="ml-2 mt h-12 w-12 flex place-items-center justify-center">
                <svg fill="white" clip-rule="evenodd" fill-rule="evenodd" width="30" height="30" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z"/></svg>
            </div>
            
            <div className="ml-4 mt-1 h-10 w-10 rounded-full border flex place-items-center justify-center">
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
            </div>
            <div className="left-1 mt-1 h-10 w-10 rounded-full border flex place-items-center justify-center">
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z"/></svg>
            </div>
            </div>
        </div>
    )
}

export default Chatheader;