```
mysql> SELECT stormtroppers.id, stormtroppers.name, nickname, patents.name AS patent, divisions.name AS division FROM stormtroppers LEFT JOIN stormtropper_division ON stormtroppers.id = stormtropper_division.id_stormtropper LEFT JOIN patents ON patents.id = stormtroppers.id_patent LEFT JOIN divisions ON divisions.id = stormtropper_division.id_division;
```
