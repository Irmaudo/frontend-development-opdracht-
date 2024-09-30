# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Irma Udo

  #### Je startniveau:
  blauw

  #### Je focus:
  surface plane 
  1. read more button, waarbij er een nieuw artikel tevoorschijn komt
  2. dark-mode button
  3. wanneer op button wordt geklikt, komt er een andere achtergrond en een neiuwe carrousel met artikelen
  4. e-mail validator waarbij een popup komt wanneer goed is en wanneer fout is een foutmelding komt
  5. een fade tijdens het scrollen van de artikelen op de 2e pagina / deze is helaas niet gelukt /
  6. logo dat omhoog en omlaag gaat
  7. een video die de hele tijd afspeelt
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
  Dazed: https://www.dazeddigital.com

  #### Screenshot(s) van de eerste pagina (small screen): 
  homepagina 
  <img src="readme-images/homepageScreenshot.png" width="375px" alt="homepagina van de site dazed">

  #### Screenshot(s) van de tweede pagina (small screen):
  dazed 100
  <img src="readme-images/dazed100Page.png" width="375px" alt="artikel van dazed 100 pagina van de site dazed">
  <img src="readme-images/dazed100Page2.png" width="375px" alt="artikel van dazed 100 pagina van de site dazed">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

aantekeningen voor testen screenreader van dazed:

- herhaald alles de hele tijd. Bv de link wordt de hele tijd herhaald.
- Tekst kan beschreven worden in een andere taal.
- Niet alle afbeeldingen hebben eigen alt. Sommige worden benoemd met cijfers.
- De tekst wordt in het Nederlands uitgesproken, wanneer het engels is. Waardoor het heel apart klinkt.
- Wanneer je op een foto met een beschrijving komt, zegt hij alleen een zin en niet de hele tekst. Waardoor je elke keer omhoog of naar beneden moet klikken om alle tekst te horen. En je krijgt niet te horen dat je op de beschrijving kan klikken
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets_FullPage.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (hamburger menu): 
  <img src="readme-images/breakdown schets_HamburgerMenu.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### dynamisch deel (e-mail validator): 
  <img src="readme-images/breakdown schets_MailValidator.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig 
  
  Het html opzetten ging vrij goed. Toen ik eenmaal begon had ik al best snel mijn html af, omdat het vooral kopiëren en plakken is van afbeeldingen en tekst van de site. Ook ging de basis van mijn css goed. Alleen waar ik even weer moest nadenken hoe het moest, was bij flexbox. Bv mijn navigatiebar, daarvan was ik vergeten hoe dat moest maar uiteindelijk is het wel gelukt. 
  
  Wat alleen nog niet gelukt is is de column met buttons. Deze komen nog niet mooi onder/naast elkaar te staan. 

  ### Agenda voor meeting
  vragen:

  - Hoe maak ik een verticale lijn
  - hoe zorg ik ervoor dat als je op een button klikt er nieuwe artikelen tevoorschijn komen.
  - Moeten de buttons in het paarse vlak in in li of alleen button. En kan dit makkelijker in mijn code worden gezet.
  - Moet echt alle tekst en articles in mijn site?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Alle artikelen met een titel bovenaan kan je in een section zetten. Hierbij heb je uiteindelijk allemaal sections. 
  - de buttons bij het paarse vlak kunnen in een ul en hoeven geen li item
  - read more button geeft iets van 2 meer artikelen. Dit is te doen door ze in html te zetten maar in js te laten verdwijnen en alleen tevoorschijn te laten komen als er op de button wordt geklikt.
  - Niet alle tekst en artikelen hoeven op de site. Kies er gewoon een paar max 6 bv.
  - 2e pagina kan beter een andere kiezen. Omdat deze niet speciaal genoeg is en daardoor niet de criteria gaat voldoen.
  - classes verwijderen en daarvan met de sections/articles werken

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Ik heb ervoor gekozen om een andere 2e pagina uit te werken, omdat ook uit de feedbacksessie van vorige week uitkwam dat mijn 2e pagina te veel leek op min homepagina waardoor het te eenvoudig is. Daaro ga ik nu de Dazed100 pagina uitwerken. Hiervoor heb ik tot nu toe een video, content en youtube video erin gezet. Verder ben ik een beetje bezig geweest met de css en dus de vormgeving, maar die is nog niet zoals ik wil. 

  Maar vooral ben ik deze week bezig geweest met de homepage. Hier heb ik nu alle content en  zowat alle vormgeving (css) af. Alleen nog een paar kleine dingen die niet helemaal willen werken en ik moet nog een oplossing zien te verzinnen van de classes die ik nu gebruik. 

  ### Agenda voor meeting
  vragen:
  - Mijn scrollbar werkt soms wel en soms niet, hoe zorg ik ervoor dat dit wel de hele tijd werkt?
  - Het font wilt het niet doen, hoe werkt het wel?
  - Hoe kan ik de classes verminderen?



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - font via de opdracht die is gegeven proberen in css te zetten. Als dit echt niet lukt, dan om hulp vragen. (te vinden in week 1, werkgroep 1 over typografie).
  - De benamingen van de classes anders benoemen (engels of nederlands & ook duidelijkere namen geven, want is nu soms nog onduidelijk).
  - Classes zo min mogelijk gebruiken, doormiddel van nth-of-type, nth-of-child etc.
  - Scrollbar kan zijn dat het niet werkt, omdat het op de hele pagina geconnect staat en niet op het element.
  


