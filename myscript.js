
/*---------切換tab畫面-------------------------------------------------*/
/*function openTabcontent(evt,which,Tab){
  var i,j,tabbutton,tabcontent,me1,open,tab;
  tabcontent=document.getElementsByClassName("tabcontent");
  tab2=document.getElementsByClassName("tab2");
  me1=document.getElementById(Tab).children;
  var me2=new Array();
  var open2=new Array();

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tab2.length; i++) {
    tab2[i].style.display = "none";
  }


  for(y=0;y<me1.length;y++){
    me2[y]=me1[y].children;
  }

  for(n=0;n<me1.length;n++){
  	for(m=0;m<me1[n].children.length;m++){    
      me2[n][m].className=me2[n][m].className.replace(" active", "");
    }
  }

  if(document.getElementById(which).classList.contains("tab2")){
    open=document.getElementById(which).children;
    for(k=0;k<open.length;k++){
      open2[k]=open[k].children;
    }
    for(a=0;a<open.length;a++){
      for(b=0;b<open[a].children.length;b++){
        if(open2[a][b].classList.contains("active")){
          open2[a][b].click();
        }
      }
    }
  }


  document.getElementById(Tab).style.display = "block";
  
  document.getElementById(which).style.display = "block";
  evt.currentTarget.className += " active";
}
/*document.getElementById("defaultOpen").click();*/

/*-------------------------------*/
function opentab(open){
  var tab=document.getElementsByClassName("tab");
  for(i=0;i<tab.length;i++){
    tab[i].style.display="none";
  }
  document.getElementById(open).style.display="block";

}

