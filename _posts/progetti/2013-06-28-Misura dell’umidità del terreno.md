---
layout: centrale
title:  "Misura dell’umidità del terreno"
date:   2013-06-28
published: true
categories: progetti
permalink: ../misura-dellumidita-del-terreno-la-ricerca
tags: [DIY]
sito:
autori: Franco Magni
copertina: http://68.media.tumblr.com/cfdec27afff8c9002698d5ba8b09af99/tumblr_inline_n74fpnSsSc1scgknj.jpg
meta: Si identifica una delle opzioni, in ambito DIY, per misurare l'umidità dei suoli ad uso agricolo e sperimentale.
---
# Misura dell’umidità del terreno – la ricerca
## Discesa nel mondo delle radici

Si identifica una delle opzioni, in ambito DIY, per misurare l'umidità dei suoli ad uso agricolo e sperimentale. L'argomento è "fangoso" oltre che complesso: viene mostrato il percorso che ha permesso di trovare una soluzione abbastanza semplice ed economica per ottenere letture affidabili dell'acqua disponibile per le colture, ed i motivi che giustificano questa scelta.
Nel post successivo, Costruzione di un eccitatore per sonde resistive, si descriverà poi la costruzione e il funzionamento di questo particolare circuito per l'effettuazione di misure in corrente alternata, già utilizzato in sistemi di controllo ambientale o irrigazione automatica. In molte circostanze, i dati prodotti da questi sistemi ne permettono l'uso scientifico o professionale.

Alcuni esemplari del circuito sono disponibili per gli sperimentatori che vorranno passare alla fase seguente, ancora completamente aperta, nella quale immaginare le prime soluzioni basate su Arduino.

**“ Quando alcuni amici in Val Pellice ci hanno chiesto se si potesse automatizzare l'irrigazione di orti e frutteti, sembrava abbastanza facile a farsi: idealmente, basta rilevare l'umidità del suolo, e aprire un'elettrovalvola per irrigare il terreno quando necessario... ”**

Purtroppo il primissimo passo si è rivelato più difficile del previsto: la misura dell'umidità non è affatto semplice da eseguire! Vedremo in seguito come il concetto stesso di "umidità del suolo" presenti degli aspetti imprevedibili per il senso comune.


## Il suolo umido conduce corrente

