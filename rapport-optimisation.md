# Rapport d’optimisation du projet ScrollyTelling

[PageSpeed Insights Report from May 12, 2024, 10:20:07 AM ](https://pagespeed.web.dev/analysis/https-gabriel-tim-momo-com/figoh3s3wl?form_factor=desktop)

Il n'y a pas de problèmes présents sur le site, le site semble etre stable avec une moyenne de 95.

## Problème #1

  ### Images sont tous chargées à l'ouverture de la page.
  les images sont tous chargés à l'ouverture de la page ce qui pourrait causer un problème de performance en général du site

 ### Action concrète : 
  Lazy Loading


 ### Résultat: 
  Il n'y a pas d'impact visible sur la performance du site, mais l'élément Kevin semble avoir un probleme d'apparitions avec le lazy loading.

## Problème #2

### Quelques Images pourraient etre mieux compresser avec un autre format que png ou jpeg
Il y a certaine image dans le code qui utilise un format png mais il y a d'autres formats existants qui pourrait facilité a la performance de compression de fichier tel que le webpg et le avif

### Action concrète:
changement de format png en Webp

### Résultat:
Il n'y a plus de problème d'icone d'erreur de compression sur pagespeed

## Problème #3

### Il y a des éléments qui ne contient pas de width et de height
Il y a des elements qui ne contient pas de width et de height lorsqu'il n'y a pas de width ni de height cela empeche le navigateur de lui donné l'espace qu'il a besoin spécifiquement

### Action concrète:
 Ajoue d'un width et d'un height pour l'élément roue src="img/autres/scroll1.png" alt="">

### Résultat:
Il y a maintenant un width réglant le prblème du width et de height dans le site pagespeed

## [Report from May 12, 2024, 8:41:49 PM ](https://pagespeed.web.dev/analysis/https-gabriel-tim-momo-com/dfr534tjhy?form_factor=mobile)
la performance du téléphone a grandement augmenté depuis l'ancien rapport et tout les autres chiffres sont bien augmentés.