# Uzdevumi

## JavaScript pamati (mainīgie, datu tipi)

1. Definē mainīgo ar nosaukumu "vārds", "vecums", "irStudents" un piešķir tiem vērtību. Izdrukā mainīgā vērtību uz konsoles.

const myName = "Andrejs";
        const myAge = 36;
        const irStudents = true; 

2. Definē mainīgo ar nosaukumu "augļi" un piešķir tam masīvu ar augļiem. Izdrukā masīvu uz konsoles.

const augli = ['kiwi', 'apple', 'mango'];
        for (let i=0; i <= augli.lenght; i++) {
        console.log(augli);

3. Definē mainīgo ar nosaukumu "persona" un piešķir tam objektu ar īpašībām, piemēram, vārds, vecums un vai ir students.

console.log(persona.vards);
       
        persona.adrese = {pilseta: 'Riga', iela: 'Brivibas iela'};
        console.log(persona.adrese.iela);

4. Izveido funkciju, kurā definē mainīgo ar nosaukumu "x" un piešķir tam vērtību 5. Izdrukā "x" vērtību funkcijā.

myFunction()

        function myFunction() {
            let x = 5;
            console.log(x);

5. Ārpus funkcijas definē mainīgo ar nosaukumu "y" un piešķir tam vērtību 10. Izdrukā "y" vērtību funkcijā.

let y = 10;
        funcion myFunction() {
            console.log(y);

6. Izveido funkciju, kurā definē mainīgo un piešķir tam vērtību.Izdrukā mainīgā vērtību funkcijā un ārpus tās.

let y = 10;
        myFunct();
        anotherFunct();
        function myFunct() {
            
            console.log(y);}


            ---

            <script>

        function myFunction() {
            let myValue = 10;
            let myValue = 15;
        }
        console.log("Outside" + myValue + "more text");
        console.log('Outside ${myValue} here is something');
        console.log(myValue + myValue2);
            </script>

--------------------

<script>

        function myFunction() {
            let myValue = 10;
            let myValue = 15;
            let changed = parseInt(myValue2);
        }
        console.log("Outside" + myValue + "more text");
        console.log('Outside ${myValue} here is something');
        console.log(myValue + changed);
    </script>
-----

<script>

    myFunction();

    function myFunction() {
    
        let myText = "Here is my text";
        console.log(myText.length);
    }

    </script>
---
    myFunction();

    function myFunction() {
        let myText = "Here is my text";

        console.log(myText.indexOf("e"));
    }
----
<script>

    myFunction();

    function myFunction() {
        let myText = "Here is my text";

        console.log(myText.includes("are"));
    }

    </script>
-----
 <script>

   myFunction();

    function myFunction() {
        let myArray = [1, 2, 3, 5];
        let amount = 0;
        for (let i = 0; i < myArray.length; i++) {
            amount += 1;
        }

        console.log(amount);
        console.log(myArray.length);
    }

    </script>
    -----


7. Izveido mainīgo ārpus funkcijas un piešķir tam vērtību. Funkcijā definē mainīgo ar to pašu nosaukumu un piešķir tam citu vērtību. Izdrukā mainīgā vērtību funkcijā.

let myValue = 5;
        console.log(myValue);
        myFunction();
        function myFunction() {
            myValue = 10;
            console.log(myValue);

## Operātori

1. Izveido programmu, kas saņem divus skaitļus kā ievadi un aprēķina to summu, izmantojot saskaitīšanas operatoru (+).

<script>

   calculateSum(3, 6);

    function calculateSum(numOne, numTwo) {
        let sum = numOne + numTwo; {+ -}
        console.log(sum);
        
    }
 vai let sum = numTwo % numOne; dalisana zime

    </script>

2. Izveido mainīgo ar nosaukumu "num" un piešķir tam vērtību 10. Palielini "num" vērtību par 5, izmantojot piešķiršanas saskaitīšanas operatoru (+=).

<script>

   let num = 5;

    num += num + 5;
    
        concole.log(num);

    </script>

## Plūsma (control flow)

1. Izveido programmu, kas pārbauda, vai dots skaitlis ir pozitīvs, negatīvs vai nulle, izmantojot if-else izteiksmi. Izdrukā "Pozitīvs", ja skaitlis ir lielāks par 0, "Negatīvs", ja tas ir mazāks par 0, un "Nulle", ja tas ir vienāds ar 0.

<script>

      checkPositivity(0);  

        function checkPositivity(input) {
        if (input > 0) {
            console.log("Pozitivs");
        } else if (input === 0) {
            console.log("Nulle");
        } else {
            console.log("Negativs");
        }
         
        }
       

    </script>

2. Izveido programmu, kas pārbauda, vai dots skaitlis dalās ar 3 un 5. Izmanto dalījuma atlikuma operatoru (%), lai noskaidrotu, vai skaitlis dalās.Izdrukā "Dalās" , ja skaitlis dalās un "Nedalās" , ja skaitlis nedalās.
&& logical and; || logical or;

 <script>

      checkDalisana(33);  

        function checkDalisana(input) {
       
         if (input % 3 === 0 && input % 5 === 0) {
            console.log("dalas");
        } else {
            console.log("nedalas");
        }   
    }   

    </script>

-----

 <script>

      checkDalisana(14);  

        function checkDalisana(input) {
       
         input % 3 === 0 ? console.log("Dalas") : console.log("Nedalas");   
    }   

    </script>

-----

<script>

      checkDalisana(false);  

        function checkDalisana(isValidut) {
       
        isValid ? console.log("true") : console.log("false");   
    }   

    </script>

3. Izveido divus mainīgos, "x" un "y", un piešķir tiem skaitliskas vērtības. Izveido programmu, kas salīdzina "x" un "y" vērtības, izmantojot lielāks par operatoru (>). Izdrukā "x ir lielāks par y", ja tas ir patiess, un
"x nav lielāks par y", ja tas ir nepatiess.



4. Izveido mainīgo ar nosaukumu "diena" un piešķir tam nedēļas dienas nosaukumu (piemēram, "Pirmdiena"). Izmanto switch izteiksmi, lai izdrukātu ziņojumu atkarībā no dienas. Piemēram, ja "diena" ir "Piektdiena", izdrukā "Nedēļas nogale ir gandrīz šeit!".
5. Izveido programmu, kas izdrukā visus pāra skaitļus no 1 līdz 20, izmantojot for ciklu. Izmanto dalījuma atlikuma operatoru (%), lai pārbaudītu, vai skaitlis ir pāra.
6. Izveido mainīgo ar nosaukumu "skaitītājs" un uzstādi to uz 0. Izveido programmu, kas izdrukā "Sveiki", kamēr "skaitītājs" ir mazāks par 5, izmantojot while ciklu. Palielini "skaitītāju" iekšējā ciklā.

## Funkcijas

1. Uzraksti funkciju ar nosaukumu "greeting", kas ņem vārdu kā parametru un izdrukā sveiciena ziņu ar šo
vārdu. Piemēram, ja vārds ir "Jānis", funkcija izdrukās "Sveiki, Jānis!".
2. Uzraksti funkciju ar nosaukumu "calculateArea", kas ņem taisnstūra garumu un platumu kā parametrus un atgriež taisnstūra laukumu.
3. Uzraksti funkciju ar nosaukumu "isOdd", kas ņem skaitli kā parametru un atgriež true, ja tas ir pāra
skaitlis, un false, ja tas ir nepāra skaitlis. Izmanto dalījuma atlikuma operatoru (%), lai pārbaudītu, vai
skaitlis ir pāra.
4. Uzraksti funkciju ar nosaukumu "calculateSum", kas ņem masīvu ar skaitļiem kā parametru un atgriež to summu.
5. Uzraksti funkciju, kas pārbauda vai padotais vārds sakrīt ar esošo vārdu.
6. Uzraksti funkciju, kas pārbauda vai padotais skaitlis ir pozitīvs, negatīvs vai nulle.
7. Uzraksti funkciju, kurai tiek padots masīvs ar skaitļiem un tā izprintē skaitļu summu. Uzraksti funkciju, kas pārbauda vai sarakstā atrodas konkrēts vārds.
