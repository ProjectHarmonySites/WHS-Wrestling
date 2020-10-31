# WMS-Wrestling

The Github Repo for the Williamstown Wrestling team's website. Located at [link](https://williamstownwrestling.com).

# Client Toolset

The client toolset is a set of tools that you can use to update the website without touching html, css, or javascript code.

## Client Directory
The client directory contains two files that can be used to update small portions of the website.

- Schedule.json - This allows you to easily update the scedule, just follow the pre-existing format.
- Roster.json - This allows you to eaisly update the roster (eg. add or remove people), just follow the pre-exisiting format.

---

## The Image Gallery

The image gallery can be found on the gallery page. "https://williamstownwrestling.com/gallery". This gallery is automatically updated when image are added to the right directory and to the JSON file.

### Instructions for Updating the Image Gallery

1. Go to /images/gallery and upload your photos. (For the name space with underscores) *Eg. this_is_an_image.png* **All Images Must Be .png**
1. Go to /images/gallery/gallery.json and add your image name into the file. *Eg. this_is_an_image* **Don't add the image extension ***(eg. .png)***
1. Finally push the code to GitHub under the *master* branch and the website will automatically update the gallery with your new entry.
