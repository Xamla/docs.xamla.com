#!/bin/bash

echo "Check if folder 'Rosvita' with subfolders 'data', 'projects' and 'robot_parts' exist and create them otherwise..."
cd ~
if [[ $(ls | grep -x Rosvita | wc -l) > 0 ]]; then
   echo "Folder 'Rosvita' exists."
   cd Rosvita
   if [[ $(ls | grep -x data | wc -l) > 0 ]]; then
        echo "Subfolder 'data' exists."
   else
        echo "Creating subfolder 'data'."
        mkdir data
   fi
   if [[ $(ls | grep -x projects | wc -l) > 0 ]]; then
        echo "Subfolder 'projects' exists."
   else
        echo "Creating subfolder 'projects'."
        mkdir projects
   fi
   if [[ $(ls | grep -x robot_parts | wc -l) > 0 ]]; then
        echo "Subfolder 'robot_parts' exists."
   else
        echo "Creating subfolder 'robot_parts'."
        mkdir robot_parts
   fi
else
   echo "Creating folder 'Rosvita' with subfolders 'data', 'projects' and 'robot_parts'."
   mkdir Rosvita
   cd Rosvita
   mkdir data projects robot_parts
fi

echo "Check if ROSvita is already running..."
if [[ $(docker ps -a | grep rosvita | wc -l) > 0 ]]; then
        echo "YES"
        echo "ROSvita is already running"
        echo "Use 'docker attach rosvita' to attach to the container. Use CTRL+P, CTRL+Q to detach from the container."
        exit 0
else
        echo "NO"
        echo "Starting ROSvita"
        docker run -dti --net=host --rm --name=rosvita --user xamla --privileged -v /dev/bus/usb:/dev/bus/usb -v ~/Rosvita/data:/home/xamla/Rosvita.Control/data -v ~/Rosvita/projects:/home/xamla/Rosvita.Control/projects -v ~/Rosvita/robot_parts:/home/xamla/Rosvita.Control/library/robot_parts/custom xamla/early-access-rosvita:v0.2 rosvita
fi

if [[ $(docker ps -a | grep rosvita | wc -l) > 0 ]]; then
        echo "Ok"
        echo "Use 'docker attach rosvita' to attach to the container. Use CTRL+P, CTRL+Q to detach from the container."
else
        echo "Failed"
        exit 1
fi

