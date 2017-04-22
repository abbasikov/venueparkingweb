npm run build
cp source/js/serviceWorker.js build/
git add .
git ci -m "production push"
git push heroku master
##red=`tput setaf 1`
##reset=`tput sgr0`
##echo "${red}Your build is successful. Please change cacheFiles and cacheName in serviceWorker file of build folder.Replace content of serviceWorker in build folder with serviceWorker in source/js.  Then Add, Commit and Push${reset}"