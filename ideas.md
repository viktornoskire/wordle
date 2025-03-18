### **A: Feedback**

1. Skapa en tom array  
2. Gör båda orden till lowercase  
3. För varje bokstav i gissningsordet  
    1. Om bokstav finns på samma index som i det utvalda ordet  
        1. Lägg bokstav i ett objekt med värde: "correct"  
        2. Lägg in objektet i svarsarrayen  
    2. Annars om bokstav finns någonstans i ordet  
        1. Lägg bokstav i ett objekt med värde: "misplaced"  
        2. Lägg in objektet i svarsarrayen  
    3. Annars finns bokstaven inte i ordet  
        1. Lägg bokstav i ett objekt med värde: "incorrect"  
        2. Lägg in objektet i svarsarrayen  
4. Presentera resultatet