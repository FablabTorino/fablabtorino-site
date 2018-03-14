---
layout: centrale
title:  "ESP Telegram Stats"
date:   2018-03-14
published: true
permalink: ../esptelegramstat
categories: progetti
tags: infographics telegram chatbot
sito: https://github.com/karonth/EspTelegramStat
autori: Enkel bici, Marco Antonino, Faderico Vanzati, Andrea Gambedotti, Davide Gomba
copertina: esptelegramstat/esp-telegram-stat-copertina.jpg
meta: un infografica in tempo reale sull'attività online delle Comunità di Fablab Torino
---

Questo progetto ha tanti nomi, ma una funzione sola: dare con un colpo d'occhio, su un muro, una rappresentazione in tempo reale dello stato di salute delle Communities di Fablab Torino.

Il suo nome ufficiale é "**ESP Telegram Stat**".  
**ESP** sta per [ESP8266](https://en.wikipedia.org/wiki/ESP8266), il nome per esteso della prima versione di un chip prodotto da una azienda di Shangai, Espressif. Questo prodotto é interessante per il suo costo estremamente basso (il primo ESP-01 costava 2-5 Dollari, un po' di più la versione che usiamo in questo progetto) e la possibilità di connettersi ai Wifi, creando di fatto piccoli "nodi" [IoT](https://en.wikipedia.org/wiki/Internet_of_things).  
**Telegram** perché il progetto comunica con gli utenti attraverso la chat / app per cellurare famosa per le curiose funzioni (una su tutte, la possibilità di creare [chatbot](https://en.wikipedia.org/wiki/Chatbot) con funzionalità specifiche). Tutte le communities di Fablab Torino sono su Telgram.   
**Stat** sta per statistiche. Di fatto il *bot* creato per il progetto ascolta le chat di un certo numero di gruppi e tiene conto del numero di messaggi.

Questo é quello che risponde il bot quando gli chiedi le *statistiche*.

![](../img/esptelegramstat/comarebot.png)

Ad inverno 2016-2017 al Fablab avevamo ancora molte stelle di plexiglass giallo, prodotte per un altro progetto di AUG Torino fatto per la facciata di [Paratissima 2016](http://paratissima.it/evento-2016/) (Autunno-Inverno 2016). La creazione delle stelle, realizzare con scarti di plexiglass giallo fluo e l'intera operazione Paratissima merita senza dubbio un altro "progetto" di questa sezione.

![Una giovane coppia di autoctoni si immortala con un selfie davanti alle costellazioni di Paratissima, Torino Esposizioni, Novembre 2016](../img/esptelegramstat/Paratissima2016.jpg)

Cosa fare con tutte queste stelle? L'idea di rappresentare un comportamento digitale in un modo fisico é sempre stata una grande fissa del gruppo, e la celebrazione della diversità dello spazio su una parete spinse [@enkel](https://github.com/karonth) a mutuare un bot ~~finalmente?~~ utile: il compito era analizzare e *contare* il numero dei messaggi, rappresentando con lo *sfavillare* della costellazione la quantità dei messaggi. Unica domanda: quale costellazione usare: ovviamente la Costellazione di Hokuto (aka Orsa Maggiore) del cartone animato della nostra infanzia [Ken Shiro](https://it.wikipedia.org/wiki/Kenshiro)

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/is2crHua3dEk0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/gekiga-fist-of-the-north-star-hokuto-no-ken-is2crHua3dEk0">via GIPHY</a></p>

Alla base di tutto c'é una [Wemos D1](https://wiki.wemos.cc/products:d1:d1_mini) alimentata da Micro USB, che controlla 42 LED indirizzabili WS2812b, volgarmente chiamati [Neopixels](https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels), otto a stella.

Il progetto é documentato nel [repository di Enkel](https://github.com/karonth/EspTelegramStat), che ha seguito la parte di codice. Ogni stella é costruita in questo modo:

![](../img/esptelegramstat/stella1.jpg)

Autori: Enkel Bici, Marco Antonino, Faderico Vanzati, Andrea Gambedotti, Davide Gomba


<!--more-->
