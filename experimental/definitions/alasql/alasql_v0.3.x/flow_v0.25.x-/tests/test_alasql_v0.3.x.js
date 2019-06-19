/* @flow */

const alasql = require('alasql');

alasql('value of select 5');

alasql('select 5 as a');

alasql('select ? as a',[5], function(x){});

// $ExpectError
alasql.parse(['select 3']); 

alasql.parse('select 3');

alasql.promise('value of select 5');

alasql.promise(['value of select 5', ['select ? as y',7]]);

alasql(['value of select 5']);	

alasql.options.errorlog = false; // Log or throw error
alasql.options.valueof = false; // Use valueof in orderfn
alasql.options.dropifnotexists = false; // DROP database in any case
alasql.options.datetimeformat = 'sql'; // How to handle DATE and DATETIME types
alasql.options.casesensitive = true; // Table and column names are case sensitive and converted to lower-case
alasql.options.logtarget = 'output'; // target for log. Values: 'console', 'output', 'id' of html tag
alasql.options.logprompt = true; // Print SQL at log
alasql.options.progress = false; // Callback for async queries progress
alasql.options.modifier = undefined;
alasql.options.columnlookup = 10;
alasql.options.autovertex = true;
alasql.options.usedbo = true;
alasql.options.autocommit = true;
alasql.options.cache = true;
alasql.options.nan = false;
alasql.options.tsql = true;
alasql.options.mysql = true;
alasql.options.postgres = true;
alasql.options.oracle = true;
alasql.options.sqlite = true;
alasql.options.orientdb = true;
alasql.options.autoExtFilenameOnRead = true;
alasql.options.autoExtFilenameOnWrite = true;
alasql.options.nocount = false;
alasql.options.joinstar = 'overwrite'; 



