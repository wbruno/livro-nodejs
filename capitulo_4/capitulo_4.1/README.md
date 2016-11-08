```
mysql> SELECT stormtroopers.id, stormtroopers.name, nickname, patents.name AS patent, divisions.name AS division FROM stormtroopers LEFT JOIN stormtrooper_division ON stormtroopers.id = stormtrooper_division.id_stormtrooper LEFT JOIN patents ON patents.id = stormtroopers.id_patent LEFT JOIN divisions ON divisions.id = stormtrooper_division.id_division;
```
