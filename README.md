# WSO2 Consolidated Icinga Monitoring Dashboard

This repository contains a module that monitors the overall state of each icinga envirnment
and reperesent it in a dashboard.

This module is configured via SMTP as icinga data can be only taken out as mail information. The mails
are filterd and stored to get a final persistant state of each environment.

# SETUP

1) Extract the dashboard content to apache localhost
2) Set up the database with the icingaDb.sql dump in /database/icingaDb.sql
3) Set up two crontabs as root to execute gmailfetch.php and dashboardupdate.php
    -  gmailFetch.php every minute
    -  dashboardUpdate.php every two minutes
    
4) Add custom command to send mails to your mail box setup in icinga and setup corresponding contacts
    -  edit /etc/icinga/commands.cfg and add custom command
    -  edit /etc/icinga/objects/contacts_icinga.cfg to setup a new contact


# SCRIPTS

1) gmailFetch.php
    -  This script will read the UNSEEN emails from the configured mail box and update the databse
2) dashboadUpdate.php
    -  This script will querry the data filterd by emails and update the dashboard with current enviornmnet state.
      
