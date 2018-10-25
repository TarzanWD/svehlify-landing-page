printf "\033c" # clear screen
echo "
           PROD  |  PROD
       _.-;;-._         _.-;;-._
'-..-'|   ||   | '-..-'|   ||   |
'-..-'|_.-;;-._| '-..-'|_.-;;-._|
'-..-'|   ||   | '-..-'|   ||   |
'-..-'|_.-''-._| '-..-'|_.-''-._|
           PROD  |  PROD
"

# config variables
SSH_HOST=root@207.154.246.142
FRONT_PROD_PATH=/var/www/svehlify-courses/

# clean build folder
rm -rf .next
# build app on local pc
yarn install
yarn run build
echo "app is builded"
echo "Actual time: " $SECONDS "seconds"
# create file for making build
ssh $SSH_HOST "rm -rf $FRONT_PROD_PATH"
ssh $SSH_HOST "mkdir $FRONT_PROD_PATH"
scp yarn.lock $SSH_HOST:$FRONT_PROD_PATH/yarn.lock
scp package.json $SSH_HOST:$FRONT_PROD_PATH/package.json
scp ecosystem.config.js $SSH_HOST:$FRONT_PROD_PATH/ecosystem.config.js
scp next.config.js $SSH_HOST:$FRONT_PROD_PATH/next.config.js
scp -r static $SSH_HOST:$FRONT_PROD_PATH
scp -r .next $SSH_HOST:$FRONT_PROD_PATH
echo "all necessary files are served to server"
echo "Actual time: " $SECONDS "seconds"

# TODO: fix this low budget deploy sulution
# install necessary dependencies
# install all dependencies is redundant but you have to install cross-env a next
# with same version as your package.json && yarn.lock
# so for not thats easy solution with no pain coz node_module cache but its
# still not optional solution :)
ssh $SSH_HOST \
  "cd $FRONT_PROD_PATH; yarn install"

# reload pm2 app
ssh $SSH_HOST \
  "cd $FRONT_PROD_PATH; \
  pm2 reload $FRONT_PROD_PATH/ecosystem.config.js --only svehlify-landing-page-prod"


echo "process ENDs"
echo "Total time: " $SECONDS "seconds"
