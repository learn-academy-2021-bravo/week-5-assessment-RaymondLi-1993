# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
   ***SQL*** is a powerful relational database that can hold lots of data. It forms relations to other tables within the database hence the name relational databases. 


2. What the PostgreSQL query that would return all the content in a particular table?
   The query to return all the content within a particular table is by using the wild card *. You would SELECT * FROM insert_table_here.



3. What is the command to create a new Rails application with a PostgreSQL database?
   The command to spin a new Rails application with a postgresql database is
   ***rails new app_name -d postgresql -T*** 


4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
   The rails command to spin up a table with columns would be rails generate model Meals breakfast:string lunch:date dinner:string 


5. What is a migration? Why would you use one?
   Migration is the process of creating new tables/columns for postgreSQL through ruby or other serverside language that doesn't inherently act on the postgreSQL database directly. I think a reasoning for possibly doing it this way is that you're able to revert changes and undo certain actions easier than doing it via in postgreSQL.


6. What is the command to generate a migration file?
   ***rails generate migration add_item_to_table*** 


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
   The naming convention used is snake case and when interacting with the table I believe its pascal case.


8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
   The schema is the file that is created via rails and holds the information on how the postgreSQL data table is set up. I don't think you can modify it directly, but you can run other migrations to modify it.



9. What is the Rails console?
   The rails console is the thing that allows the progammer to directly interact with postgreSQL using ruby. 



10. What is the Rails console command to see all the content in a particular table?
    I think the rails command to see all the content is using the name of the table + .all to see everything.

