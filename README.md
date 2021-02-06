# Backend# Documentation:

# Base URL for Deployed API
https://potluck-planner-1-21.herokuapp.com/

# Users
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | users/register | create a user (requires name (string), email (string), password (string)) |
| POST | users/login | login (requires name (string), password (string)) |
| GET | users | get a list of users |
| GET | users/:id | get a single user |
| GET | users/:userId/events | get a list of events for that user |
| PUT | users/:id | edit a user's info (requires name (string), email (string), password (string)) |
| DELETE | users/:id | delete a user |

# Events
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | events | create an event (requires name (string), date (string), time (string), location (string), organizer_id (integer)) |
| POST | events/:eventId/item/:itemId | adds an item to an event |
| GET | events | get a list of events |
| GET | events/:id | get a single event |
| GET | events/:id/items | get a list of items for that event |
| PUT | events/:id | edit an event (requires name (string), date (string), time (string), location (string), organizer_id (integer)) |
| DELETE | events/:id | deleten event |
| DELETE | events/:eventId/item/:itemId | remove item from event |

# Items
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | items | get a list of items |
| GET | items/:id | get a single item |