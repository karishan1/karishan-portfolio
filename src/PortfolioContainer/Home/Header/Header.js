import React, { useState, useEffect } from "react";
import { TOTAL_SCREENS,GET_SCREEN_INDEX } from "../../../utilities/commonUtils";
import "./Header.css";

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
     
    const handleScroll = () =>{
        if (lastScrollY > window.scrollY){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    

    const getHeaders = () => {
        return TOTAL_SCREENS.map((screen,i) => (

            <div className = 'header-options' key = {i} onClick={() => switchScreen(i,screen)}>
                <span>{screen.screen_name}</span>
            </div>
        ))
    }

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;
    
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) return;
      };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById('home');
        if (!screenComponent) return;
    
        screenComponent.scrollIntoView({ behavior: "smooth" });
        console.log("hi")
      };

    return(
        <div className={`header-container ${isVisible ? "visible" : "hidden"}`}>
            {getHeaders()}
        </div>

        
    )

}