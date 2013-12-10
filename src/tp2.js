////////////////////////////////////////////////////////////////////////////////////////////////
//
// IFT1015 Programmation 1
// Devoir 2 - tp2.js
// Auteur: Santiago Paiva (1066417)
// Date: Dec 15, 2013
//
// Developpé avec Aptana Studio 3
// https://github.com/paiva/twitter
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
 * @param {String} id 
 * @return tableau
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
 * @param {String} tag
 * @return tableau
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
 * @param {Number} nb
 * @return tableau
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
 * @param {String} id
 * @return tableau
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
 * @param {String} htag
 * @return f 
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
 *  @type {boolean}
 *  @param tableau
 *  @param hastag
 *  @return True si hashtag est dans tableau
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
 *  @return Ordre decroissant
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
 * @param {Number} nb
 * @return Slice du tableau
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
     return tableau.slice(0,nb);
};

/*
 *  @param {Object} Tableau
 *  @return Ordre alphabétique des auteurs
 */
var sortAuteurs = function(t)
{ 
  t.sort(function(a,b)
  {
      if (a[0] < b[0])
          return -1;
      if (a[0] > b[0])
          return 1;
      return 0;
  });
};

/*
 * Retourne l'index de l'auteur dans le tableau des auteurs
 * @param {Object} auteurs, une tableau des auteurs
 * @param {String} auteur, un auteur recherche
 * @return {Number} i, l'index de l'auteur
 */
var auteurIndex = function(auteurs,auteur)
{
  for(var i=0;i<auteurs.length; i++)
  {
   if(auteurs[i][0] == auteur)
       return i;
  }
};


/*
 * Retourne un tableau des différents auteurs de la collection ainsi que le nombre de messages 
 * de cet auteur dans la collection et ses messages.
 * 
 * var auteurs = [[auteur1, m_1,...,m_n],[auteur2,m_1,...,m_n],...[auteurn,m_1,...,m_n]]; 
 * 
 * @return tableau
 * 
*/
var getAuteurs = function()
{
	var auteurs = [];
    var tableau = [];
    
    for(var i = 0; i<tweets.length; i++)
	{
        var auteur = tweets[i].Auteur.ID;
		var text = tweets[i].Text;
        
        if(!inTableau(auteurs,auteur))
        {    
            auteurs.push([auteur,text]);
            sortAuteurs(auteurs);
        }
        else if(inTableau(auteurs,auteur))
            auteurs[auteurIndex(auteurs,auteur)].push(text);
    }
	
    for(var i=0; i<auteurs.length; i++)
    {   
        if(auteurs[i].length-1 == 1)
        {    
        	tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " message\n" + "        " + "tweet " + (auteurs[i].length-1) + " " + auteurs[i][1] + " \n"));   
        }
        else if(auteurs[i].length-1 == 2)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"));
        }
        else if(auteurs[i].length-1 == 3) 
        {    
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"));
        }
        else if(auteurs[i].length-1 == 4)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"));
        }
        else if(auteurs[i].length-1 == 5)
        {
          	tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"));    
        }
        else if(auteurs[i].length-1 == 6)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"));   
        }
        else if(auteurs[i].length-1 == 7)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages, showing first 7 messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"));   
        
        }
        else if(auteurs[i].length-1 == 8)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"));   
        
        }
        else if(auteurs[i].length-1 == 9)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"));   
        
        }
        else if(auteurs[i].length-1 == 10)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"));   
        }
        else if(auteurs[i].length-1 == 11)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+11) + " " + auteurs[i][11] + " \n"));   
        
        }
        else if(auteurs[i].length-1 == 12)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+11) + " " + auteurs[i][11] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+12) + " " + auteurs[i][12] + " \n"));   
        
        }
        else if(auteurs[i].length-1 == 13)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+11) + " " + auteurs[i][11] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+12) + " " + auteurs[i][12] + " \n"  
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+13) + " " + auteurs[i][13] + " \n"));   
        }
        else if(auteurs[i].length-1 == 14)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+11) + " " + auteurs[i][11] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+12) + " " + auteurs[i][12] + " \n"  
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+13) + " " + auteurs[i][13] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+14) + " " + auteurs[i][14] + " \n"));   
        }
        else if(auteurs[i].length-1 == 15)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+11) + " " + auteurs[i][11] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+12) + " " + auteurs[i][12] + " \n"  
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+13) + " " + auteurs[i][13] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+14) + " " + auteurs[i][14] + " \n"  
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+15) + " " + auteurs[i][15] + " \n"));   
        }
        else if(auteurs[i].length-1 >= 16)
        {
            tableau.push(("Auteur " + auteurs[i][0] + " : " + (auteurs[i].length-1) + " messages, premiere 16 messages\n" + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+1) + " " + auteurs[i][1] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+2) + " " + auteurs[i][2] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+3) + " " + auteurs[i][3] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+4) + " " + auteurs[i][4] + " \n"
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+5) + " " + auteurs[i][5] + " \n"    
            + "        " + "tweet " + (auteurs[i].length-auteurs[i].length+6) + " " + auteurs[i][6] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+7) + " " + auteurs[i][7] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+8) + " " + auteurs[i][8] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+9) + " " + auteurs[i][9] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+10) + " " + auteurs[i][10] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+11) + " " + auteurs[i][11] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+12) + " " + auteurs[i][12] + " \n"  
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+13) + " " + auteurs[i][13] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+14) + " " + auteurs[i][14] + " \n"  
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+15) + " " + auteurs[i][15] + " \n"   
        	+ "        " + "tweet " + (auteurs[i].length-auteurs[i].length+16) + " " + auteurs[i][16] + " \n"));   
        }
    }
    return tableau; 
 	
};

