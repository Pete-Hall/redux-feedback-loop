# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

Work from client-side --> server-side
Will need to set up database in Postico
Will need to use History to move to next page

Components:
_taco
(Start (maybe, not necessary))
Feeling
Understanding
Support
Comments
Review
Submitted (option to take survey again, resetting data)

hooks - values, setValues (onChange for inputs)
onClicks - data validation (alert if fails, clear in puts if passes), dispatch to appropriate reducer, history.push(NextComponent)
inputs (type=number)

Reducers: (in header, show data in the reducers as we input it to test)
Feeling
Understanding
Support
Comments
(Review shows all of the reducers and can send that data to the db)

HashRoutes:
Feeling
Understanding
Support
Comments
Review
Submitted

Prompt the user to confirm prior to deleting the feedback from the database.

Do I need to npm install dotenv ???