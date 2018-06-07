#!/bin/bash”
cd db
mysql -u mark chimedb < drop_tables.sql
cd ..


# INSTRUCTIONS
# To run:
# ========
# cd to the project's root directory. 
# Enter ($ is the prompt; ignore the text in parentheses):
#
#  $ bash ./dropTables.sh (Windows)
#
#  $ ./dropTables.sh (Mac/Linux)