window.addEventListener('scroll', () => {	          
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);	            
});	  

function openP(){
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;	           
  body.style.overflow = 'hidden';	 
  body.style.position = 'fixed';
  body.style.height = '100vh';
  body.style.top = `-${scrollY}`;	  

}

function closeP(){
  const body = document.body;	           
  const scrollY = body.style.top;	           
  body.style.overflow = 'initial';	
  body.style.position = 'initial';
  body.style.top = '';            
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Data Science 101

const openDataScience101 = () => {	          
    document.getElementById("dataScience101").style.display = "block"; 
    openP();            	                 
};	  

const closeDataScience101 = () => {	       
    closeP();   
    document.getElementById("dataScience101").style.display = "none";	            
}	

// Intro To Java

const openIntroToJava = () => {	          
  document.getElementById("introToJava").style.display = "block";	  
  openP();            	                 
};	  

const closeIntroToJava = () => {	       
  closeP();   
  document.getElementById("introToJava").style.display = "none";	            
}	

// Real Time Data Processing

const openRealTimeDataProcessing = () => {	          
  document.getElementById("realTimeDataProcessing").style.display = "block";	              	              
  openP();      
};	  

const closeRealTimeDataProcessing = () => {	          
  closeP();
  document.getElementById("realTimeDataProcessing").style.display = "none";	            
}	

// Intro To Graphic Design

const openIntroToGraphicDesign = () => {	          
  document.getElementById("introToGraphicDesign").style.display = "block";	              	              
  openP();      
};	  

const closeIntroToGraphicDesign = () => {	          
  closeP();
  document.getElementById("introToGraphicDesign").style.display = "none";	            
}

// Web App Workshop

const openWebAppWorkshop = () => {	          
  document.getElementById("webAppWorkshop").style.display = "block";	              	              
  openP();      
};	  

const closeWebAppWorkshop = () => {	          
  closeP();
  document.getElementById("webAppWorkshop").style.display = "none";	            
}

// Vue Is For You

const openVueIsForYou = () => {	          
  document.getElementById("vueIsForYou").style.display = "block";	              	              
  openP();      
};	  

const closeVueIsForYou = () => {	          
  closeP();
  document.getElementById("vueIsForYou").style.display = "none";	            
}
// Sweet Git

const openSweetGit = () => {	          
  document.getElementById("sweetGit").style.display = "block";	              	              
  openP();      
};	  

const closeSweetGit = () => {	          
  closeP();
  document.getElementById("sweetGit").style.display = "none";	            
}
// Intro To Django

const openIntroToDjango = () => {	          
  document.getElementById("introToDjango").style.display = "block";	              	              
  openP();      
};	  

const closeIntroToDjango = () => {	          
  closeP();
  document.getElementById("introToDjango").style.display = "none";	            
}
// Intro To C

const openIntroToC = () => {	          
  document.getElementById("introToC").style.display = "block";	              	              
  openP();      
};	  

const closeIntroToC = () => {	          
  closeP();
  document.getElementById("introToC").style.display = "none";	            
}
// Kroz Bazu Do Jave

const openKrozBazuDoJave = () => {	          
  document.getElementById("krozBazuDoJave").style.display = "block";	              	              
  openP();      
};	  

const closeKrozBazuDoJave = () => {	          
  closeP();
  document.getElementById("krozBazuDoJave").style.display = "none";	            
}