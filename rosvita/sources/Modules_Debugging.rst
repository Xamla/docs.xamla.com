
*************************
ROSVITA Modules debugging
*************************

To be able to debug Rosvita modules, 2 main steps needs to be done. First, allowing the debbug slot in Rosvita and second running the GraphHost on the host machine.

Start rosvita from the host machine with --debug option, this will login to an interactive docker session without rosvita being automatially started:

.. code-block:: bash

   rosvita_start --debug

now inside the docker session edit the file appsettings.json:

.. code-block:: bash

   sudo vi /home/xamla/Rosvita.Control/Rosvita.Server/bin/appsettings.json

add this line: 

.. code-block:: json

   "debugSlotId": "2999D35B-1347-45E7-9AB2-7C5AC62D91E1"

so the file looks like:

.. code-block:: json

   {
     "RosvitaOptions": {
       "paths": {
         "projects": "../../projects",
         "presets": "../../library/presets/",
         "robotParts": "../../library/robot_parts/",
         "meshCacheDirectory": "$(TEMP)/xamla/rosvita/cache/meshes/",
         "credentialsFile": "../../data/credentials.json",
         "rosGardenerAssembly": "../../Rosvita.RosGardener/lib/RosGardener.dll",
         "graphHostAssembly": "../../Rosvita.GraphHost/lib/Rosvita.GraphHost.dll",
         "rosServicesAssembly": "../../Rosvita.RosServices/lib/Rosvita.RosServices.dll",
         "mruProjects": "../../data/projectsMru.json",
         "mruFiles": "../../data/filesMru.json",
         "configurationElements": "../../configurationElements"
       },
       "debugSlotId": "2999D35B-1347-45E7-9AB2-7C5AC62D91E1"
     },
     "Logging": {
       "IncludeScopes": false,
       "LogLevel": {
         "Default": "Debug",
         "System": "Information",
         "Microsoft": "Information"
       }
     }
   }

start rosvita, write in docker terminal:

.. code-block:: bash

   rosvita

now go to Rosvita in the web browser, you should find a Debug slot available is Xgraph slots.

The second step is to run the GraphHost in the host machine.

open a terminal from Rosvita, archive the GraphHost binaries:

.. code-block:: bash

   cd /home/xamla/Rosvita.Control/Rosvita.GraphHost/lib
   tar -czvf graphhost.tar.gz .

Download the archive it to the host machine from the file browser in the left. go to path **"/home/xamla/Rosvita.Control/Rosvita.GraphHost/lib"**, Choose the archive file and click the download in the file browser.

Go to host machine where your downloads folder is, extract the file and go to that directory in the terminal.

test if the GraphHost will run correctly, write cmd:

.. code-block:: bash

   ./Rosvita.GraphHost run --token S2999d35b134745e79ab27c5ac62d91e1@rosvita:d3bu9 --server ws://localhost:5000/xblk

click on the debug slot and add a new graph in the debug slot (the new button below the Debug Slot tab, not the one next to it). Try adding any new module you should be able to see the debug messages being printed.

This indicate now that the debugging process working correctly. Close "Rosvita.GraphHost" running in the host terminal to start debugger from another IDE. Every time the debug process is restarted the debug slot has to be closed and reopened.

Try inserting a break point in your code with any module being created and start the debugging process. Using vscode for debugging for example:

Starting debugger from vs code:
add a debug configuration to the module workspace and change launch.json fields as:

.. code-block:: json

   // "preLaunchTask": "build",
   "program": "/PATH_TO_GRAPH_HOST/Rosvita.GraphHost",
   "args": ["run", "--token", "S2999d35b134745e79ab27c5ac62d91e1@Arosvita:d3bu9", "--server", "ws://localhost:5000/xblk"],
   "cwd": "${workspaceFolder}/bin",

change **PATH_TO_GRAPH_HOST** above with the path to the Rosvita.GraphHost

go to the debug windows, run and choose the .net core debugger. Close and start a new "Debug slot", debugged module should now be available to load from the graph. Now loading modules and inserting break points should be working correctly.