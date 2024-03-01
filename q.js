// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag, using forEach function
// Print the total population of countries using reduce function
// Print the country that uses US dollars as currency.

//---------------------------------------------------------------------------------------------//

// Fetch data from the REST countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all countries from Asia continent/region
    const countriesInAsia = data.filter(country => country.region === "Asia");

    // Get all countries with a population of less than 2 lakhs
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);

    // Print name, capital, and flag of each country using forEach function
    console.log("Countries in Asia:");
    countriesInAsia.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("--------------------");
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => {
      return country.currencies && Object.values(country.currencies).includes("USD");
    });
    if (countryWithUSD) {
      console.log("Country that uses US dollars as currency:", countryWithUSD.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.error('Error fetching data:', error));

  //------------------------------------------------------------------------------------------------------//

  // output datas
/*   Countries in Asia:
Name: Turkmenistan
Capital: [ 'Ashgabat' ]
Flag: https://flagcdn.com/tm.svg
--------------------
Name: Timor-Leste
Capital: [ 'Dili' ]
Flag: https://flagcdn.com/tl.svg
--------------------
Name: Azerbaijan
Capital: [ 'Baku' ]
Flag: https://flagcdn.com/az.svg
--------------------
Name: Vietnam
Capital: [ 'Hanoi' ]
Flag: https://flagcdn.com/vn.svg
--------------------
Name: Afghanistan
Capital: [ 'Kabul' ]
Flag: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
--------------------
Name: Kuwait
Capital: [ 'Kuwait City' ]
Flag: https://flagcdn.com/kw.svg
--------------------
Name: Kyrgyzstan
Capital: [ 'Bishkek' ]
Flag: https://flagcdn.com/kg.svg
--------------------
Name: Armenia
Capital: [ 'Yerevan' ]
Flag: https://flagcdn.com/am.svg
--------------------
Name: Tajikistan
Capital: [ 'Dushanbe' ]
Flag: https://flagcdn.com/tj.svg
--------------------
Name: Brunei
Capital: [ 'Bandar Seri Begawan' ]
Flag: https://flagcdn.com/bn.svg
--------------------
Name: Pakistan
Capital: [ 'Islamabad' ]
Flag: https://flagcdn.com/pk.svg
--------------------
Name: Bangladesh
Capital: [ 'Dhaka' ]
Flag: https://flagcdn.com/bd.svg
--------------------
Name: China
Capital: [ 'Beijing' ]
Flag: https://flagcdn.com/cn.svg
--------------------
Name: Maldives
Capital: [ 'Malé' ]
Flag: https://flagcdn.com/mv.svg
--------------------
Name: Malaysia
Capital: [ 'Kuala Lumpur' ]
Flag: https://flagcdn.com/my.svg
--------------------
Name: Lebanon
Capital: [ 'Beirut' ]
Flag: https://flagcdn.com/lb.svg
--------------------
Name: Mongolia
Capital: [ 'Ulan Bator' ]
Flag: https://flagcdn.com/mn.svg
--------------------
Name: Nepal
Capital: [ 'Kathmandu' ]
Flag: https://flagcdn.com/np.svg
--------------------
Name: Taiwan
Capital: [ 'Taipei' ]
Flag: https://flagcdn.com/tw.svg
--------------------
Name: Bhutan
Capital: [ 'Thimphu' ]
Flag: https://flagcdn.com/bt.svg
--------------------
Name: Cambodia
Capital: [ 'Phnom Penh' ]
Flag: https://flagcdn.com/kh.svg
--------------------
Name: Georgia
Capital: [ 'Tbilisi' ]
Flag: https://flagcdn.com/ge.svg
--------------------
Name: Israel
Capital: [ 'Jerusalem' ]
Flag: https://flagcdn.com/il.svg
--------------------
Name: Singapore
Capital: [ 'Singapore' ]
Flag: https://flagcdn.com/sg.svg
--------------------
Name: United Arab Emirates
Capital: [ 'Abu Dhabi' ]
Flag: https://flagcdn.com/ae.svg
--------------------
Name: Uzbekistan
Capital: [ 'Tashkent' ]
Flag: https://flagcdn.com/uz.svg
--------------------
Name: Saudi Arabia
Capital: [ 'Riyadh' ]
Flag: https://flagcdn.com/sa.svg
--------------------
Name: Japan
Capital: [ 'Tokyo' ]
Flag: https://flagcdn.com/jp.svg
--------------------
Name: Syria
Capital: [ 'Damascus' ]
Flag: https://flagcdn.com/sy.svg
--------------------
Name: Iran
Capital: [ 'Tehran' ]
Flag: https://flagcdn.com/ir.svg
--------------------
Name: South Korea
Capital: [ 'Seoul' ]
Flag: https://flagcdn.com/kr.svg
--------------------
Name: Philippines
Capital: [ 'Manila' ]
Flag: https://flagcdn.com/ph.svg
--------------------
Name: Macau
Capital: undefined
Flag: https://flagcdn.com/mo.svg
--------------------
Name: North Korea
Capital: [ 'Pyongyang' ]
Flag: https://flagcdn.com/kp.svg
--------------------
Name: Iraq
Capital: [ 'Baghdad' ]
Flag: https://flagcdn.com/iq.svg
--------------------
Name: Palestine
Capital: [ 'Ramallah', 'Jerusalem' ]
Flag: https://flagcdn.com/ps.svg
--------------------
Name: Turkey
Capital: [ 'Ankara' ]
Flag: https://flagcdn.com/tr.svg
--------------------
Name: Kazakhstan
Capital: [ 'Nur-Sultan' ]
Flag: https://flagcdn.com/kz.svg
--------------------
Name: Qatar
Capital: [ 'Doha' ]
Flag: https://flagcdn.com/qa.svg
--------------------
Name: Jordan
Capital: [ 'Amman' ]
Flag: https://flagcdn.com/jo.svg
--------------------
Name: Myanmar
Capital: [ 'Naypyidaw' ]
Flag: https://flagcdn.com/mm.svg
--------------------
Name: Thailand
Capital: [ 'Bangkok' ]
Flag: https://flagcdn.com/th.svg
--------------------
Name: Bahrain
Capital: [ 'Manama' ]
Flag: https://flagcdn.com/bh.svg
--------------------
Name: Laos
Capital: [ 'Vientiane' ]
Flag: https://flagcdn.com/la.svg
--------------------
Name: India
Capital: [ 'New Delhi' ]
Flag: https://flagcdn.com/in.svg
--------------------
Name: Yemen
Capital: [ "Sana'a" ]
Flag: https://flagcdn.com/ye.svg
--------------------
Name: Oman
Capital: [ 'Muscat' ]
Flag: https://flagcdn.com/om.svg
--------------------
Name: Indonesia
Capital: [ 'Jakarta' ]
Flag: https://flagcdn.com/id.svg
--------------------
Name: Sri Lanka
Capital: [ 'Sri Jayawardenepura Kotte' ]
Flag: https://flagcdn.com/lk.svg
--------------------
Name: Hong Kong
Capital: [ 'City of Victoria' ]
Flag: https://flagcdn.com/hk.svg
--------------------
Total population of countries: 7777721563
No country uses US dollars as currency. */
