////////////////////////////////////////////////////////////////////////////////////////////////
//
// Devoir 2 - Twitter-like Application using JSON
// Author: Santiago Paiva
// Date: December 15, 2013
//
/////////////////////////////////////////////////////////////////////////////////////////////////

// Inclue une collection de tweets
// Il s'agit d'un tableau de tweets de nom "tweets". Chaque tweet etant decrit par un object

//Les 10 premiers tweets 
load("http://www.iro.umontreal.ca/~felipe/IFT1015-Automne2013/ressources/tp2/tweets-10.js");

//Les 50 premiers tweets
//load("http://www.iro.umontreal.ca/~felipe/IFT1015-Automne2013/ressources/tp2/tweets-50.js");

//Les 100 premiers tweets
//load("http://www.iro.umontreal.ca/~felipe/IFT1015-Automne2013/ressources/tp2/tweets-100.js");

// Tous les tweets (1007)
//load("http://www.iro.umontreal.ca/~felipe/IFT1015-Automne2013/ressources/tp2/tweets.js");

////////////////////////////////////////////////////////////////////////////////////////////////
// Cette ficher offre un ensemble de fonctions decrites 
///////////////////////////////////////////////////////////////////////////////////////////////

var to_insert = function(i)
{ 
    return -i-1;
}; // voir convention

var binarySearch = function(t, val)
{
    var mil, deb = 0;
    var fin = t.length-1;
    
    while (deb <= fin)
    {
		mil = deb + Math.floor((fin-deb) / 2); 
		if (t[mil] === val)
            return mil;
		if (t[mil] > val) fin = mil-1;
		else
        	deb = mil+1;
    } // deb <= fin

    return to_insert(deb); // place ou inserer
};


/*
 * Retourne un tableau des indices des éléments du tableau tweets qui sont des tweets dont l'auteur  a pour 
 * identificateur la valeur id (propriété Auteur.ID). Les indices seront présentés en ordre croissant. 
 * Si aucun message dans la collection n'a été écrit par l'auteur spécifié, alors la fonction retourne un 
 * tableau vide ([]).
 * 
 * @param {String} 
 * 
 */

var getTweetsEcrisPar = function(id)
{
	var tableau = [];
    for(var i=0; i<tweets.length; i++)
	{	
    	if(tweets[i].Auteur.ID == ID)
        {    
			binarySearch(tableau,i);
    		tableau.push(i);
        }    
	}
    return tableau;
};

var getTweetsAvecHTag = function(tag)
{
	var tableu = []; 
	return tableu;
	
};

var getTweetsEcrisParAuteurPopulaire = function(n)
{
	var tableu = []; 
	return tableu;
	
};

var getTweetsEnResponseAuTweet = function(id)
{
	var tableu = []; 
	return tableu;
	
};

var getHTags = function(n)
{
	var tableu = []; 
	return tableu;
	
};

var getHTagFrequency = function(htag)
{
	var frequency; 
	return frequency;
	
};

var getAuteurs = function()
{
	var tableu = []; 
	return tableu;
	
};

var getWords = function(id,n)
{
	var tableu = []; 
	return tableu;
	
};

var getChaines = function(id,n)
{
	var tableu = []; 
	return tableu;
	
};