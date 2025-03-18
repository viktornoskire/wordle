### **A: Feedback**

1. Skapa en tom array  
2. Gör båda orden till lowercase  
3. För varje bokstav i gissningsordet  
    a. Om bokstav finns på samma index som i det utvalda ordet  
    &nbsp;&nbsp; I. Lägg bokstav i ett objekt med värde: "correct"  
     II. Lägg in objektet i svarsarrayen  
    b. Annars om bokstav finns någonstans i ordet  
     I. Lägg bokstav i ett objekt med värde: "misplaced"  
     II. Lägg in objektet i svarsarrayen  
    c. Annars finns bokstaven inte i ordet  
     I. Lägg bokstav i ett objekt med värde: "incorrect"  
     II. Lägg in objektet i svarsarrayen  
4. Presentera resultatet