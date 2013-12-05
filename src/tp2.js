////////////////////////////////////////////////////////////////////////////////////////////////
//
// IFT1015 Devoir 2 - tp2.js
// Auteur: Santiago Paiva (1066417)
// Date: December 15, 2013
//
/////////////////////////////////////////////////////////////////////////////////////////////////

// Inclue une collection de tweets
// Il s'agit d'un tableau de tweets de nom "tweets". Chaque tweet etant decrit par un object

//Les 10 premiers tweets 
//load("http://www.iro.umontreal.ca/~felipe/IFT1015-Automne2013/ressources/tp2/tweets-10.js");

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
 * @return {}
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

/*
 * Retourne un tableau des indices des éléments du tableau tweets qui sont des tweets qui contiennent 
 * tag parmi leur htags (propriété Hashtags). Les indices seront présentés en ordre croissant. 
 * Si aucun message dans la collection ne contient le tag spécifié, alors la fonction retourne un 
 * tableau vide ([]).
 * 
 * @param {String}
 * @return {}
 */

var getTweetsAvecHTag = function(tag)
{
	var tableau = [];
    for(var i=0; i<tweets.length; i++)
	{	
        for(var j=0; j<tweets[i].Hashtags.length; j++)
        {    
    		if(tweets[i].Hashtags[j] == tag)
        	{    
    			binarySearch(tableau,i);
            	tableau.push(i);
        	}  
        }
	}
    return tableau;
	
};

/*
 * Retourne un tableau des indices des éléments du tableau tweets qui sont des tweets écris par 
 * un auteur dont la popularité (telle que définie par la propriété Auteur["Friend_Count"]) est 
 * supérieure ou égale à nb. Les indices seront présentés en ordre croissant. Là encore, un 
 * tableau vide ([]) sera retourné si aucun tweet ne correspond à ce critère.
 * 
 * @param {Number}
 * @return {}
 */

var getTweetsEcrisParAuteurPopulaire = function(nb)
{
	var tableau = [];
    for(var i=0; i<tweets.length; i++)
	{    
    		if(tweets[i].Auteur.Friend_Count >= nb)
        	{    
    			binarySearch(tableau,i);
            	tableau.push(i);
        	}  
        
	}
    return tableau;
};

/*
 * Retourne un tableau des indices des éléments du tableau tweets qui sont des tweets écris en 
 * réponse au tweet d'identificateur id. Cette information est contenue dans la propriété response_To_Tweet.
 * Les indices seront présentés en ordre croissant. Là encore, un tableau vide ([]) sera retourné si
 * aucun tweet ne correspond à ce critère. 
 * 
 * @param {String}
 * @return {}
 */
var getTweetsEnResponseAuTweet = function(id)
{
	var tableau = [];
    for(var i=0; i<tweets.length; i++)
	{    
    		if(tweets[i].response_To_Tweet == nb)
        	{    
    			binarySearch(tableau,i);
            	tableau.push(i);
        	}  
        
	}
    return tableau;
	
};

/*
 * Retourne la fréquence du htag spécifié en argument. Si le htag n'est pas présent dans la collection,
 * la fonction retourne 0.
 * 
 * @param {String}
 * @return {}
 */
var getHTagFrequency = function(htag)
{
	var f = 0;
    for(var i=0; i<tweets.length; i++)
	{    
        for(var j = 0; j<tweets[i].Hashtags.length; j++)
        {
    		if(tweets[i].Hashtags[j] == htag)
      			f++;
        }
	}
    return f;	
};

/*
 *  @param {Object} Tableau
 *  @param {String} Hastag
 *  @type {boolean} True si hashtag est dans tableau
 */
var inTableau = function(tableau,hashtag)
{    
    for(var i=0; i<tableau.length; i++)
    {    
    	if(tableau[i][0] == hashtag)
    		return true;           
    }
    return false; 
};

/*
 *  @param {Object} Tableau
 *  @return {}
 */
function sortTableau(t)
{
  t.sort(function(a,b)
    {
        return b[1] - a[1];
    });
  
};

/*
 * Retourne un tableau qui contient les nb htags les plus fréquents dans la collection ainsi que leur 
 * fréquence, c'est-à-dire le nombre de fois où un htag apparait dans une propriété htags de la collection.
 * 
 * @param {Number}
 * @return {}
 */
var getHTags = function(nb)
{ 
     var tableau = [];
     for(var i=0; i<tweets.length; i++)
	 {    
     	for(var j = 0; j<tweets[i].Hashtags.length; j++)
        {    
            if(!inTableau(tableau,tweets[i].Hashtags[j]))
            {    
            	var htag = tweets[i].Hashtags[j];
           		var freq = getHTagFrequency(htag);
            
           		tableau.push([htag,freq]);
         		sortTableau(tableau);
            
            }  
        }	
	 	 
     }
     print(tableau.slice(0,nb));
};





/*
 * Retourne un tableau des différents auteurs de la collection ainsi que le nombre de messages 
 * de cet auteur dans la collection et ses messages.
 * 
 * var auteurs = [[auteur1, m_1,...,m_n],[auteur2,m_1,...,m_n],...[auteurn,m_1,...,m_n]]; 
 * 
 * @param {}
 * @return {}
 * 
 * */
var getAuteurs = function()
{
	var auteurs = []; 
	for(var i = 0; i<tweets.length; i++)
	{
        var auteur = tweets[i].Auteur.ID;
		var text = tweets[i].Text;
        
        if(auteurs[i] != auteur) // If author is not in the list, add author to the list
    		auteurs.push([auteur,text]);
        else if(auteurs[i] == auteur)//If author is in the list, add his tweet
            auteurs[i].push(text);
	}
	//return auteurs;
    print(auteurs);
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