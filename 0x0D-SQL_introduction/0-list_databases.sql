#!/bin/bash

# Mysql credentials
DB_USER="root"
DB_PASSWORD="root"

# List all databases
mysql -u"$DB_USER" -p"$DB_PASSWORD" -e "SHOW DATABASES;"