/* 
 * @type {Boolean}
 * @param words - un tableau
 * @param word - un mot
 * @return True si word apparait dans words
 */
var inWords = function(words,word)
{    
    for(var i=0; i<words.length; i++)
    {    
    	for(var j=0; j<words[i].length; j++)
        {    
        	if(words[i][j] == word)
    			return true; 
        }
    }
    return false; 
};

/*
 *  Retourne le nb de fois que word apparait dans words[]
 *  @param {Array} - Word[], un tableau avec des mot
 *  @param {String} - Word, le mot recherche
 *  @return f
 */
var getWordFrequency = function(words,word)
{
	var f = 0;
    for(var i=0; i<words.length; i++)
	{    
        for(var j=0; j<words[i].length; j++)
        {    
            if(words[i][j] == word)
                f++;
        }
	}
    return f;	
};


/*
 * Retourne un tableau des nb mots les plus plus fréquents dans les tweets de l'auteur dont l'identificateur est
 * spécifié en argument. Chaque mot doit être accompagné de sa fréquence, c'est-à-dire le nombre de fois où ce mot
 * apparaît dans l'ensemble des messages de l'auteur. Le tableau doit donc contenir des paires (objets) qui doivent
 * être affichées en ordre décroissant de fréquence.
 * 
 * @param {Number} id - L'auteur
 * @param {Number} nb - Le nb de mots les plus frequente dans les tweets de l'auteur
 * @return id + slice du tableau
 */
var getWords = function(id,nb)
{
	var words = [];
	var auteurs = [];
    var tableau = [];
    
    for(var i = 0; i<tweets.length; i++)
	{
        var auteur = tweets[i].Auteur.ID;
		var text = tweets[i].Text;
        
        if(!inTableau(auteurs,auteur))
        {    
            auteurs.push([auteur,text]);
        }
        else if(inTableau(auteurs,auteur))
            auteurs[auteurIndex(auteurs,auteur)].push(text);
    }
    // We add all author tweets into words[] 
    for(var i=0; i<auteurs.length;i++)
	{
		for(var j=1; j<auteurs[i].length; j++)
		{	
			// If we find the author, get his/her tweets 
			if(auteurs[i][0] == id)
            {    
                words.push(auteurs[i][j]); 
                
            }	
		}
	}
    
    // Split strings
    for(var i=0; i<words.length;i++)
    {
     	words[i] = words[i].split(" ");
    }
    
	for(var k=0; k<words.length; k++)
    {    
    	for(var m=0; m<words[k].length; m++)
        {	
            var word = words[k][m];
        	var freq = getWordFrequency(words,word);
        
        	if(!inWords(tableau,word))  
       
            	tableau.push([word,freq]);
            	sortTableau(tableau); 
        }
    
    }
    return id + " " + tableau.slice(0,nb);
    
};

/*
 * Fonction qui repère et affiche dans la collection l'ensemble des chaînes 
 * de longueur nb identifiées. 
 * 
 * @param {String} id - id d'un utilisateur
 * @param {Number} nb - le nombre de tweets "in response to "
 * @return chaines de tweets recursives
 */
var getChaines = function(id,nb)
{	
    // Base case
    if(nb == 1)
    	for(var i=0; i<tweets.length; i++)
		{	
			
            var IdTweets = tweets[i].IdTweets;
        	var auteur = tweets[i].Auteur.ID;
        	var text = tweets[i].Text;
        	
        	if(IdTweets == id)       
        		print(nb + " " + id + " auteur: " + auteur + " text: " + text + " \n");
    	}
	// Recursion step    
    else    
        for(var i=0; i<tweets.length; i++)
		{	
			var IdTweets = tweets[i].IdTweets;
          
        	if(IdTweets == id) 
            {    
        		
        		var auteur = tweets[i].Auteur.ID;
           		var text = tweets[i].Text;
           		var response_to_tweet = tweets[i].response_To_Tweet;
                
                print(nb + " " + id + " auteur: " + auteur + " text: " + text + " \n");
            	return getChaines(response_to_tweet,nb-1);
            }
        }
};