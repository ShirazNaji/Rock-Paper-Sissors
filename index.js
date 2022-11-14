/////////////////////////////////////////////////////////////////////////////start ////////////////////////////////////////////////////////
let play_other = document.getElementById('play-other');
let play_computer = document.getElementById('play-computer');
let div_player = document.querySelector('.player');
let div_starts = document.querySelector('.starts');
let div_computer = document.querySelector('.comp');

play_other.addEventListener('click' ,function(){
    
    div_player.style.display="block";
    div_starts.style.display="none";
    
});

play_computer.addEventListener('click' ,function(){
    
    div_computer.style.display="block";
    div_starts.style.display="none";
    
});

///////////////////////////////////////////////////////////////////////////// computer ////////////////////////////////////////////////////////

let choose_computer = document.getElementById('img-computer-choose');
let choose_player = document.getElementById('img-player-choose');

function setTimeReload(){
       window.location.reload();
}

//////////////////////////////////////////////////choose random img computer

let arr_img =["image/i.png" , "image/k.png" ,"image/j.png"];

function getsrcimg(){
    let res_random = arr_img[Math.floor(Math.random() * arr_img.length)];
    
    if(res_random === "image/i.png" ){
        choose_computer.setAttribute("data", "paper" );
    }
    else if(res_random === "image/k.png" ){
        choose_computer.setAttribute("data", "rock" );
    }
    else{
        choose_computer.setAttribute("data", "sissors" );
    }
    
    return res_random;
    
}

//////////////////////////////////////////////////choose  img player

let btn_rock = document.getElementById('rock');
let btn_paper = document.getElementById('paper');
let btn_sissors = document.getElementById('sissors');
let res_pl_comp = document.getElementById('result-player-with-computer');

let score_pl = document.getElementById('score-pl-co'); 
let score_comp = document.getElementById('score-co'); 

score_pll = 0;
score_compp =0;


btn_rock.addEventListener("click" , function(){
    
    choose_player.src="image/k.png";
    choose_player.setAttribute("data", "rock" );
    choose_computer.src = getsrcimg();
    
    
     if(score_pll === 10 || score_compp === 10){
        if(score_pll > score_compp){
            res_pl_comp.innerHTML = "You Winner";
            setTimeout(setTimeReload,3500);
        }else if(score_pll < score_compp ){
            
            res_pl_comp.innerHTML = "Computer Winner";
            setTimeout(setTimeReload,3500);
        }else{
            res_pl_comp.innerHTML = "It'Is a Tie !!!";
            setTimeout(setTimeReload,3500);
        }
       
       
       }else{
           
       
    
     if(choose_player.getAttribute("data") === "rock" &&  choose_computer.getAttribute("data") === "paper" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
        
             
    }
    
    else if(choose_player.getAttribute("data") ==="rock" &&  choose_computer.getAttribute("data") === "sissors" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
             
    }else if(choose_player.getAttribute("data") === "paper" &&  choose_computer.getAttribute("data") === "rock" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
             
    }else if(choose_player.getAttribute("data") === "paper" &&  choose_computer.getAttribute("data") === "sissors" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
    }
    else if(choose_player.getAttribute("data") === "sissors" &&  choose_computer.getAttribute("data") === "rock" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
             
    }else if(choose_player.getAttribute("data") === "sissors" &&  choose_computer.getAttribute("data") === "paper" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
    }
    
    else{
        score_comp.innerHTML =score_comp.innerHTML;
        score_pl.innerHTML =score_pl.innerHTML;
        
    }
    
    
   
    
       }

    
    
});

btn_paper.addEventListener("click" , function(){
    
    choose_player.src="image/i.png";
    choose_player.setAttribute("data", "paper" );
    choose_computer.src = getsrcimg();
    
    if(score_pll === 10 || score_compp === 10){
        if(score_pll > score_compp){
            res_pl_comp.innerHTML = "You Winner";
            setTimeout(setTimeReload,3500);
        }else if(score_pll < score_compp ){
            
            res_pl_comp.innerHTML = "Computer Winner";
            setTimeout(setTimeReload,3500);
        }else{
            res_pl_comp.innerHTML = "It'Is a Tie !!!";
            setTimeout(setTimeReload,3500);
        }
       
       
       }else{
           
       
    
     if(choose_player.getAttribute("data") === "rock" &&  choose_computer.getAttribute("data") === "paper" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
        
             
    }
    
    else if(choose_player.getAttribute("data") ==="rock" &&  choose_computer.getAttribute("data") === "sissors" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
             
    }else if(choose_player.getAttribute("data") === "paper" &&  choose_computer.getAttribute("data") === "rock" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
             
    }else if(choose_player.getAttribute("data") === "paper" &&  choose_computer.getAttribute("data") === "sissors" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
    }
    else if(choose_player.getAttribute("data") === "sissors" &&  choose_computer.getAttribute("data") === "rock" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
             
    }else if(choose_player.getAttribute("data") === "sissors" &&  choose_computer.getAttribute("data") === "paper" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
    }
    
    else{
        score_comp.innerHTML =score_comp.innerHTML;
        score_pl.innerHTML =score_pl.innerHTML;
        
    }
    
    
   
    
       }
    
    
   
    
    
});

