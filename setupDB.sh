#!/bin/bash”

# kills server.js when script exits
trap "kill 0" EXIT

cd db
mysql -u mark < schema.sql

cd ../
# run server.js in background to create tables
# edit to read 'server.js' when Matt creates it
node mah_server.js &

# give MySQL some time to build the table
sleep 3

cd db
mysql -u mark chimedb < seeds.sql

# do a select * on each table that's been populated?

cd ..
# script waits until we kill it
wait



# INSTRUCTIONS
# To run:
# ========
# cd to the project's root directory. 
# Enter ($ is the prompt; ignore the text in parentheses):
#
#  $ bash ./setupDB.sh (Windows)
#
#  $ ./setupDB.sh (Mac/Linux)
#
# To stop
# =======
# Use CTRL-C