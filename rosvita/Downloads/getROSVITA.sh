#!/bin/bash

echo "Docker will be installed if not already there, press CTRL+C to cancel"
read -p "Press ENTER to continue"
if [[ $(docker -v | grep -c 'Docker version') > 0 ]]; then
   echo "Docker is already installed."
else
   echo "Starting installation of Docker.."
   sudo apt-get remove docker docker-engine docker.io
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   sudo apt-get update
   sudo apt-get install docker-ce
   sudo usermod -aG docker $USER
   su - $USER
   echo "Docker CE has been installed successfully."
fi
echo ""

echo "The ROSVITA image will be downloaded from Docker Hub, press CTRL+C to cancel"
read -p "Press ENTER to continue"
echo "Getting ROSVITA from Docker Hub.."
if [[ $(grep -q 'auths": {}' ~/.docker/config.json) ]]; then 
   echo "Please log in to Docker first."
fi
docker pull xamla/early-access-rosvita:v0.2
echo "ROSVITA image has been downloaded successfully."
echo "Use 'docker rmi <image-id>' to remove old images and save disk space."
echo ""

echo "Creating script '/opt/Rosvita/rosvita_start.sh' for starting ROSVITA.."
cd /opt
if [[ $(ls | grep -x Rosvita | wc -l) == 0 ]]; then
   mkdir Rosvita
   cd Rosvita
   wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/Downloads/rosvita_start.sh
   chmod u+x rosvita_start.sh
else
   cd Rosvita
   if [[ $(ls | grep -x rosvita_start.sh | wc -l) == 0 ]]; then
      wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/Downloads/rosvita_start.sh
      chmod u+x rosvita_start.sh
   else
      echo "ROSVITA start script already exists."
   fi
fi

echo "Creating desktop icon for starting ROSVITA.."
cd ${HOME}/Desktop
if [[ $(ls | grep -x ROSVITA.desktop | wc -l) > 0 ]]; then
   echo "ROSVITA desktop icon already exists."
else
   cd /opt/Rosvita
   wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/Downloads/rosvita_icon.png
   cd ${HOME}/Desktop
   wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/Downloads/ROSVITA.desktop
   chmod a+x ROSVITA.desktop
fi
echo "Finished."
echo ""

echo "ROSVITA will be started, press CTRL+C to cancel"
read -p "Press ENTER to continue"
./rosvita_start.sh
