
// Player earnings variables
 var cash = 0;
  var factoryEarnings = 0;
 var houseEarnings = 0;
 var bankEarnings = 0;
 
 
 // Building variables
 var factories = 0;
 var houses = 0;
 var banks = 0;
 
 // Cost variables
 var factoryCost = 5;
 var houseCost = 10;
 var bankCost = 100;
 
 //Upgrade variables
var clickUpgrade = 0;
var clickUpgradeCost = 20;

//Misc variables
var totalClicks = 0;
var totalCash = 0;
var totalBuildings = 0;
var cashSpent = 0;
 var cashPerSec = factoryEarnings + houseEarnings + bankEarnings;


var secStart = false;

function IncreaseCash()
            {
                cash += factoryEarnings + houseEarnings + bankEarnings;
                
                
                totalCash += factoryEarnings + houseEarnings + bankEarnings;
                
              
                document.cookie = cash; 
                
                CashPerSecond();
                
                    
                    document.getElementById("cashcheck").innerHTML = cash.toFixed(0);
                    document.getElementById("totalcash").innerHTML = "Total cash = " + totalCash.toFixed(0);
                    
            }
 
            //Every time the player clicks the "click for money" button the variable cash
            // will increase by 1 plus the amount of click upgrades the player bought.
            //It will also print this and update.
            function ClickForCash()
            {
                cash += 1 + clickUpgrade;
                totalCash += 1 + clickUpgrade;
                
                 if(totalBuildings > 0 && secStart === false){
                     
                        setInterval(IncreaseCash, 500);
                        secStart = true;                     
                    }
                    
                    totalClicks++;
                    
                     document.getElementById("cashcheck").innerHTML = cash.toFixed(0);
                     document.getElementById("totalclicks").innerHTML = "Total clicks = " + totalClicks.toFixed(0);
                     document.getElementById("totalcash").innerHTML = "Total cash = " + totalCash.toFixed(0);
                    
                
            }
            
            function UpgradeClick()
            {
                
              if(cash >= clickUpgradeCost){
                clickUpgrade += 5;
               
                
                cash -= clickUpgradeCost;
                
                cashSpent += clickUpgradeCost;
                
                clickUpgradeCost = clickUpgradeCost * 1.8;
                
                if(totalBuildings > 0 && secStart === false){
                     
                        setInterval(IncreaseCash, 500);
                        secStart = true;                     
                    }
                
                               
                document.getElementById("clickcheck").innerHTML = clickUpgrade.toFixed(0);
                document.getElementById("clickcost").innerHTML = "Next upgrade: " + clickUpgradeCost.toFixed(0);
                document.getElementById("cashspent").innerHTML = "Cash spent = " + cashSpent.toFixed(0);
            }
                
            }
    
          
        
          
            
          function BuyFactory()
          {            
              if(cash >= factoryCost){
                factories += 1;
                totalBuildings++;
                factoryEarnings += 3;
                
                cash -= factoryCost;
                
                cashSpent += factoryCost;
                
                factoryCost = factoryCost *= 1.2;
                
                if(totalBuildings > 0 && secStart === false){
                     
                        setInterval(IncreaseCash, 500);
                        secStart = true;                     
                    }
                
                document.getElementById("factories").innerHTML = "Factories: " + factories.toFixed(0);
                document.getElementById("factorycost").innerHTML = "Next factory: " + factoryCost.toFixed(0);
                document.getElementById("cashearn").innerHTML = "Cash per second: " + cashPerSec.toFixed(0);  
                document.getElementById("cashspent").innerHTML = "Cash spent = " + cashSpent.toFixed(0);        
            }
        }
            
            
            function BuyHouses()
            {
                if(cash >= houseCost){
                    
                    houses++;
                    totalBuildings++;
                    houseEarnings += 5;
                    
                    cash -= houseCost;
                    
                    cashSpent += houseCost;
                    
                    houseCost = houseCost *= 1.4;
                    
                    
                    
                    document.getElementById("houses").innerHTML = "Houses: " + houses;
                    document.getElementById("housecost").innerHTML = "Next house = " + houseCost.toFixed(0);
                    document.getElementById("cashearn").innerHTML = "Cash per second: " + cashPerSec.toFixed(0);   
                    document.getElementById("cashspent").innerHTML = "Cash spent = " + cashSpent.toFixed(0); 
                    
                    if(totalBuildings > 0 && secStart === false){
                     
                        setInterval(IncreaseCash, 500);
                        secStart = true;                     
                    }
                    
                                    
                }           
            }   
            
            
            function BuyBank(){
            	
            	if(cash >= bankCost){
            		
            		banks++;
                    totalBuildings++;
                    bankEarnings += 50;
                    
                    cash -= bankCost;
                    
                    cashSpent += bankCost;
                    
                    bankCost = bankCost *= 1.6;
            		
            		
            		document.getElementById("banks").innerHTML = "Banks: " + banks;
            		document.getElementById("bankcost").innerHTML = "Next bank = " + bankCost.toFixed(0);
            		document.getElementById("cashearn").innerHTML = "Cash per second: " + cashPerSec.toFixed(0);
            		document.getElementById("cashspent").innerHTML = "Cash spent = " + cashSpent.toFixed(0);
            		
            		if(totalBuildings > 0 && secStart === false){
                     
                        setInterval(IncreaseCash, 500);
                        secStart = true;                     
                    }       		
            	}
            }
            
            
            function CashPerSecond()
            {
                cashPerSec = houseEarnings + factoryEarnings;
            }