Le ricerche per "soil moisture sensor" hanno naturalmente riportato molte ricorrenze anche nella comunità Arduino, per la vastità degli interessi dei suoi membri, e per il loro numero.
Per primi sono stati provati gli elettrodi a forcella metallica o i chiodi da inserire nel terreno, che sono apparsi nella grande maggioranza dei progetti: hanno però dato risultati bizzarri e non ripetibili. [Questi schemi](https://www.faludi.com/2006/11/02/moisture-sensor-circuit/), il cui vantaggio è la estrema semplicità di realizzazione, utilizzano una corrente continua (o a impulsi) per determinare la resistenza del terreno tramite un partitore resistivo e un pin analogico del microcontrollore. Da quanto si può leggere (e facilmente provare) vanno bene per determinare grossolanamente se l'acqua c'è, o manca.


![Il sensore proposto su gardenbot.org](http://gardenbot.org/howTo/soilMoisture/2010-07-11a_med.jpg)


Purtroppo, quasi immediatamente la corrente DC determina effetti di elettrolisi sugli elettrodi inseriti nel terreno, e le letture della resistenza del terreno divengono tanto imprevedibili da non poter più essere di nessuna utilità per una misura quantitativa.
Ecco alcuni degli esempi più famosi:

- [Botanicalls](https://www.botanicalls.com/), il più conosciuto, focalizzato sulla Internet of Things: la pianta in vaso ha un proprio account Twitter per il cui tramite comunica la disponibilità d'acqua. Progetto essenzialmente didattico, wireless. [Kit disponibile](https://www.sparkfun.com/products/retired/10334).
- [Gardenbot](http://gardenbot.org/), negli sviluppi recenti proponeva già uno [schema migliorato](http://gardenbot.org/howTo/soilMoisture/) per simulare la corrente alternata con tre pin di Arduino, o l'uso di altri metodi per la misura dell'umidità. Progetto purtroppo ibernato.
- [Cheap Vegetable Gardener](http://www.cheapvegetablegardener.com/2009/11/how-to-make-cheap-soil-moisture-sensor-2.html) propone una interessante forcella metallica inglobata nel gesso, ma la solita tecnica di lettura in DC. Nei commenti, molti suggerimenti per altri sensori, e alcune problematiche di quelli in gesso.
- [Garduino](www.instructables.com/id/Garduino-Gardening-Arduino/#step1): Gardening + Arduino, [questo](www.instructables.com/id/Garduino-Gardening-Arduino/step4/Build-Your-Moisture-Sensor/) lo step dell' Instructable specifico per i sensori, che non si discosta dalle stesse tecniche, e dagli stessi problemi. I commenti puntano sia a sensori capacitivi commerciali che all'uso della corrente alternata.
- Anche [HackADay](hackaday.com/2010/07/02/tomato-irrigation/) riporta le medesime info, e come loro almeno un'altra dozzina di siti, blog e progetti vari, e molti filmati su YouTube.


## Misurare la resistenza elettrica

Una soluzione, come appare già in molti commenti sulle pagine citate, consiste nell'eseguire la lettura della resistenza del terreno in alternata, invertendo la direzione della corrente molte volte al secondo. Questo può essere fatto sia alternando due pin del microcontrollore, che utilizzando un circuito appositamente costruito; ed ha l'effetto di impedire l'elettrolisi ed altri effetti dannosi. Tuttavia, queste misure più accurate manifestano altri problemi, perché dipendono in realtà da una moltitudine di parametri, fortunatamente minimizzabili con particolari tecniche costruttive, o via software.
Ecco alcuni dei links più significativi sull'argomento:

- [Moisture sensing with 555[(http://forum.arduino.cc/index.php/topic,20939.0.html)] un thread dal forum di Arduino, 2010. Prima scoperta delle pagine di EME Systems, che si riveleranno in seguito una miniera di informazioni.
- [Wireless soil moisture](http://forum.arduino.cc/index.php/topic,13424.0.html) è del 2009, ma ancora più interessante e ricco di informazioni. Fra gli utenti del Forum, alcuni sono ben informati anche in questi campi. Si vede anche una "copia" di un sensore Watermark.
- Interessante come in un [thread appena successivo[(http://forum.arduino.cc/index.php/topic,37975.0.html)] gli utenti siano invece completamente ignari delle info già presenti, e continuino a fissarsi sui chiodi nel terreno... ma non il mitico Grumpy Mike!
- La pagina del [modulo SMX](http://www.emesystems.com/smx.htm) del prof. Tracy Allen, sul sito della EME System; e il [pdf del manuale di istruzioni del modulo](http://www.emesystems.com/pdfs/SMX.pdf), a mio parere la più concisa ed illuminante descrizione delle tecniche di misura tensiometrica per via resistiva, e del loro significato biologico. Presente anche un utile, seppure non aggiornato, apparato di link esterni introduttivi alle misure di umidità del suolo.
- Il recente progetto [Vinaduino](http://vanderleevineyard.com/1/category/vinduino/1.html), sul blog di un viticultore californiano, usa quattro pin di Arduino per eseguire la misura su blocchi in gesso (ma continua a misurare l'umidità come una percentuale).
- Un [altro circuito](http://vanderleevineyard.com/1/category/vinduino/1.html) basato sull'integrato 555, con interfaccia 1Wire, offerto da [HobbyBoards](https://www.hobby-boards.com/store/products/Moisture-Meter.html)
- [Ancora un altro](http://www.redcircuits.com/Page18.htm), molto semplificato nell'output con tre LED, fa uso di porte logiche con triggers di Schmitt.


    Il sensore a matrice granulare autocostruito di Dogsop, dal forum di Arduino 2009


## Un eccitatore, isolato

Si è scelto di riprodurre il circuito elettronico presentato dalla EME Systems, già testato e documentato, per poter più facilmente collegare le esperienze future ai dati scientifici di provenienza universitaria disponibili in rete relativamente ai sensori resistivi "a matrice granulare" Watermark, (o agli analoghi sensori a blocco di gesso DIY). Lo schema, la PCB e il suo funzionamento con Arduino sono presentati nel post successivo, collegato a questo.


    Blocchi in gesso di qualità commerciale (Soilmoisture.com)

Qui invece ci ostiniamo ad addentrarci più teoricamente in "cosa" questa tecnica ci permette di misurare, e di quale significato abbia.
Una caratteristica importante di questo circuito eccitatore AC consiste nel fatto di produrre in uscita un segnale digitale in frequenza, leggibile con qualsiasi pin di Arduino e immune ai disturbi e agli "offset" possibili in un circuito analogico. Inoltre è galvanicamente isolato dai propri elettrodi per mezzo di due condensatori ceramici, e sufficientemente generico da essere utilizzabile con diverse tensioni di alimentazione, e con diverse tipologie di sensori terminali fra cui:

- Celle saturate con solfato di calcio (gesso) per misure resistive di **umidità del terreno** correlabili alla pressione di suzione. Funzioni di un tensiometro, letture in pressione, da -10 fino a circa -180 kiloPascal.
- Superfici texturizzate con fili conduttori (su PCB dorate, a doppia faccia) per il rilevamento della **bagnatura delle foglie**. Misure qualitative, bagnato + soglia temperatura, importanti per decidere eventuali trattamenti fitosanitari.
- Elettrodi a forchetta metallica (in questo caso hanno un uso possibile!) o di grafite, di geometria nota e diversa a seconda del range da misurare, per la determinazione del **contenuto ionico** di una soluzione. Lo strumento è un conduttivimetro, letture in micro o milli Siemens/cm.

Per il momento ci interessano solo le prime: vediamo quindi cosa c'entra una misura di pressione con l'umidità, osservando da vicino il punto di vista delle piante. Poi vedremo anche cosa ci sta a fare il gesso.

## Se io fossi una pianta: la tensiometria

La disponibilità di acqua per le piante viene rappresentata, in botanica, con la "pressione di suzione" esercitata dalle radici sul suolo, più che con misure percentuali o volumetriche dell'acqua presente. Questo parametro indica la  pressione, negativa rispetto a quella atmosferica, che le radici devono esercitare per estrarre l'acqua dal terreno, vincendo le forze interstiziali che la fanno tenacemente aderire alle particelle costituenti, dalla ghiaia alle più microscopiche particelle lamellari delle argille. Per questo motivo, a parità di contenuto volumetrico di acqua nel suolo, la pressione di suzione varia ampiamente in corrispondenza di composizioni e granulometrie differenti, con il massimo scostamento fra i terreni molto sabbiosi (resta poca acqua già a pressioni relativamente basse) e quelli argillosi (ancora molta acqua a pressioni elevate, ma irraggiungibile dalle radici oltre una certa soglia). Le varie specie vegetali hanno ognuna i propri intervalli, anche molto diversi, di pressioni di suzione nei quali crescere, sopravvivere a stento, o avvizzire. Infatti i vari ecosistemi naturali, presentando diverse caratteristiche fisiche dei suoli, sono caratterizzati da differenti pressioni di suzione (in questo caso si parla in genere di "potenziale matriciale" del terreno).


    Tensiometri meccanici, da Irrometer.com

Gli unici sensori che producono direttamente una lettura della pressione di suzione sono i tensiometri, che utilizzano le proprietà di un materiale poroso (ceramica) posto in fondo ad un tubo sigillato contenente acqua per ricreare una radice artificiale, in equilibrio osmotico fra la pressione atmosferica e l'assorbimento determinato dal suolo più o meno umido esternamente. I tensiometri sono tradizionalmente meccanici, costituiti dal tubo e da un manometro; oggi anche digitali nel caso utilizzino un sensore elettronico di pressione.
Il range misurabile va da zero (nessuna pressione necessaria per estrarre acqua, il terreno ne è saturo) fino a circa -80 kiloPascal (oltre, bollicine d'aria attraversano il setto poroso e impediscono di proseguire le misure). Questi ultimi valori sono comunque già nell'intorno delle pressioni di avvizzimento per molte colture, ed i tensiometri si adattano bene a molti casi pratici. Particolari colture "aride" come la vite, o terreni molto argillosi, potrebbero non essere i candidati ideali per la tensiometria, e necessitare delle tecniche FDR o TDR, più complesse dal punto di vista elettronico, e anch'esse da correlare per via sperimentale alla pressione di suzione.

I tensiometri, pur se intrinsecamente precisi e non troppo costosi (circa 150€), necessitano di manutenzione periodica, e non sono adatti al monitoraggio permanente. La disponibilità di un tensiometro potrebbe risultare necessaria nella taratura di sonde autocostruite di qualsiasi tipo, o nel miglioramento della correlazione sperimentale fra resistenza e corrispondenti pressioni di suzione, per uno specifico terreno in esame.
La lezione principale però consiste nel fatto che esiste una unità di misura "naturale" per la quantità d'acqua che un particolare terreno può fornire alle radici di una pianta, un parametro fisico misurabile, che rappresenta da vicino il comportamento del "suolo umido" come un sistema microscopico, fra le particelle del quale agiscono forze distanti dalla nostra esperienza quotidiana, ma fronteggiate dai processi fisiologici dalle radici.

## Radici elettroniche

Occorre fare una premessa: la Fisica consente, e il motivo esula dai nostri interessi, di stabilire una buona correlazione fra la resistenza elettrica di un materiale poroso e la corrispondente pressione di suzione (vedi link alle fonti, nelle ultime righe). Quindi è all'incirca possibile ottenere la risposta di un tensiometro da uno strumento elettronico semplice e senza manutenzione; ed è possibile rendere questa correlazione ancora più precisa se ci si prende la briga di fissarne sperimentalmente alcuni valori.

Partiamo quindi alla conquista della resistenza elettrica del suolo con il nostro eccitatore AC: sono documentati i metodi per convertire poi questo valore in quello, più utile biologicamente, della pressione di suzione.
Se avete seguito il filo del discorso giù fino a questo punto nel terreno buio e umido, ora finalmente siamo arrivati agli elettrodi, il primo iniziale centimetro di tutto sistema di monitoraggio dell'umidità. Le misteriose celle a matrice granulare o i blocchi in gesso, vediamone il funzionamento.
Esiste una equazione, che possiamo tranquillamente evitarci, che descrive come la resistenza sia influenzata da altre variabili, oltre al contenuto di acqua:

- Il contenuto in ioni disciolti (sali, fertilizzanti), ed il loro tipo chimico; la resistenza può essere anche decine di volte inferiore in casi estremi.
- La temperatura, con variazioni fra 1-3% per ogni grado (quindi circa 20% per una differenza di 10° C).
- La superficie esposta fra gli elettrodi, e la distanza fra gli stessi.

Per riuscire ad ottenere la grandezza del contenuto di acqua, bisogna evidentemente conoscere, o fissare, queste ulteriori variabili, ed è per questo motivo che sono stati originalmente ideati i sensori a blocco di gesso. Consistono semplicemente di due elettrodi in inox, posti ad una distanza fissa, ed immersi in una colata di gesso scagliola (solfato di calcio), una sostanza debolmente solubile che offre una matrice solida, porosa ed uniforme fra gli elettrodi. Inoltre, l'acqua che permea questi pori è una soluzione satura di solfato di calcio, in equilibrio con la propria fase solida (il gesso) in un buffer chimico. Quindi, entro ragionevoli limiti, abbiamo a che fare con una singola specie ionica, ad una concentrazione costante, che satura in misura variabile i pori disponibili della matrice.

Il concetto è una estensione delle originali forchette metalliche: le novità consistono, oltre a fissare la dimensione e la distanza fra gli elettrodi, nel non effettuare la misura direttamente nel terreno ma utilizzando una cella contenente un medium di porosità controllabile e uniforme, in equilibrio con l'umidità del terreno circostante, e nel bloccarne per via chimica il contenuto ionico. Resta naturalmente da eseguire la correzione per la temperatura alla quale si trova la cella stessa, ma questo può essere fatto con qualsiasi sensore fra i molti disponibili.
I sensori a blocco in gesso si prestano benissimo alla costruzione DIY, ma purtroppo si adattano meglio, per la "pasta" molto fine della matrice in scagliola e la sua notevole capacità di trattenere acqua, all'utilizzo in terreni argillosi e alla misura delle pressioni da -50 a -500 kPa, un range troppo alto per molte colture. In terreni normali, le pagine web finora visitate descrivono come i blocchi in gesso presentino un ritardo di giorni per entrare in equilibrio col disseccamento del terreno, risultando inutili per misurare pressioni basse, in terreni da mantenere molto bagnati, o molto sabbiosi.


    Il sensore a matrice granulare Watermark™ 200ss (www.irrometer.com)

Per estendere verso il basso fino a -10 kPa le pressioni di suzione misurabili sono stati ideati i sensori Watermark, una invenzione commerciale brevettata dalla Irrometer già dagli anni '80. Il costo attuale è di 35-50€ per ogni esemplare. Sono costruiti con due piccoli elettrodi concentrici in acciaio inox, posti all'interno di un cilindretto metallico forato, dotato di una membrana permeabile e riempito di sabbia silicea fine; gli elettrodi sono inoltre posizionati molto vicino ad un blocchetto in solfato di calcio. Ecco le ragioni apparenti di questo design:

1.  Gli elettrodi misurano la resistenza di un volume geometricamente stabile e abbastanza ampio di sabbia umida, e al tempo stesso sono poco esposti a eventuali variazioni di potenziale nel terreno.
2. La matrice di sabbia viene mantenuta alla giusta compattezza grazie all'involucro rigido, e permette di prescindere da differenze di granulometria del terreno o imperfetto contatto di questo con gli elettrodi.
3. La matrice di sabbia, rispetto a quella in gesso, ha pori più ampi e distribuiti, e permette alla cella di riguadagnare l'equilibrio con l'umidità del terreno circostante in tempi rapidi, senza quasi effetti di smorzamento.
4. Come nel caso dei blocchi, anche la matrice di sabbia è saturata con solfato di calcio, una sostanza che si scioglie molto lentamente e può permanere per anni all'interno del sensore. Lo scopo è il medesimo: rendere il sensore quasi immune alle variazioni della resistenza elettrica causate dalla percolazione di liquidi dal contenuto ionico differente.
5. Restano naturalmente da acquisire i valori della temperatura nei pressi della sonda di umidità: la Irrometer correda i propri kit di semplici sonde esterne.

Un vantaggio di questi sensori commerciali, per chi proseguisse nello sviluppo dell'ipotetico sistema di controllo, consiste nel fatto che sono disponibili subito, con prestazioni documentate. Si può quindi idealmente avanzare nello sviluppo delle altre funzionalità necessarie, senza doversi preoccupare di non poter poi effettivamente implementare un sistema pienamente funzionante in campo, se i sensori adatti non avessero ancora una buona versione DIY. Tramite il modulo eccitatore proposto, lo stesso sistema potrà funzionare con sensori diversi e diversi gradi di precisione, calibrato in pressioni di suzione o in modo empirico, a seconda dell'applicazione specifica.

## Conclusioni

Sebbene la misura dell'acqua effettivamente disponibile per i vegetali non sia un parametro ambientale facile da acquisire, misure resistive in corrente alternata su particolari celle offrono un metodo relativamente preciso, molto utilizzato, facilmente affrontabile dal punto di vista della costruzione elettronica, e già ampiamente descritto con esempi di codice, procedure di taratura, etc.
La questione finale, di come venga messa in relazione la resistenza misurata nelle celle e la molto più utile pressione di suzione non viene ancora discussa, ma è descritta dettagliatamente in pubblicazioni universitarie e commerciali, dove sono disponibili varie curve di correzione per terreni di diversa composizione.
Le celle necessarie sono sul mercato in esemplari dal comportamento fisico noto; e per la loro semplicità sono certamente ottenibili, a partire dagli stessi principi, con altri materiali più adatti all'autocostruzione.
La coppia cella-eccitatore descritta si presta quindi ad estendere le possibilità di un sistema di monitoraggio ambientale, oltre agli usuali dati di temperatura, umidità dell'aria, quantità di pioggia, insolazione etc.; con l'acquisizione continua del parametro di maggiore significato biologico ai fini della crescita dei vegetali, la pressione di suzione a livello delle radici.


## Fonti
 **Blocchi in gesso**

- Blocchi in gesso da [soilmoisture.com](http://www.soilmoisture.com/prod_details.asp?prod_id=1087&cat_id=20), con relativo pdf con i suggerimenti per il dislocamento in campo.
- Un brevissimo [datasheet](http://www.mea.com.au/upload/NEW/PRODUCT_Brochures/B03_Gypsum_Blocks_Web_0_1.pdf) comparativo dei blocchi in gesso e sensori Watermark, entrambi offerti un fornitore australiano.
- [Manuale](http://s.campbellsci.com/documents/us/manuals/227.pdf) per i blocchi commerciali in gesso della Delmhorst.
- Dal dipartimento di Fisica dell'Università di Torino, [taratura di un sensore](https://www.000webhost.com/migrate?utm_source=000&utm_medium=rdr&utm_campaign=old_panel_off&static=true) a matrice granulare assimilabile ai blocchi in gesso/Watermark (molta matematica!)

**Sensori Watermark**

- Il sito della [Irrometer](http://www.irrometer.com/default.htm), e la pagina della documentazione, che comprende anche i tensiometri.
- EME Systems, propone il [circuito elettronico](http://www.emesystems.com/smx.htm) selezionato per la realizzazione, e molte [risorse didattiche](http://www.emesystems.com/BS2index.htm) per l'uso dei microcontrollori nella rilevazione ambientale (BasicStamp Parallax).
- [Irrigation monitoring using soil water tension](https://catalog.extension.oregonstate.edu/), Università dell'Oregon.
- La principale pagina di link ad un'ampia bibliografia di ricerche che hanno utilizzato i sensori Watermark. Alcuni riguardano la calibrazione in kPa dei sensori stessi.
- Günther Pertoll, Centro di Sperimentazione Agraria di Laimburg. Tensiometria e sensori Watermark [nelle vigne](http://www.laimburg.it/de/suche-seite.asp?404;de/weinbau/1056.asp?&somepubl_action=300&somepubl_image_id=190761) dell'Alto Adige.
- [Summary](http://www.kimberly.uidaho.edu/water/swm/Hansen_hobos.htm) of M.K. Hansen AM400 and Onset HOBO Datalogger and Watermark Sensor Demonstration and Testing near Twin Falls, Idaho during 2000.
- Utah State University: Watermark soil moisture sensors, characteristics and operating instructions.

**Bagnatura delle foglie**

- Una [foglia artificiale](https://www.hobby-boards.com/store/products/Leaf-Wetness-Sensor.html), in vendita da HobbyBoards
- Il [modulo](http://www.emesystems.com/lwet_dat.htm) della EME Systems adattato alla lettura della bagnatura delle foglie

**Altri metodi per la misura dell'acqua contenuta nel suolo.**
Ci sono diversi altri metodi elettronici per misurare il contenuto di acqua nel suolo, ma sebbene producano risultati istantanei e più ricchi di informazioni rispetto alle celle resistive, sono improponibili per motivi di complessità e costo ([TDR](https://en.wikipedia.org/wiki/Time-domain_reflectometer) - [FDR](https://en.wikipedia.org/wiki/Frequency_domain_sensor)), o poco adatti all'interramento permanente. Altre tecniche capacitive sembrano più accessibili anche in ambito DIY. Uno dei vantaggi di questi sensori è di avere gli elettrodi isolati dal terreno, e quindi non sottoposti all'invecchiamento delle celle in gesso, quando negli anni si dissolve. Tuttavia producono dei risultati che non sono utilizzabili direttamente, e anch'essi devono essere calibrati in base alle caratteristiche fisiche del terreno da monitorare. Il segnale prodotto questi sensori è proporzionale al contenuto di acqua del terreno, compresa l'acqua dei minerali idrati!

- Una presentazione in pdf di tutte le tecniche utilizzabili per la misura del contenuto d'acqua, dall'Università della Florida.
- Un'altra presentazione delle possibili tecniche su un sito commerciale, con una quantità di prodotti disponibili.
- [ZigBee wireless soil moisture sensor design](http://aut.researchgateway.ac.nz/bitstream/handle/10292/1048/PereraTASA.pdf?sequence=3) for vineyard management system, studio molto interessante, tratta anche di altre tecniche da integrare alla lettura dell'umidità. Tesi per il PhD all'università di Aukland.
- Open-Source Hardware Is a Low-Cost Alternative for Scientific Instrumentation and Research, un [articolo](http://www.scirp.org/Journal/PaperInformation.aspx?paperID=18950) (selezionare il link al full text) della rivista online Modern Instrumentation, interessante, cita espressamente Arduino e descrive un sistema di monitoraggio ambientale.
- [Vegetronix](http://www.vegetronix.com/Products/VH400/), un sensore molto conosciuto, basato su tecniche capacitive, rivolto al mercato hobbistico per il basso costo, e adatto al collegamento con Arduino. Qui le [curve](http://www.vegetronix.com/Curves/VG400-RevD/VG400-RevD-Curves.phtml) voltaggio/contenuto d'acqua (per un unico tipo di terreno purtroppo), e le [correzioni](http://www.vegetronix.com/Products/VH400/VH400-Piecewise-Curve.phtml) suggerite. Nessun collegamento alla tensiometria.
- Lo schema di un [sensore capacitivo](http://www.dietmar-weisser.de/elektronikprojekte1/analogtechnik/78-pflanzen-giessindikator) DIY (in tedesco), e [un altro](https://www.mikrocontroller.net/topic/169824#1623456), da Mikrokontroller.net.
- [Hydra probe](http://www.stevenswater.com/products/sensors/soil/), una sonda professionale, quasi 400$!
- L'ampia gamma di [sensori](http://www.decagon.com/en/products/sensors/soil-moisture-sensors/) capacitivi della Decagon Devices, usati nella ricerca scientifica.