btn_sissors.addEventListener("click" , function(){
    choose_player.src="image/j.png";
    choose_player.setAttribute("data", "sissors" );
    choose_computer.src = getsrcimg();
    
    
    if(score_pll === 10 || score_compp === 10){
        if(score_pll > score_compp){
            res_pl_comp.innerHTML = "You Winner";
            setTimeout(setTimeReload,3500);
        }else if(score_pll < score_compp ){
            
            res_pl_comp.innerHTML = "Computer Winner";
            setTimeout(setTimeReload,3500);
        }else{
            res_pl_comp.innerHTML = "It'Is a Tie !!!";
            setTimeout(setTimeReload,3500);
        }
       
       
       }else{
           
       
    
     if(choose_player.getAttribute("data") === "rock" &&  choose_computer.getAttribute("data") === "paper" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
        
             
    }
    
    else if(choose_player.getAttribute("data") ==="rock" &&  choose_computer.getAttribute("data") === "sissors" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
             
    }else if(choose_player.getAttribute("data") === "paper" &&  choose_computer.getAttribute("data") === "rock" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
             
    }else if(choose_player.getAttribute("data") === "paper" &&  choose_computer.getAttribute("data") === "sissors" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
    }
    else if(choose_player.getAttribute("data") === "sissors" &&  choose_computer.getAttribute("data") === "rock" ){
             score_compp++;
             score_comp.innerHTML =score_compp;
             
    }else if(choose_player.getAttribute("data") === "sissors" &&  choose_computer.getAttribute("data") === "paper" ){
             score_pll++;
             score_pl.innerHTML = score_pll;
    }
    
    else{
        score_comp.innerHTML =score_comp.innerHTML;
        score_pl.innerHTML =score_pl.innerHTML;
        
    }
    
    
   
    
       }
    
});


///////////////////////////////////////////////////////////////////////////// player other ////////////////////////////////////////////////////////

/////////////////////////////////////////////player 1

let btn_img_rock_pl1 = document.getElementById('btn-img-rock-pl1');
let btn_img_paper_pl1 = document.getElementById('btn-img-paper-pl1');
let btn_img_sissors_pl1 = document.getElementById('btn-img-sissors-pl1');
let img_res_pl1 = document.getElementById('img-res-pl1');

let player = false ;

let error_msg = document.querySelector('.error');


function setTime(){
        style_res_player1.style.top = "-20px";
        style_res_player2.style.bottom = "-10px";
}


function setTimeError(){
        error_msg.style.left = "-350px";
}




btn_img_rock_pl1.addEventListener("click",function(){
    setTimeout(setTime,3);
    img_res_pl1.setAttribute("data", "rock" );
    img_res_pl1.src = "image/k.png";
    player = true;
    
});

btn_img_paper_pl1.addEventListener("click",function(){
    setTimeout(setTime,3);
    img_res_pl1.setAttribute("data", "paper" );
    img_res_pl1.src = "image/i.png";
     player = true;
});

btn_img_sissors_pl1.addEventListener("click",function(){
    setTimeout(setTime,3);
    img_res_pl1.setAttribute("data", "sissors" );
    img_res_pl1.src = "image/j.png";
     player = true;
});


/////////////////////////////////////////////player 2

let btn_img_rock_pl2 = document.getElementById('btn-img-rock-pl2');
let btn_img_paper_pl2 = document.getElementById('btn-img-paper-pl2');
let btn_img_sissors_pl2 = document.getElementById('btn-img-sissors-pl2');
let img_res_pl2 = document.getElementById('img-res-pl2');

let style_res_player2 = document.getElementById('res-player2');
let style_res_player1 = document.getElementById('res-player1');

let result_game_other =document.querySelector('.result-game-other');

let score_game_pl1 = document.querySelector('.score-pl1');
let score_game_pl2 = document.querySelector('.score-pl2');


let score_pl1 =0;
let score_pl2=0;

btn_img_rock_pl2.addEventListener("click",function(){
    
    if(player === true){
       
        img_res_pl2.setAttribute("data", "rock" );
        img_res_pl2.src = "image/k.png";
        style_res_player1.style.top = "130px";
        style_res_player2.style.bottom = "130px";
        setTimeout(setTime,2500);
        player = false ;
        
        
        if(score_pl1 === 10 || score_pl2 === 10){
            
        if(score_pl1 > score_pl2){
            result_game_other.innerHTML = "Player 1 Winner";
            setTimeout(setTimeReload,3500);
        }else if(score_pl1 < score_pl2 ){
            
            result_game_other.innerHTML = "Player 2 Winner";
            setTimeout(setTimeReload,3500);
        }else{
            result_game_other.innerHTML = "It'Is a Tie !!!";
            setTimeout(setTimeReload,3500);
        }
       
       
       }else{
           
       
    
             if(img_res_pl1.getAttribute("data") === "rock" &&  img_res_pl2.getAttribute("data") === "paper" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;


            }

            else if(img_res_pl1.getAttribute("data") ==="rock" &&  img_res_pl2.getAttribute("data") === "sissors" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;

            }else if(img_res_pl1.getAttribute("data") === "paper" &&  img_res_pl2.getAttribute("data") === "rock" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;

            }else if(img_res_pl1.getAttribute("data") === "paper" &&  img_res_pl2.getAttribute("data") === "sissors" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;
            }
            else if(img_res_pl1.getAttribute("data") === "sissors" &&  img_res_pl2.getAttribute("data") === "rock" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;

            }else if(img_res_pl1.getAttribute("data") === "sissors" &&  img_res_pl2.getAttribute("data") === "paper" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;
            }

            else{
                score_game_pl2.innerHTML =score_game_pl2.innerHTML;
                score_game_pl1.innerHTML =score_game_pl1.innerHTML;

            }
    
    
   
    
       }
        
        
        
        
       
    }else {
           error_msg.style.left="0";
           setTimeout(setTimeError,3000);
       }
    
    
});