</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
  - Niet genoeg informatie over images, zegt screenreader (later geeft de screenreader dit niet meer aan)
  - De svgs worden genoemd als afbeeldingen en hebben geen alt-tekst. Ik moet dus nog bij mijn svgs alt toevoegen.
  - Kan niet op knop klikken, krijgt alleen te horen dat je erop kan klikken als je ook daadwerkelijk op de button klikt en niet als je eroverheen scrolt. 
  - De screenreader skipt de video die je in het begin ziet op de 2e pagina. Hij noemt het niet op.
  - Je krijgt een alt tekst van de video te horen en kan de link openen doormiddel van control, option en spatie.
  - Alle images hebben een alt-tekst en worden ook door de screenreader benoemd.


  ### WCAG Checklist
   <img src="readme-images/IMG_0786.png" width="375px" alt="WCAG Checklist">
   <img src="readme-images/IMG_0787.png" width="375px" alt="WCAG Checklist">
   <img src="readme-images/IMG_0788.png" width="375px" alt="WCAG Checklist">
   <img src="readme-images/IMG_0789.png" width="375px" alt="WCAG Checklist">
   <img src="readme-images/IMG_0790.png" width="375px" alt="WCAG Checklist">
   <img src="readme-images/IMG_0791.png" width="375px" alt="WCAG Checklist">
   <img src="readme-images/IMG_0792.png" width="375px" alt="WCAG Checklist">







