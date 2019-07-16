import glob, sys, os

from PIL import Image
import pyperclip

photos = glob.glob("*.jpg")
photos.extend(glob.glob("*.png"))

# print(photos)

photos_directory = "gallery_images"

out = ""

for photo in photos:

    if "_thumb" not in photo:
        im = Image.open(photo)
        width, height = im.size

        thumbnail_photo = photo.rsplit('.', 1)[0] + "_thumb." + photo.rsplit('.', 1)[1]

        out += """
<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
\t<a href="{}" itemprop="contentUrl" data-size="{}x{}">
\t\t<img src="{}" itemprop="thumbnail" alt="Image description" />
\t</a>
</figure>
""".format(photos_directory + "/" + photo ,width, height, photos_directory + "/" + thumbnail_photo)

print(out)

pyperclip.copy(out)


print("\ndone")

input()
