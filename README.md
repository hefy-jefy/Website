# Geoff Shipton's Images

This is a basic static HTML site that displays two images

## Usage

### Working With This Repo
Get this repository onto your local machine by running the following command
in Command Prompt:

```bash
git clone https://github.com/hefy-jefy/Website.git
```
This will create a new folder called Website. Navigate into the folder:

```bash
cd Website
```

### Making Changes
You can edit the index.html on Github to update the information you want with new image descriptions,
any links you want to add, etc.

### Adding New Images
To add new images, navigate to the /images folder in Github and upload the images you want using the
"Add File" button. *Make sure you navigate to the images folder first, or the images will get added in the wrong place*

Edit index.html to use the new filenames in the `<img>` tags.

For example, right now the first image is the Veil Nebula, and the image tag for it looks like this:

`<img border="0" src="./images/VeilEast+West3.jpg" width="1024" height="876"></p>`

To change the image, change `src="./images/VeilEast+West3.jpg"` to `src="./images/Name_Of_New_Image.jpg"`. 

The image names in the src tags must match the names of the images in the `images` folder, and you must include "./images/"
before the filename.

This is a very crude way of doing this, but it should work for now I think?

If it gets to be a pain, I can rethink it.

### Committing
When you click "Commit" the site will automatically be deployed via Github Pages.
You can watch the build process by clicking on the little yellow circle.
When you see a little green checkmark next to the Repository name, it's done

### Viewing the Site
The site is currently live at https://hefy-jefy.github.io

We can update the domain later.
