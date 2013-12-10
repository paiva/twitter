twitter
=======

Customized Tweeter functions for industry use. 

List of core functions: 
- getTweetsEcrisPar(id) {implements binarySearch(t,val)}
- getTweetsAvecHTag(tag) {implements binarySearch(t,val)}
- getTweetsEcrisParAuteurPopulaire(nb) {implements binarySearch(t,val)}
- getTweetsEnResponseAuTweet(id) {implements binarySearch(t,val)}
- getHTagFrequency(htag)
- getHTags(nb) {implements getHTagFrequency(htag) and sortTaleau(t)}
- getAuteurs() {implements inTableau(auteurs,auteur) sortAuteurs(auteurs) auteurIndex(auteurs,auteur)}
- getWords(id,nb) {implements inTableau(auteurs,auteur) getWordFrequency(words,word) inWords(tableau,word) sortTableau(tableau)}
- getChaines(id,nb)

Boolean Functions:
- inTableau(tableau,hashtag)
- inWords(words,word)

Sorting Functions:
- binarySeach(t,val) {implements to_insert(i)}
- to_insert(i)
- sortTableau(t)
- sortAuteurs(t)

Other Functions:
- auteurIndex(auteurs,auteur)
- getWordFrequency(words,word)

