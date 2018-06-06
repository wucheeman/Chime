#!/bin/bash”
cd db
mysql -u mark < schema.sql

# cd back out to root
# run server.js in background to create tables

# cd back in to db/
# mysql -u mark burgerzDB < seeds.sql

# do a select * on each table that's been populated?

cd ..
# stop server.js


# INSTRUCTIONS
# cd to the project's root directory. 
# Enter ($ is the prompt; ignore the text in parentheses):
#
#  $ bash ./setupDB.sh (Windows)
#
#  $ ./setupDB.sh (Mac/Linux)