import { useState } from "react";
import { DateNameUserInput } from "./DateNameUserInput";
import { BirthdayYearDropdown } from "./BirthdayYearDropdown";
import './Birthday.scss'
import PdfButton from "./PdfButton";
import { MarsViewer } from "../marsPhotoViewer/marsViewer";

export function Birthday(){
    const [name, setName] = useState("");
	const [birthday, setBirthday] = useState("")
    const [selectedYear, setSelectedYear] = useState("");

    function handleSubmit(event:any){
        event.preventDefault();
    }

    return(
        <main>
            <h1 className="birthday-title">Capture the Magic of Your Birthday on Mars:</h1>
            <h2 className="birthday-subtitle">Enter Your Name and Birthday to Receive Your Personalized Martian Photos!</h2>
            <DateNameUserInput setName={setName} setBirthday={setBirthday} handleSubmit={handleSubmit}/>
            <div><BirthdayYearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear}/></div>
            <div><MarsViewer /></div>
            <PdfButton />
        </main>
    )
}