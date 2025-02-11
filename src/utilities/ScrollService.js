import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from rxjs;

export default class ScrollService{

    static scrollHandler = new ScrollService();
    
    static currentScreenBroadcaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenViewport);
    }

    scrollToContactMe = ()=>{
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToHome = ()=>{
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }
}