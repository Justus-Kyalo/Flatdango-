# Flatdango-
![Screenshot](https://github.com/RemmyKyalo/FLATDANGO-/blob/master/image/screenshot.png)
# IMPLEMENTATION PROCESS/INSTRUCTIONS

Implementation processes and instructions have been added  as  comments in the script.

# EXPLANATION OF HOW THE APP WORKS
This script fetches a list of movies from a server and displays them on the page. When a movie is clicked, its details are fetched from the server and displayed in a modal.

# Dependencies
The script uses the fetch method to make requests to a server, so it requires a browser that supports the fetch API.

 # Usage
To use the script, simply load the HTML file in a browser. When the page loads, the first film item on the page will be removed and the list of movies will be fetched and displayed.

Clicking on a movie in the list will fetch and display the details for that movie in a modal. Clicking the "Buy Ticket" button in the modal will decrement the number of available tickets for that movie. If there are no remaining tickets, the button text will change to "Sold Out".

# Configuration
By default, the script makes requests to a server at http://localhost:3000. This can be configured by modifying the url variable at the top of the script.


let url = "http://localhost:3000/films";
The script also assumes that the server returns the list of movies in JSON format, with each movie represented as an object with the following properties:

title: The title of the movie (string)
poster: The URL of the movie's poster image (string)
runtime: The runtime of the movie in minutes (number)
description: A description of the movie (string)
showtime: The time at which the movie is showing (string)
capacity: The total number of tickets available for the movie (number)
tickets_sold: The number of tickets already sold for the movie (number)
If the server returns the list of movies in a different format, the script will need to be updated to parse the data correctly.

# Limitations
The script does not currently support browsing or purchasing tickets for multiple movies. It also does not have any error handling for invalid requests or server errors. These features could be added in future versions.
