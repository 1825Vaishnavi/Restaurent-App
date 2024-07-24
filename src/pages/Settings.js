import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function Settings(){
    const [Themes,setTheme] = useState("light")
    return(
        <div>
           <div className="section d-block">
            <h2>Preffered Themes
            </h2>
            <div className="options-container">
                <div className="option light">
                   
                    {Themes === "light" && (
                         <div className="check">
                         <FontAwesomeIcon icon={faCheck} />
 
                     </div>

                    )}
                    </div>
                    <div className="option dark">
                    <div className="check">
                        <FontAwesomeIcon icon={faCheck} />

                    </div>
                </div>

            </div>
           

        </div>
     </div>
     
    )
}