btn_img_paper_pl2.addEventListener("click",function(){
    
   if(player === true){ 
       
    img_res_pl2.setAttribute("data", "paper" );
    img_res_pl2.src = "image/i.png";
    style_res_player1.style.top = "130px";
    style_res_player2.style.bottom = "130px";
    player = false ;
    setTimeout(setTime,2500);
       
       if(score_pl1 === 10 || score_pl2 === 10){
        if(score_pl1 > score_pl2){
            result_game_other.innerHTML = "Player 1 Winner";
            setTimeout(setTimeReload,3500);
        }else if(score_pl1 < score_pl2 ){
            
            result_game_other.innerHTML = "Player 2 Winner";
            setTimeout(setTimeReload,3500);
        }else{
            result_game_other.innerHTML = "It'Is a Tie !!!";
            setTimeout(setTimeReload,3500);
        }
       
       
       }else{
           
       
    
             if(img_res_pl1.getAttribute("data") === "rock" &&  img_res_pl2.getAttribute("data") === "paper" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;


            }

            else if(img_res_pl1.getAttribute("data") ==="rock" &&  img_res_pl2.getAttribute("data") === "sissors" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;

            }else if(img_res_pl1.getAttribute("data") === "paper" &&  img_res_pl2.getAttribute("data") === "rock" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;

            }else if(img_res_pl1.getAttribute("data") === "paper" &&  img_res_pl2.getAttribute("data") === "sissors" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;
            }
            else if(img_res_pl1.getAttribute("data") === "sissors" &&  img_res_pl2.getAttribute("data") === "rock" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;

            }else if(img_res_pl1.getAttribute("data") === "sissors" &&  img_res_pl2.getAttribute("data") === "paper" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;
            }

            else{
                score_game_pl2.innerHTML =score_game_pl2.innerHTML;
                score_game_pl1.innerHTML =score_game_pl1.innerHTML;

            }
    
    
   
    
       }
        
       
       
       
    }else {
           error_msg.style.left="0";
           setTimeout(setTimeError,3000);
       }
    
});

btn_img_sissors_pl2.addEventListener("click",function(){
  if(player === true){ 
    img_res_pl2.setAttribute("data", "sissors" );
    img_res_pl2.src = "image/j.png";
    style_res_player1.style.top = "130px";
    style_res_player2.style.bottom = "130px";
    player = false ;
    setTimeout(setTime,2500);
      
      
      if(score_pl1 === 10 || score_pl2 === 10){
        if(score_pl1 > score_pl2){
            result_game_other.innerHTML = "Player 1 Winner";
            setTimeout(setTimeReload,3500);
        }else if(score_pl1 < score_pl2 ){
            
            result_game_other.innerHTML = "Player 2 Winner";
            setTimeout(setTimeReload,3500);
        }else{
            result_game_other.innerHTML = "It'Is a Tie !!!";
            setTimeout(setTimeReload,3500);
        }
       
       
       }else{
           
       
    
             if(img_res_pl1.getAttribute("data") === "rock" &&  img_res_pl2.getAttribute("data") === "paper" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;


            }

            else if(img_res_pl1.getAttribute("data") ==="rock" &&  img_res_pl2.getAttribute("data") === "sissors" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;

            }else if(img_res_pl1.getAttribute("data") === "paper" &&  img_res_pl2.getAttribute("data") === "rock" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;

            }else if(img_res_pl1.getAttribute("data") === "paper" &&  img_res_pl2.getAttribute("data") === "sissors" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;
            }
            else if(img_res_pl1.getAttribute("data") === "sissors" &&  img_res_pl2.getAttribute("data") === "rock" ){
                     score_pl2++;
                     score_game_pl2.innerHTML =score_pl2;

            }else if(img_res_pl1.getAttribute("data") === "sissors" &&  img_res_pl2.getAttribute("data") === "paper" ){
                     score_pl1++;
                     score_game_pl1.innerHTML = score_pl1;
            }

            else{
                score_game_pl2.innerHTML =score_game_pl2.innerHTML;
                score_game_pl1.innerHTML =score_game_pl1.innerHTML;

            }
    
    
   
    
       }
        
    
    }else {
           error_msg.style.left="0";
           setTimeout(setTimeError,3000);
       }
});


















