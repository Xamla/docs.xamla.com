#!/bin/bash

echo "Docker will be installed if not already there, press CTRL+C to cancel"
read -p "Press ENTER to continue and follow the instructions on screen"

if [[ $(docker -v | grep -c 'Docker version') > 0 ]]; then
   echo "Docker is already installed."
else
   echo "Starting installation of Docker.."
   sudo apt-get remove docker docker-engine docker.io
   sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   sudo apt-get update
   sudo apt-get install -y docker-ce
   if [[ $(sudo docker -v | grep -c 'Docker version') > 0 ]]; then
      echo "Docker CE has been installed successfully."
   else
      echo "Docker installation failed. Please try again."
      exit 1
   fi
   echo "Adding user to group docker.."
   sudo usermod -aG docker $USER
fi
echo ""

echo "The ROSVITA image will be downloaded from Docker Hub, press CTRL+C to cancel"
read -p "Press ENTER to continue"
echo "Getting ROSVITA from Docker Hub.."
sudo docker pull xamla/rosvita:latest
if [[ $(sudo docker images | grep -c 'xamla/rosvita') == 0 ]]; then
   echo "Could not download Rosvita image. Please check your internet connection. If the problem does not go away, we are happy to help you at http://discuss.xamla.com."
   exit 1
else
   echo "ROSVITA image has been downloaded successfully."
   echo "Use 'docker rmi <image-id>' to remove old images and save disk space."
fi
echo ""

echo "Creating script '/opt/Rosvita/rosvita_start.sh' for starting ROSVITA.."
cd /opt
if [[ $(ls | grep -x Rosvita | wc -l) == 0 ]]; then
   sudo mkdir Rosvita
   sudo chown -R $USER /opt/Rosvita/
   cd Rosvita
   wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/downloads/rosvita_start.sh
   sudo chmod a+x rosvita_start.sh
else
   cd Rosvita
   if [[ $(ls | grep -x rosvita_start.sh | wc -l) == 0 ]]; then
      wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/downloads/rosvita_start.sh
      sudo chmod a+x rosvita_start.sh
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
   wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/downloads/rosvita_icon.png
   cd ${HOME}/Desktop
   wget -q https://raw.githubusercontent.com/Xamla/docs.xamla.com/gh-pages/rosvita/downloads/ROSVITA.desktop
   sudo chmod a+x ROSVITA.desktop
fi
echo "Finished."
echo ""

echo "IMPORTANT:"
echo "Please restart your computer now for the changes to take effect. Afterwards you can start Rosvita by double clicking the desktop icon."
echo "If you have any trouble or would like to give use feedback, feel free to visit: http://discuss.xamla.com."
exit 0
