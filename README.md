pepitoScript
============

#Script that we uses in seriespepito.com and peliculaspepito.com

####Author : Borja Pintos

***

####We also use the following plugins.

* [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=es) - For Chrome 
* [Greasemonkey](https://addons.mozilla.org/es/firefox/addon/greasemonkey/) - For Firefox

***

####Installation

You only click on de pepitoScript.user.js and when you see de code, you click on Raw button (it is up, on the resumen lines bar)
Then, click on the install button

####Configuration

If you want configure your personal configuration, you need edit pepitoScript.

Tampermonkey:
Click Tampermonkey.
Go to Dashboard/installed Script.
Click on pepitoScript, then you will see the code.

Greasemonkey:
Click manage UserScript
Right click on PepitoScript and Edit, then you will see the code


Because see online and download have diferents servers, 
seriespepito and peliculaspepito the name of server are diferent and peliculas pepito have diferente qualities:
I have implemented 10 functions:

getSeriesAllowLanguagesSeeOnline -> seriespepito language see online options
getSeriesAllowServersSeeOnline -> seriespepito server see online options

getSeriesAllowLanguagesDownload -> seriespepito language download options
getSeriesAllowServersDownload -> seriespepito server download options

getPeliculasAllowLanguagesSeeOnline -> peliculaspepito language see online options
getPeliculasAllowServersSeeOnline -> peliculaspepito server see online options
getPeliculasAllowQualitySeeOnline- > peliculaspepito quality see online options

getPeliculasAllowLanguagesDownload -> peliculaspepito language download options
getPeliculasAllowServersDownload -> peliculaspepito server download options
getPeliculasAllowQualityDownload -> peliculaspepito quality download options

if you want another language you need added to return on the correct funcion. for example:

This is the default function

    function getSeriesAllowLanguagesSeeOnline(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0", "idioma_3"];
    }

If you want only Spanish languages. you need deleted idioma_3 like this (don't forget deleted the coma) :

    function getSeriesAllowLanguagesSeeOnline(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0"];
    }
   
And for example, if you want all Spanish,VO and VOSE, you need add params like this (don't forget add the coma and quotes)

    function getSeriesAllowLanguagesSeeOnline(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0", "idioma_2", "idioma_3"];
    }

And the same for the others function.

When you finish click on save button and refresh the seriespepito or PeliculasPepito page, for see your personal settings.

If you want a specific server that I don't put on the commens, contact me on 
twitter at @wakynian and I response you with the server name.

Thank you for using it

