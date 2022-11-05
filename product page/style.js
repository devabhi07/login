
        let color=document.querySelectorAll(".colors")
        let modelviewer=document.querySelector(".model-viwer")
        let card=document.querySelector(".card")
        for(let x=0;x<color.length;x++){
            color[x].addEventListener("click",(e)=>{
              if(x==0){
                color[0].classList.add("selected")
                color[1].classList.remove("selected")
                color[2].classList.remove("selected")
                color[3].classList.remove("selected")
                modelviewer.src="t-shirts/white.glb"
                card.setAttribute("style","background-image: linear-gradient(-180deg, #fb947d, #FC3E65, #f23236);")
              }
             else if(x==1){
                color[0].classList.remove("selected")
                color[1].classList.add("selected")
                color[2].classList.remove("selected")
                color[3].classList.remove("selected")
                modelviewer.src="t-shirts/red.glb"
                card.setAttribute("style","background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(237,235,235,1) 53%, rgba(246,241,241,1) 71%, rgba(255,251,251,1) 100%);")
              }
             else if(x==2){
                color[0].classList.remove("selected")
                color[1].classList.remove("selected")
                color[2].classList.add("selected")
                color[3].classList.remove("selected")
                modelviewer.src="t-shirts/yellow.glb"
                card.setAttribute("style","background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(237,235,235,1) 53%, rgba(246,241,241,1) 71%, rgba(255,251,251,1) 100%);")
              }
             else if(x==3){
                color[0].classList.remove("selected")
                color[1].classList.remove("selected")
                color[2].classList.remove("selected")
                color[3].classList.add("selected")
                modelviewer.src="t-shirts/blue.glb"
                card.setAttribute("style","background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(237,235,235,1) 53%, rgba(246,241,241,1) 71%, rgba(255,251,251,1) 100%);")
              }
      
            })
            
        }