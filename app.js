var btnbc1= document.querySelector('.btnbc1')
var btnbc2= document.querySelector('.btnbc2')
var btnbc3= document.querySelector('.btnbc3')
var btnbc4= document.querySelector('.btnbc4')
var btnbc5= document.querySelector('.btnbc5')
 var btn1 = document.querySelector('.btn1')
 var btn2 = document.querySelector('.btn2')
 var btn3 = document.querySelector('.btn3')
 var btn4 = document.querySelector('.btn4')
 var btn5 = document.querySelector('.btn5')
 var profilebtn = document.querySelector('.profilebtn');
 var getStart = document.querySelector('.getStart');


 function roboto(){
   var body = document.body;
   body.style.fontFamily='Roboto' 
   profilebtn.style.fontFamily='Roboto'
   getStart.style.fontFamily='Roboto'

   bgColor(btnbc1)
   tickbg(tick1)
   parabg(btn1)
   }
   

function nunito(){
   var body = document.body;
   body.style.fontFamily='Nunito'
   profilebtn.style.fontFamily='Nunito'
   getStart.style.fontFamily='Nunito'
   bgColor(btnbc2)
   tickbg(tick2)
   parabg(btn2)
}
function montserent(){
   var body = document.body;
   body.style.fontFamily='Montserrat'
   profilebtn.style.fontFamily='Montserrat'
   getStart.style.fontFamily='Montserrat'
   bgColor(btnbc3)
   tickbg(tick3)
   parabg(btn3)
}
function playfair(){
    var body = document.body;
   body.style.fontFamily='Playfair Display'
   profilebtn.style.fontFamily='Playfair Display'
   getStart.style.fontFamily='Playfair Display'
   bgColor(btnbc4)
   tickbg(tick4)
   parabg(btn4)
}
function monospace(){
    var body = document.body;
   body.style.fontFamily='Roboto Mono'
   profilebtn.style.fontFamily='Roboto Mono'
   getStart.style.fontFamily='Roboto Mono'
   bgColor(btnbc5)
   tickbg(tick5)
   parabg(btn5)
}



function bgColor(btn){
   var button = document.querySelectorAll('#btnrem')
   button.forEach(element => {
      if(element==btn){
          btn.style.backgroundColor='#3939bd'
      }
      else{
         element.style.backgroundColor='#a3a5a5'
      }
   });
}
function parabg(p){
   var pbg = document.querySelectorAll('#pbg')
   pbg.forEach(element=>{
         if(element==p)
         {
            p.style.backgroundColor='lightblue'
            p.style.color='blue'
         }
         else{
            element.style.backgroundColor='rgba(235, 241, 241,0.1)'
            element.style.color='black'
         }
   })
}
parabg()

function tickbg(tic){
   var tick = document.querySelectorAll('.material-symbols-outlined')
   tick.forEach(element =>{
      if(element==tic)
      {
         tic.style.display='inline';
      }
      else{
         element.style.display='none'
      }
   })
}