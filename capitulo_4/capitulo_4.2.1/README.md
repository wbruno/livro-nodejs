```
> db.stormtroppers.insert({ name: 'CT-1010', nickname: 'Fox', divisions: ['501st Legion', 'Coruscant Guard'], patent: 'Commander' });

> var clones = [{ nickname: 'Hardcase', divisions: ['501st Legion'], patent: 'Soldier' }, { name: 'CT-27-5555', nickname: 'Fives', divisions: ['Coruscant Guard'], patent: 'Soldier' }, { name: 'CT-2224', nickname: 'Cody', divisions: ['212th Attack Battalion'], patent: 'Commander' }, { name: 'CT-7567', nickname: 'Rex', divisions: ['501st Legion'], patent: 'Capitain' }];
> db.stormtroppers.insert(clones);
```
