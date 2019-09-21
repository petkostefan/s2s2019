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

// Uvod u progresivne veb aplikacije

const openProgresivneWebApp = () => {	          
  document.getElementById("progresivneWebApp").style.display = "block";	              	              
  open();      
};	  

const closeProgresivneWebApp = () => {	          
  close();
  document.getElementById("progresivneWebApp").style.display = "none";	            
}	

// WebApp Workshop
