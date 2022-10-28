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
You can edit the index.html file to update the information you want with new image descriptions,
any links you want to add, etc.

### Adding New Images
To add new images, all you need to do is put the images you want into the `images` folder,
and add the names of the images to the correct `<img>` tag "src" in index.html.

For example, right now the first image is the Veil Nebula, and the image tag for it looks like this:

`<img border="0" src="VeilEast+West3.jpg" width="1024" height="876"></p>`

To change the image, change `src="VeilEast+West3.jpg"` to `src="Name_Of_New_Image.jpg"`. 
Obviously, the image names in the src tags must match the names of the images in the `images` folder.


This is a very crude way of doing this, but it should work for now I think?

If it gets to be a pain, I can rethink it.

### Deploying
Once the new images are added locally (i.e. on your machine), you will need to deploy the
site so it is live on the web.

To do this, run the following in Command Prompt:

```bash
git push origin main
```
(This command needs to be run from the root of the /Website folder)

This will push your most recent changes (i.e. the new images) to Github.
From there, Github will push those changes to Gatsby, where the site is hosted.

### Running the Site Locally
This step isn't necessary, but if you want to run the site locally before you deploy it
so that you can view the changes, run the following in the command prompt:

```bash
node server.js
```
(Again, needs to be run from inside the root of the /Website folder)

Then go to http://localhost:8080 in your browser.