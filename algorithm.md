### **A: Feedback**


1. Gör båda orden till uppercase  
2. Bryt upp båda orden i arrayer  
3. För varje bokstav i gissningsordet  
    1. Om bokstaven finns på samma index som i det utvalda ordet  
        1. Lägg bokstaven i ett objekt med ett värde: "correct"  
        2. Gör elementet på index i det utvalda ordet tomt  
    2. Annars  
        1. Lägg bokstaven i ett objekt med ett tomt värde  

4. För varje objekt i arrayen  
    1. Om resultat-värdet är tomt  
        1. Hitta index för den bokstaven  
        2. Om index inte är lika med -1  
            1. Lägg bokstaven i ett objekt med ett värde: "misplaced"  
            2. Gör elementet på index i det utvalda ordet tomt  
        3. Annars  
            1. Lägg bokstaven i ett objekt med ett värde: "incorrect"  

5. Presentera resultatet  