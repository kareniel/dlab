```bash
# setup alias

cd cli
DIR=$(pwd)
echo 'alias dlab=node $DIR' >> ~/.bash_profile
source ~/.bash_profile

# usage: dlab <command>

# commands:
# start - start the dlab server
# end - close the dlab server
# echo <message> - log a message to the console
```