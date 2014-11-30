// ==UserScript==
// @name         PepitoScript
// @version      0.1
// @description  We see only servers, languages and quality that we can configure
// @author       Borja Pintos
//@downloadURL   https://github.com/BorjaPintos/pepitoScript/blob/master/PepitoScript.user.js
// @include      *://*.seriespepito.com/*
// @include      *://*.peliculaspepito.com/*
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "http://code.jquery.com/jquery-2.1.0.min.js");
    script.addEventListener('load', function () {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function onLoadJquery() {
   
    //CONFIG
    
    function getSeriesAllowLanguagesSeeOnline(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0", "idioma_3"];
    }
    
    function getSeriesAllowServersSeeOnline(){
        
        //servidor_42 -> StreamCloud
        //servidor_25 -> Allmyvideos
        return ["servidor_42", "servidor_25"];
    }
       
    function getSeriesAllowLanguagesDownload(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0", "idioma_3"];
    }
    
    function getSeriesAllowServersDownload(){
        
        //servidor_7 -> BitsShare
        //servidor_19 -> FreakShare
        //servidor_44 -> Uploaded
        return ["servidor_7", "servidor_19", "servidor_44"];
    }
    
    function getPeliculasAllowLanguagesSeeOnline(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0", "idioma_3"];
    }
    
    function getPeliculasAllowServersSeeOnline(){
        
        //servidor_12 -> StreamCloud
        //servidor_3 -> Allmyvideos
        return ["servidor_3", "servidor_12"];
    }
       
    function getPeliculasAllowLanguagesDownload(){
        
        //class of tr
        //idioma_0 -> Español
        //idioma_1 -> Latino
        //idioma_2 -> Inglés
        //idioma_3 -> Inglés subtitulado en español
        return ["idioma_0", "idioma_3"];
    }
    
    function getPeliculasAllowServersDownload(){
        
        //servidor_4 -> BitsShare
        //servidor_6 -> FreakShare
        //servidor_14 -> Uploaded
        return ["servidor_4", "servidor_6", "servidor_14"];
    }
    
   function getPeliculasAllowQualitySeeOnline(){
        
       //calidad_1 -> TS Screener
       //calidad_2 -> DVD/BR Screener
       //calidad_3 -> DVD RIP
       //calidad_4 -> HD/BR
        return ["calidad_3", "calidad_4"];
    }
    
   function getPeliculasAllowQualityDownload(){
        
       //calidad_1 -> TS Screener
       //calidad_2 -> DVD/BR Screener
       //calidad_3 -> DVD RIP
       //calidad_4 -> HD/BR
        return ["calidad_3", "calidad_4"];
    }
    
    //END CONFIG
       
    function seriesHideNotAllowedSeeOnline(tr){
        
		var allowLanguages = getSeriesAllowLanguagesSeeOnline();
        var allowServers = getSeriesAllowServersSeeOnline();
        
    	var classes = tr.attr('class').split(' ');
        var language = classes[0];
        var server = classes[1];
        
        if ($.inArray(language,allowLanguages)>-1){
            if ($.inArray(server,allowServers)<0){ 
                tr.hide();
            }
        }
        else {
        	tr.hide();
        }
    }
    
    function seriesHideNotAllowedDownload(tr){
        
		var allowLanguages = getSeriesAllowLanguagesDownload();
        var allowServers = getSeriesAllowServersDownload();
        
    	var classes = tr.attr('class').split(' ');
        var language = classes[0];
        var server = classes[1];
        
        if ($.inArray(language,allowLanguages)>-1){
            if ($.inArray(server,allowServers)<0){ 
                tr.hide();
            }
        }
        else {
        	tr.hide();
        }
    }
    
    function peliculasHideNotAllowedSeeOnline(tr){
        
		var allowLanguages = getPeliculasAllowLanguagesSeeOnline();
        var allowServers = getPeliculasAllowServersSeeOnline();
        var allowQuality = getPeliculasAllowQualitySeeOnline();
        
    	var classes = tr.attr('class').split(' ');
        var language = classes[0];
        var quality = classes[1];
        var server = classes[2];
        
        if ($.inArray(language,allowLanguages)>-1){
            if ($.inArray(quality,allowQuality)>-1){
                if ($.inArray(server,allowServers)<0){ 
                    tr.hide();
            	}
            }
            else{
                tr.hide();
            }
        }
        else {
        	tr.hide();
        }
    }
    
    function peliculasHideNotAllowedDownload(tr){
        
		var allowLanguages = getPeliculasAllowLanguagesDownload();
        var allowServers = getPeliculasAllowServersDownload();
        var allowQuality = getPeliculasAllowQualityDownload();
        
    	var classes = tr.attr('class').split(' ');
        var language = classes[0];
        var quality = classes[1];
        var server = classes[2];
        
        if ($.inArray(language,allowLanguages)>-1){
            if ($.inArray(quality,allowQuality)>-1){
                if ($.inArray(server,allowServers)<0){ 
                    tr.hide();
                }
            } else{
                tr.hide();
            }
        }
        else {
        	tr.hide();
        }
    }
    
    function pageSeriesPepito(){
        //ttipo0 -> see online
        var table = $('#ttipo0');
        var tableBoddy = table.children('tbody');
        var trs = tableBoddy.children('tr');
        
        $(trs).each(function(){
            seriesHideNotAllowedSeeOnline($(this));
        });
        
        //ttipo1 -> download
        table = $('#ttipo1');
        tableBoddy = table.children('tbody');
        trs = tableBoddy.children('tr');
        
        $(trs).each(function(){
            seriesHideNotAllowedDownload($(this));
        });
    }
    
    function pagePeliculasPepito(){
        //ttipo1 -> see online
        var table = $('#ttipo1');
        var tableBoddy = table.children('tbody');
        var trs = tableBoddy.children('tr');
        
        $(trs).each(function(){
            peliculasHideNotAllowedSeeOnline($(this));
        });
        
        //ttipo2 -> download
        table = $('#ttipo2');
        tableBoddy = table.children('tbody');
        trs = tableBoddy.children('tr');
        
        $(trs).each(function(){
            peliculasHideNotAllowedDownload($(this));
        });
        
    }

    if (window.location.href.indexOf("seriespepito.com")!=-1){
        pageSeriesPepito();
    }

    if (window.location.href.indexOf("peliculaspepito.com")!=-1){
        pagePeliculasPepito();
    }
    
}

function init() {
	addJQuery(onLoadJquery);
}

init();