</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Ik was erg bang voor het javascripten, maar het viel best mee. Ik moet even inkomen, maar daarna begreep ik het weer en ging het ook wel. Alleen had ik wel moeite met het carousel te maken en dat er bij elke button een andere achtergrondkleur kwam met ook andere artikel carousellen. 

  Wat alleen nu nog niet gelukt is is de hamburgermenu en zoekbar. Het komt wel naar voorschijn, maar alleen maar vanaf een kant en niet op het hele scherm. 


  ### Agenda voor meeting
  vragen:
  - Caroussel. Hoe zorg ik ervoor dat tijdens het scrollen bij de linkerkant hetzelfde bljft?
  - Niet alle svgs willen werken wanneer je op de dark-mode button klikt. Ze veranderen dan niet van kleur, hoe zorg ik ervoor dat dit wel gebeurd?
  - Het font doet het niet als ik hem online zet, maar wel als ik hem via visual code live zet. 


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - img max-width: 100%, hiervoor zorg je ervoor dat alle images in de kolommen blijven zitten.
  - dark-mode svgs de fill-color weghalen in html en in css de kleur erin zetten. (fill: currentColor, want dan blijft de kleur zoals de kleur op dat moment op de body zit.)
  - Font werkte niet, doordat de naam niet goed is aangesproken, waardoor hij niet live werkt.
  - Idee voor nog 1 surface-plane is bij de enter mail adres een valid en invalid is. Dus je krijgt dan melding wanneer bv fout is egschreven en popup wanneer op submit wordt geklikt. 
  - Nog een idee voor de surface-plane is scrollbar bij 2e pagina met de fade animatie.  

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/myVersion.png" width="375px" alt="uitkomst opdracht">
  <img src="readme-images/dazed1002thpage.png" width="375px" alt="uitkomst opdracht">


  ### Dit ging goed/Heb ik geleerd: 

  <img src="readme-images/darkmodus.png" width="375px" alt="top">

  - De dark-modus was best makkelijk om toe te passen in mijn site, alleen wouden er soms kleinen dingen dan net niet werken, zoals de svgs die niet van kleur veranderde of dat de nav bar opeens niet van achtergrondkleur veranderde. Uiteindelijk na veel proberen toch gelukt, doormiddel van specifiek de nav nog de kleur aan te geven in css.

  <img src="readme-images/popupTextandConfetti.png" width="375px" alt="top">

  -  Met behulp van wat filmpjes en sites was dit best wel eenvoudig om te maken. Alleen duurde het wel even, omdat het vaak niet wou werken door de kleine foutjes die ik had gemaakt in mijn code. Ook de show more buttons die je erboven ziet ging goed, alleen toen ik de 2e button ook een artikel wou toevoegen had ik wat proberen, omdat ik beide hetzelfde aanroepte, waardoor als je een button had geklikt, de andere niet meer kon. 
  
  <img src="readme-images/buttonsWithNewArticleCaroussels.png" width="375px" alt="top">

  - Als laatste heb ik ook veel geleerd van deze. Hier komen eigelijk 3 verschillende dingen samen: achtergrondkleuren die veranderen na elke button die je klikt, de artikelen die dan ook veranderen en de artikel carrousel. Hierbij heb ik vooral geleerd, dat je goed moet kijken welke je met elkaar kan koppelen voor js. bv: newBackgroundButton1.addEventListener('click', function() {newColumnBackground.style.backgroundColor = '#9864dc'; hideAllCarrousels(); articleChange.style.display = 'block'; }); Ik had eerst alle carrousels per functie als 'hide' gezet, maar dat zou te veel code zijn en daardoor kan je ze samen koppelen door er een aparte functie van te maken, die je later weer kan koppelen in iets anders. 


  ### Dit was lastig/Is niet gelukt:
  <img src="readme-images/hamburgermenu.png" width="375px" alt="top">
  - Ik ben erg trots op dat dit toch nog is gelukt, omdat het steeds maar niet wou werken en daardoor ook veel tijd koste. 

  <img src="readme-images/artistsArticles.png" width="375px" alt="bummer">
  - Helaas is het niet gelukt om zoals op de site een fade-in te maken wanneer je door de artiest articles scrolled. Ik heb heel veel verschillende dingen geprobeerd, maar het wou gewoon niet werken. 

  - Wat ik nog meer erg lastig vond was om het font online te krijgen, want als ik de site live zette op visual code werkte het font, maar zodra ik hem online zet gebeurde er steeds niks. Ik heb daardoor veel verschillende dingen geprobeerd, zoals (/font/...) (font/...) (...), maar het werkte allemaal niet. Maar het is uiteindelijk wel gelukt, doordat ik het mapje font in het mapje styles heb gezet (ik weet niet alleen niet de reden waarom het nu wel werkt.)
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. afbeeldingen en tekst: https://www.dazeddigital.com
  2. email validator : https://mailtrap.io/blog/javascript-email-validation/
  3. ChatGPT voor mail validator: prompt: 'maak voorbeeld van een validator voor emailadres invoeren in code'
  3. confetti bij submit button: https://confetti.js.org/#
  4. confetti hoe in code zetten (heb dit alleen als basis gebruikt): https://www.youtube.com/watch?v=5YTK7Mor-wM
  5. ChatGPT voor oplossing van het niet gebruiken van een onlick: prompt: 'how to change background when clicked on button code without onclick'
  6. dark-mode button: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
  7. carrousel uitleg voorbeeld in codepen: htps://codepen.io/shooft/pen/abmLRMg*/
  8. youtube video over hamburgermenu: https://www.youtube.com/watch?v=M498DvQDkJo&list=WL&index=2*/
  9. svg van search-icon kwam van dazed site zelf. 
  10. video in html Chatgpt gevraagd om voorbeeld van hoe ik dit kan doen: 'Maak een voorbeeld waarbij een video in html zit en leg uit wat er gebeurt' 
</details>