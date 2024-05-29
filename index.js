
document.querySelector("#slider").addEventListener("click",()=>{
    if(document.querySelector("#groove").style.justifyContent=="flex-start"){
        document.querySelector("#groove").style.justifyContent="flex-end";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("#slider").style.backgroundColor="black";
        document.querySelector("#groove").style.backgroundColor="white";

    }else{
        document.querySelector("#groove").style.justifyContent="flex-start";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("#slider").style.backgroundColor="white";
        document.querySelector("#groove").style.backgroundColor="black"
    }
    
});