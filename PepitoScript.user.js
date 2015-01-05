// ==UserScript==
// @name         PepitoScript
// @version      0.2
// @description  We see only servers, languages and quality that we can configure
// @author       Borja Pintos
//@downloadURL   https://github.com/BorjaPintos/pepitoScript/blob/master/PepitoScript.user.js
// @include      *://*.seriespepito.to/*
// @include      *://*.peliculaspepito.to/*
// ==/UserScript==

function selectMyLinks() {
   
    //CONFIG
    
    function getSeriesAllowLanguagesSeeOnline(){

        //es -> Español
        //la -> Latino
        //en -> Inglés
        //sub -> Inglés subtitulado en español
        return ["sub", "es"];
    }
    
    function getSeriesAllowServersSeeOnline(){
        
        //Streamcloud -> StreamCloud
        //Allmyvideos -> Allmyvideos
        return ["Streamcloud", "Allmyvideos"];
    }
       
    function getSeriesAllowLanguagesDownload(){
        
        //es -> Español
        //la -> Latino
        //en -> Inglés
        //sub -> Inglés subtitulado en español
        return ["sub", "es"];
    }
    
    function getSeriesAllowServersDownload(){
        
        //Bitshare -> BitsShare
        //Freakshare -> FreakShare
        //Mega -> Mega
        return ["Freakshare", "Bitshare", "Mega"];
    }
    
    function getPeliculasAllowLanguagesSeeOnline(){
        
        //es -> Español
        //la -> Latino
        //en -> Inglés
        //sub -> Inglés subtitulado en español
        return ["sub", "es"];
    }
    
    function getPeliculasAllowServersSeeOnline(){
        
        //Streamcloud -> StreamCloud
        //Allmyvideos -> Allmyvideos
        return ["Streamcloud", "Allmyvideos"];
    }
       
    function getPeliculasAllowLanguagesDownload(){
        
        //es -> Español
        //la -> Latino
        //en -> Inglés
        //sub -> Inglés subtitulado en español
        return ["sub", "es"];
    }
    
    function getPeliculasAllowServersDownload(){
        
        //Bitshare -> BitsShare
        //Freakshare -> FreakShare
        //Mega -> Mega
        return ["Freakshare", "Bitshare", "Mega"];
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
       
        var language = tr.children[0].children[1].childNodes[0].data;
        var server = tr.children[2].children[0].getAttribute("alt");
        i = allowLanguages.length;
        finded=false;
    	while (i--) {
            if (language == allowLanguages[i]){
            	j = allowServers.length;
                while (j--){
                    if (server == allowServers[j]){
                       finded=true;
                       break;
                    }
                }
            } 
        }
        if (!finded){
        	tr.style.display='none'
        }
    }
    
    function seriesHideNotAllowedDownload(tr){
        
		var allowLanguages = getSeriesAllowLanguagesDownload();
        var allowServers = getSeriesAllowServersDownload();
        
        var language = tr.children[0].children[1].childNodes[0].data;
        var server = tr.children[2].children[0].getAttribute("alt");
        i = allowLanguages.length;
        finded=false;
    	while (i--) {
            if (language == allowLanguages[i]){
            	j = allowServers.length;
                while (j--){
                    if (server == allowServers[j]){
                       finded=true;
                       break;
                    }
                }
            } 
        }
        if (!finded){
        	tr.style.display='none'
        }
    }
    
    function peliculasHideNotAllowedSeeOnline(tr){
        
		var allowLanguages = getPeliculasAllowLanguagesSeeOnline();
        var allowServers = getPeliculasAllowServersSeeOnline();
        var allowQuality = getPeliculasAllowQualitySeeOnline();  
 
        //var quality = classes[1];
 
        var language = tr.children[0].children[1].childNodes[0].data;
        var server = tr.children[2].children[0].getAttribute("alt");
        i = allowLanguages.length;
        finded=false;
    	while (i--) {
            if (language == allowLanguages[i]){
            	j = allowServers.length;
                while (j--){
                    if (server == allowServers[j]){
                       finded=true;
                       break;
                    }
                }
            } 
        }
        if (!finded){
        	tr.style.display='none'
        }
    }
    
    function peliculasHideNotAllowedDownload(tr){
        
		var allowLanguages = getPeliculasAllowLanguagesDownload();
        var allowServers = getPeliculasAllowServersDownload();
        var allowQuality = getPeliculasAllowQualityDownload();
        
        //var quality = classes[1];
        
        var language = tr.children[0].children[1].childNodes[0].data;
        var server = tr.children[2].children[0].getAttribute("alt");
        i = allowLanguages.length;
        finded=false;
    	while (i--) {
            if (language == allowLanguages[i]){
            	j = allowServers.length;
                while (j--){
                    if (server == allowServers[j]){
                       finded=true;
                       break;
                    }
                }
            } 
        }
        if (!finded){
        	tr.style.display='none'
        }
    }
    
    function pageSeriesPepito(){

        var table = document.body.getElementsByClassName("table")[0];//See online
        var tableBoddy = table.children[1];
        var trs = tableBoddy.childNodes;
        k = trs.length;
    	while (k--) {
        	if (trs[k].nodeType == 1) {
                seriesHideNotAllowedSeeOnline(trs[k]);
        	}
    	}

        table = document.body.getElementsByClassName("table")[1];//Download
        var tableBoddy = table.children[1];
        var trs = tableBoddy.childNodes;
        k = trs.length;
    	while (k--) {
        	if (trs[k].nodeType == 1) {
                seriesHideNotAllowedDownload(trs[k]);
        	}
    	}
    }
    
    function pagePeliculasPepito(){

        var table = document.body.getElementsByClassName("table")[0];//See online
        var tableBoddy = table.children[1];
        var trs = tableBoddy.childNodes;
        k = trs.length;
    	while (k--) {
        	if (trs[k].nodeType == 1) {
                peliculasHideNotAllowedSeeOnline(trs[k]);
        	}
    	}

        table = document.body.getElementsByClassName("table")[1];//Download
        var tableBoddy = table.children[1];
        var trs = tableBoddy.childNodes;
        k = trs.length;
    	while (k--) {
        	if (trs[k].nodeType == 1) {
                peliculasHideNotAllowedDownload(trs[k]);
        	}
    	}
        
    }

    if (window.location.href.indexOf("seriespepito.to")!=-1){
        pageSeriesPepito();
    }

    if (window.location.href.indexOf("peliculaspepito.to")!=-1){
        pagePeliculasPepito();
    }
    
}

function init() {
	selectMyLinks();
}

init();
