# leitner-system

To start the project, install npm dependencies and run the start script. 

```bash
npm install && npm run build && npm run start
```

The project will be running on http://localhost:3000.
To open the front interface, just open the index.html file in the browser.

To run tests, run the test script.

```bash
npm run test
```

## Explications du schema et des choix techniques.
Le schéma est disponible sur myges, dans le rendu du group.

Nous avions initialement prévu de faire un système plus complexes, qui soit surtout modulable pour que chaque module soit indépendant.
Ainsi, nous aurions tout à fait pu découper ce projet en microservices.

Cependant, nous avons été pris de cours par les projets de fin de semestre, et nous pensions que ce projet aurait été plus simple.

En tout et pour tout, nous avons passé environ 36 heures dessus à 3 depuis le samedi 17/03/2024. Nous avons beaucoup fait de mob programming ( surtout pour la schématisation
et la fin du projet ), et nous avons fait des sessions de pair programming pour le reste.

Nous avons mis en place un système assez poussé concernant l'intégration du user comme vous pourrez le voir, avec un adapter qui permet de call le micro service user si on utilise cette architecture à l'avenir.

Le taux de couverture des tests est très faible, nous en sommes conscients. 
Cependant, nous avions prévu de rendre le projet pour la date prévue du 20 février. Nos plans n'ont alors pas pu s'adapter au dernier changement quelques heures avant le rendu. Nous pensons qu'avec 9 heures en plus par personne, nous aurions pu finir le projet, ou au moins assurer une meilleure 
couverture de tests. 
Nous ne pourrons donc pas travailler sur ce projet après ce 20 février dû à d'autres échéances et des indisponibilités.
Dans l'idéal, il aurait fallu améliorer 3 axes principaux :
- La couverture des tests
- L'ajout du module Quiz qui aurait permis de gérer la limitation d'un quiz par jour et par personne notamment
- Plus d'injection de dépendance et d'inversion de dépendance pour rendre le code plus modulable, plus facilement testable.

Nous espérons que vous comprendrez notre situation, et que vous apprécierez notre travail.
