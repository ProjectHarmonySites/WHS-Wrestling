# WMS-Wrestling

The Github Repo for the Williamstown Wrestling team's website. Located at [link](https://williamstownwrestling.com).

# Client Toolset

The client toolset is a set of tools that you can use to update the website without touching html, css, or javascript code.

## Client Directory
The client directory contains two files that can be used to update small portions of the website.

- Schedule.json - This allows you to easily update the schedule, just follow the pre-existing format.
- Roster.json - This allows you to easily update the roster (eg. add or remove people), just follow the pre-existing format.
- gallery-images - Adding or removing images from this directory will add or remove them from the website's [gallery page](https://williamstownwrestling.com/gallery).

---

### Instructions for Adding Images to the Image Gallery

1. Make sure you are logged into GitHub!
1. Go to the backend client/gallery directory | [Click Here](https://github.com/ProjectHarmonySites/WHS-Wrestling/tree/master/client/gallery-images).
1. Click on the *Add File* dropdown and choose **Upload Files**.
1. Select the blue *choose your files* link and select the images you want.
1. Scroll down to the bottom of the page and click the green **Commit Changes** button. *Hint: there is no need to fill out the commit fields(they automatically get filled in).*
1. Finally, copy the exact filename of the image and add it to the JSON list found [here](https://github.com/ProjectHarmonySites/WHS-Wrestling/blob/master/client/gallery-images.json) (click on the pencil tool at the top right and add a comma followed by the exact filename of the picture surroned by quotation marks) (make sure you don't have a comma on the last item)

### Instructions for Removing Images from the Image Gallery

1. Make sure you are logged into GitHub!
1. Go to the backend client/gallery directory | [Click Here](https://github.com/ProjectHarmonySites/WHS-Wrestling/tree/master/client/gallery-images).
1. Click on the image file that you don't want *(Upon clicking the file name you will be shown a preview of the image)*.
1. Click on the **trash can button** that can be found in the top right of the image preview. *This button will be found right above the actual image*. 
1. Scroll down to the bottom of the page and click the green **Commit Changes** button. *Hint: there is no need to fill out the commit fields(they automatically get filled in).*

***Important Note: Make sure that when you are deleting images, you only delete the images from the `client/gallery-images` folder. Deleting images from any other folders or deleting any other files will result in your website no longer working!!!!!! Here is a link to the only place where you can add or delete images: [Click Here](https://github.com/ProjectHarmonySites/WHS-Wrestling/tree/master/client/gallery-images)***
