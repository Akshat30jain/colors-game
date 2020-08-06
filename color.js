
var colors = changedrandomcolor(6);
    
    var squares = document.querySelectorAll(".square");
    var colordisplay = document.getElementById("colordisplay");
    var msgd = document.getElementById("msg");
    var pickedcolor = choose();
    var h1 = document.querySelector("h1");
    var reset = document.querySelector("#reset");
    colordisplay.textContent = pickedcolor;
    for(var i =0; i<6; i++){
        squares[i].style.backgroundColor = colors[i];
    

        squares[i].addEventListener("click", function(){
            var clickedcolor = this.style.backgroundColor;

            if(clickedcolor === pickedcolor)
            {
                
                msgd.textContent = "correct!";
                changecolor(clickedcolor);
                h1.style.backgroundColor = clickedcolor;
                reset.textContent = "Play again";

            }
            else{
                this.style.backgroundColor = "#808080";
                msgd.textContent = "Try again";
                reset.textContent = "New colors";
            }
        });
    }

        function changecolor(color)
        {
            for(var i = 0; i<6; i++)
            {
                squares[i].style.backgroundColor = color;
            }
        } 
      function choose(){
        var random = Math.floor(Math.random() * 6);
        return colors[random];
      }
     function changedrandomcolor(num)
     {
         var arr =[];
         for(var i=0 ; i<num ; i++)
         {
             arr.push(randomcolor());
         }
         return arr;
     }

     function randomcolor()
     {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);

        var b= Math.floor(Math.random() * 256);

        return "rgb(" + r + ", " + g + ", " + b  + ")" ;

     }

reset.addEventListener("click" , function(){
    colors = changedrandomcolor(6);
    pickedcolor = choose();
    colordisplay.textContent = pickedcolor; 
    msgd.textContent="start";
    this.textContent="NEW COLORS"; 
    
    for(var i = 0; i<6; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    

});

