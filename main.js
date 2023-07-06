let section = document.getElementById("Features-section");
let section1 = document.querySelector(".Features-section .word");
let card2 = document.querySelectorAll(".card2");
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop -500)
    {
        section1.style.transform ="translateY(0)";
        section1.style.opacity ="1";
    }
    if(window.scrollY >= section.offsetTop -300)
    {
        card2[0].style.setProperty("transform","translateY(0)",);
        card2[1].style.setProperty("transform","translateY(0)",);
        card2[2].style.setProperty("transform","translateY(0)",);
        card2[0].style.setProperty("opacity","1","important");
        card2[1].style.setProperty("opacity","1","important");
        card2[2].style.setProperty("opacity","1","important");
    }
};
function* generatorNums (){
    let index =0;
    while( true){
        yield index++
    }
};
let  i = generatorNums();


let start = document.querySelector(".start");
let loader = document.querySelector(".wifi"); 
window.addEventListener("load",function(e){
    console.log(document.readyState);
    setTimeout(function(){
        loader.style.cssText =`display:none ;opacity: 0`;
        document.body.style.cssText=`overflow:initial`;
        start.style.cssText =`display:initial; opacity: 1;`;
    },1000)
});
