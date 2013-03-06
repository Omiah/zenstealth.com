---
layout: post
title: "Organizing Books In The Kindle File System"
tags:
- kindle
- rsync
---
![Kindle File System](https://s3.amazonaws.com/f.cl.ly/items/0B1p1S1o0I0j1I3z1R2i/Screen%20Shot%202012-12-24%20at%2012.18.58%20AM.png)

Whenever you purchase any sort of content for a Kindle from Amazon, it automatically downloads the files into a single directory - the <code>/Kindle/Documents/</code> directory. If you only buy books from Amazon, or if you have a tiny reading collection, then you probably won't mind that all your content resides in a single folder. If you're like me and like to read *a lot* of books, and like to gather them from various different sources on the internet, then a keeping track of giant library full of hundreds of books becomes very unmanagable very quickly. 

If you already have some sort of organizational system for your Kindle and it works, then great! If you need help with creating one, or would like some ideas on how to do so, then you've come to the right place.

### How I Organize My Books In The File System

<ul>
<li>Active Content</li>
<li>Books
		<ul>
			<li>Fiction
				<ul>
					<li>Comics & Manga</li>
					<li>Fiction (Classic)</li>
					<li>Fiction (Modern)</li>
				</ul>
			</li>
			<li>Non-Fiction
				<ul>
					<li>Futurism</li>
					<li>Historical</li>
					<li>Life</li>
					<li>Medicine</li>
					<li>Philosophy & Politics</li>
					<li>Science</li>
					<li>Tech (1337)</li>
					<li>Tech (Culture)</li>
					<li>Tech (RTFM)</li>
				</ul>
			</li>
		</ul>
<li>Samples</li>
</ul>

As you can see, I like to seperate my books depending if it's fiction or non-fiction. For fiction books, I sort it by type: Comics & Manga, Classic (books written before the 1950s), and Modern (books written after the 1950s). For non-fiction books I sort them by genre: Philosphy & Politics, for example is for books like *The Art of War* and Science is for books like *A Brief History of Time*. After all of that then I group books by their author's name.

I place samples into their own folder, because I don't consider them a full book yet. It's also a good idea to seperate the active content stuff (Kindle Games & Apps) too.

<div class="alert alert-info">
Caution: The first time you reorganize your books and move them around to different folder, it will *probably* reset their status and be recognized as a newly downloaded, so you might lose your place in the book, and you might have to add them back to their respective collections again. If you already have a big giant library with many different collections, then this step will take a very, very long time to complete.
</div>


### Rsync Makes Kindle Backups Easy

One benefit of having an organized ebook collection is that it makes backups painless if something unfortunate were to happen to your Kindle, or to your Amazon account.

I presume that you know what already know the basic of Rsync, so here is what you'll need to enter in the Terminal:

	$ rsync -rtvuah --delete /Location/Of/Kindle ~/Location/Of/Backup/Folder

This will copy every file in the Kindle storage into a folder on your computer, exactly the way it exists on the Kindle. Please note that --delete means that it it will delete any file that on the destination folder that doesn't exist from the source (the Kindle). 

### Conclusion

Once you organized all your books and backed them up safely, then now you can sit back, relax, and start reading your favorite book without worrying where you placed in or if it dissapears.
