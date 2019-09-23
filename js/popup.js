window.addEventListener('scroll', () => {	          
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);	            
});	  

function open(){
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;	           
  body.style.overflow = 'hidden';	              
  body.style.top = `-${scrollY}`;	  
}

function close(){
  const body = document.body;	           
  const scrollY = body.style.top;	           
  body.style.overflow = 'initial';	           
  body.style.top = '';            
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Data Science 101

const openDataScience101 = () => {	          
    document.getElementById("dataScience101").style.display = "block"; 
    open();            	                 
};	  

const closeDataScience101 = () => {	       
    close();   
    document.getElementById("dataScience101").style.display = "none";	            
}	

// Intro To Java

const openIntroToJava = () => {	          
  document.getElementById("introToJava").style.display = "block";	  
  open();            	                 
};	  

const closeIntroToJava = () => {	       
  close();   
  document.getElementById("introToJava").style.display = "none";	            
}	

// Real Time Data Processing

const openRealTimeDataProcessing = () => {	          
  document.getElementById("realTimeDataProcessing").style.display = "block";	              	              
  open();      
};	  

const closeRealTimeDataProcessing = () => {	          
  close();
  document.getElementById("realTimeDataProcessing").style.display = "none";	            
}	

// Intro To Graphic Design

const openIntroToGraphicDesign = () => {	          
  document.getElementById("introToGraphicDesign").style.display = "block";	              	              
  open();      
};	  

const closeIntroToGraphicDesign = () => {	          
  close();
  document.getElementById("introToGraphicDesign").style.display = "none";	            
}

// Web App Workshop

const openWebAppWorkshop = () => {	          
  document.getElementById("webAppWorkshop").style.display = "block";	              	              
  open();      
};	  

const closeWebAppWorkshop = () => {	          
  close();
  document.getElementById("webAppWorkshop").style.display = "none";	            
}

// Vue Is For You

const openVueIsForYou = () => {	          
  document.getElementById("vueIsForYou").style.display = "block";	              	              
  open();      
};	  

const closeVueIsForYou = () => {	          
  close();
  document.getElementById("vueIsForYou").style.display = "none";	            
}
// Sweet Git

const openSweetGit = () => {	          
  document.getElementById("sweetGit").style.display = "block";	              	              
  open();      
};	  

const closeSweetGit = () => {	          
  close();
  document.getElementById("sweetGit").style.display = "none";	            
}
// Intro To Django

const openIntroToDjango = () => {	          
  document.getElementById("introToDjango").style.display = "block";	              	              
  open();      
};	  

const closeIntroToDjango = () => {	          
  close();
  document.getElementById("introToDjango").style.display = "none";	            
}
// Intro To C

const openIntroToC = () => {	          
  document.getElementById("introToC").style.display = "block";	              	              
  open();      
};	  

const closeIntroToC = () => {	          
  close();
  document.getElementById("introToC").style.display = "none";	            
}
// Kroz Bazu Do Jave

const openKrozBazuDoJave = () => {	          
  document.getElementById("krozBazuDoJave").style.display = "block";	              	              
  open();      
};	  

const closeKrozBazuDoJave = () => {	          
  close();
  document.getElementById("krozBazuDoJave").style.display = "none";	            
}