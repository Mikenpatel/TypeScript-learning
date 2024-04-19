To watch for the typescript changes
tsc  -w    --> From the location where we have tsconfig.js


To initize 
tsc --init   which will generate tsconfig.js file

Set up rootdir and outdir under tsconfig file
rootdir : it will by default look in that dir for the ts files and it will place the compile files under outdir
let say rootdir is /src/jdjfl.ts
what happens if we create file under root directory outside of src, it will still compile those  and create js file. To avoide this
create ignore array as in tsconfig.json

Another property:
noEmitOnError": true,      if this is true then our files will not be complied

To overwrite this : we can pass this cmd: tsc --noEmitOnError -w

