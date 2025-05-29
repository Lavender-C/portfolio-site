# My Portfolio Site

Hi! This is my UI project. I am experimenting with React.JS

I wanted my portfolio site to embody my childhood playing on computers in the 2000's with the retro OS-es and browsers that I'm nostalgic for.<br>
<p align="center">
<img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fportfolio-site-rose-six.vercel.app%2F&up_message=live!&up_color=%2378c48b&down_color=%23a1665d&style=for-the-badge&labelColor=%233f3c52&link=https%3A%2F%2Fportfolio-site-rose-six.vercel.app%2F">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Lavender-C/portfolio-site?display_timestamp=committer&style=for-the-badge&labelColor=3f3c51&color=%2382c4a9">
<br><br>
<img alt= "react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">

</p>



### TODO:

<details>
<summary> <i>High Priority, 13/14</i> </summary>
- [x] Fix the main content window so its bigger
- [x] Organize buttons/links on profile window
- [x] Fix resume PDF button
- [x] taskbar w/ buttons to minimize the browser and profile windows
- [x] datetime and other decorations (wifi, battery) to the taskbar (weather icons?)
- [x] title+search bar to the browser window
- [x] ~~Photo Gallery~~ File Explorer + Photo Gallery for projects
    - [x] take pictures for projects
    - [x] solve small image problem
- [x] header and other decorations to the experience "website"
    - [x] tidy up search bar icons
    - [x] add text to home page
    - [x] make liked buttons pink
    - [x] make window draggable
- [x] command prompt program for the education
- [x] cute boot screen
- [x] tooltips for interactions
    - [x] taskbar programs (click to focus window)
    - [x] file explorer breadcrumb (click to return to projects folder)
- [x] cool desktop background
- [x] menu buttons (sleep, restart, close ??)
- [ ] draw icons
    - [x] image files
    - [x] folders
    - [x] contact
    - [x] experience
    - [x] education
    - [x] projects
    - [ ] site favicon
    - [x] video
    - [x] text files
</details>

<i>After Rollout</i>
- [x] animations for opening/closing windows and menus
- [ ] unit tests
- [ ] find or make a sick background for the desktop

<i>Extra Juicy Bits</i>
- Animation for PFP that follows the mouse (only on computers?)
- parallax on the desktop background?

<h3>5/24/25...</h3>

Hi it's been way too long since I pushed these changes. I feel like once I got over the big hump of getting this thing up and running my adrenaline fizzled out a bit. But I also kind of feel like its's a good thing? I'm quite happy with the state that it's in now and I don't see myself making any more <i>huge</i> changes anytime soon. I spent a lot of time experimenting with different animations but I couldn't really get anything I liked a whole lot to work and I felt like I was kinda doing too much so I deleted a lot of it. Maybe if inspiration strikes I might come back to it but I want to get these File Explorer changes up.

Quick recap
- Fixed some spacing on the Profile Window elements
- Added some more animations to the File Explorer
- Fixed profile image sizing on Experience Page
- New icons for videos + text files in the FE
- New browser icon (still not sold)
- Some other things I dont remember, will update once I do lol

<details>
<summary> <h3>4/9/25</h3> </summary>

Hi! It's been quite a while since I last added an entry to the README, but that doesn't mean I haven't been hitting the grind! The site is live and the update process is very easy. I am very happy with hosting on Vercel. Because the site was live I showed it to a lot of my friends and family and they gave me some feedback so here is what I changed:

- Scrolling all the way to the bottom of the experience page fixed
- Responsive design added to the home page
- Text links are more overt in that they can be clicked
- The like button does not get cut off during its animation
- The program shortcuts resize properly
- The clock stops wrapping when a lot of programs are open (on mobile)
- All of the content in the File Explorer has media and descriptions.
- Fixed the name of a couple of the windows. (the topbar is the desktop program, the taskbar and the shortcuts shows the purpose of the window)
- Console text animation is much faster

Thr file explorer content was a bit harder than I expected, mostly because I had to go back and try to run some old projects to get photos and videos of them operating (Tune Tracer in particular gave me some grief since when I handed it over to the client I lost access to the API and database :/). I will not make that mistake again, I will take plenty of pics and videos of all projects moving forward while they are live so I don't have to try to scrounge stuff up again. It was also a little difficult deciding what to include and how in-depth to go. I am worried I'm a bit long winded on some of the image descriptions, if people think it's too verbose I'll come up with a way to be more concise (or change the layout).

I think I'm almost done with all of the functions for the app. After that I think I will start adding more animations for the windows and the content in them.

If you are viewing this coming from my website, thank you so much for checking out what I've worked on so far!! It has been so much fun to build a UI web project of my own since during most projects in school I had to work other features, so this is really my chance to let loose and express myself. If you have feedback or run into any problems, please make use of the Issues tab.

It's very late, I got too locked in and now its 4am, so I'll wrap this up for now. <3
</details>

<details>
<summary> <h3>3/29/25</h3>  </summary>

I am pretty pleased with the progress!!! It really feels like the website is almost done. At the beginning of this "sprint" I said I wanted everything to be done by Saturday. I think that goal was definitelly achievable if I was really on top it but I spent a lot of time with my friends and family these last couple days which is why there was a break in my updates. That being said, I still plan on posting the site by tomorrow (!!!), just not with <i>every</i> single feature implemented. I thought on it a little bit and I think what is best at this point is to finish and polish all the major functionalities, go live, then I can add updates later. I just really want this portfolio site to go live while I'm applying for things. I also want to show it to my friends and family and get their feedback.

short list of accomplishments:

- window functionalities fully implemented
    - windows open in the center of the screen
    - clicking the program in the taskbar focuses it
    - moving the window focuses it as well

- taskbar comes to the top when you mouse over it (incase any of the windows go off screen and cover it)

- changed the sizes of some windows so they are consistent and easy to read

- added tooltips to interactions where it isn't immediately obvious what they do

Honestly this might bleed into Monday depending on how the creative juices flow (and how easy it is to get the site up and running). I am really excited to see all of this come together. Even though its a fairly small and low-intensity project it is my first personal project that I have had full command over and ~~almost~~ seen to completion. It is very fufilling and I'm furiously brainstorming the next project I want to work on. :) Tally ho!

</details>

<details>
<summary> <h3>3/26/25</h3>  </summary>

I got to work kind of late today, I think I sat down around midnight and started messing with things

- I added (what I think) is the last program. I decided to add a 'file explorer' aspect to the photo gallery program to make it easier to navigate between projects. 
    - The file breadcrumb bar is how you navigate the "file structure" and I think thats really baller :sunglasses:
    - I think I want to add more space for the description. I will make a mockup later
    - I only really have pictures of tune tracer and my UROP so I will need to try to boot up RoomRaiser (which i havent done in a year and a half :sob:) to get some pictures of the UI and stuff. I still need to decide how big I want the window to be cause right now the images are a bit small. As of right now I dont plan on making the windows resizable, that kind of sounds like a nightmare to implement and most of the content on the windows is not that complex so I'm hoping I wont have to but at the very least it will have to wait until like everything else is done.

    ![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/file-explorer.png "Image of the latest version of the new file explorer window")

- started working on the functionality for the taskbar for focusing programs. The centering works just fine but I want the windows to also come to the top when the button is hit. Still have to work that into App.js but I'm tired so I'm not doing that tonight lol

- added some more comment blocks to keep things organized

</details>

<details>
<summary> <h3>3/25/25</h3>  </summary>

What I got done:
- Made the console page
    - a very arduous journey. I spent like 2 hours trying to make the typing animation for the typewriter text on the console just to find out there was a module for it the whole time I hate it here. Eventually I want to make it so that the command is at the bottom then when you click the window the animation starts but I can't be bothered right now I'm leaving it :skull:
    ![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/console_window.png "Image of the latest version of the new console window")
- Added the bare minimum to the browser
    - IDK why but I really do not want to do this so we are doing anything other than that right now. It is very ok. It shows up. I also have no clear direction for what I want to put in the experience page to make it look more real so we are putting it off.

I feel like I did a lot today but idk if I'm on pace to be done by the end of the week. But I definitely want to get as much done as possible so once I go back to work the heavy lifting is mostly done. I experimented with Typescript. I might switch all the JS over but I don't quite see a reason to yet. I'm tired.

</details>

<details>
<summary> <h3>3/24/25</h3>  </summary>

Mostly fixed some rendering issues. Added icon support from https://tabler.io/icons. They are so chunky and round I love them.

The spacing on the ProfileWindow title bar was bothering me so i spend a while fixing it. I might add this title bar style to all of the program windows.

There was also a strange spaceing issue with the taskbar and the app itself, IDRK what was causing it but I added some CSS so hopefully it statys fixed.

Also finished the next TODO item, the taskbar is looking very Windows-esque but thats kind if the idea so ill let it slide for now lol.

I wasn't anticipating on this taking as long as it did, I think I started around 4-ish? I will probably come back later and do some stuff cause the browser window is bothering me. Ciao for now.

PART  2

- Made the title bar for the windows a global feature for all the windows
- Added search bar and a header to the experience window
- Renamed the shortcuts to be more clear about what they are
- Drew up an icon for one of the shortcuts, will improve later
- Hover effects for the shortcuts
- Adding comment separators

</details>

<details>
<summary> <h3>3/22/25</h3>  </summary>

I took inspiration from the tiktok I watched and added a taskbar and some shortcuts to the page. I'm pretty pleased with how they look. Was having a couple issues with the way the divs in App.js were interacting but I think they are better organized now.

![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/site_v0.4.png "Image of the latest version of the website")
Jumping off of that I don't fully know the best practices for formatting JS and CSS, it makes sense to me and everything seems pretty well organized for now but I think I will look for some "best practices" guides or something to see if it can be improved.
I have the next week off work, I would like to have the site up and running by next Saturday. I think I have outlined everything I want to include, everything up to "Up Next" should be finished to be ready go live. I'll aim for that but I guess its not the end of the world if it doesn't happen.

</details>

<details>
<summary> <h3>3/17/25</h3>  </summary>

I uploaded all the edits I've made since the last update, but I am trying to go feature by feature and I just did a lot with the browser window stuff.

I saw another SWE on TikTok (@jjrangzx) who made basically the exact same idea for a fake desktop portfolio site which was kind of demoralizing (😭) but I will not be discouraged! It just means I have to really make it my own. Also I've been sittin

I am going to take some inspiration from her; I think I kind of want to split up some of the stuff in the browser window. For now I'm gonna keep the things as they are while I work on other parts of the desktop. Immediately I think it would be cool to have a console/commandline app for the intro where the text comes up automatically Matrix style. I have to think on the education part a bit more.

</details>

<details>
<summary> <h3>3/5/25</h3>  </summary>

- Fixed the resume button, it was messed up and only downloading a HTML page but now its working and with a lot less lines
- Changed the layout of the content on the profile window so its neater. Also the links go to the proper sites.
- I changed the colors slightly, still not sold on the colors, I think the contrast is too low but I still like how it looks.

Mostly minor changes but its coming along.

</details>

<details>
<summary> <h3>3/4/25</h3>  </summary>
Finally added all of the files I've been working on, very rough for the first upload but I just wanted to get the ball rolling. I focused mainly on getting the most important elements like the Profile Window and the Browser Window. This is the mockup I'm working off of:
<br>

![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/main_screen_D1.png "Image of the first draft of the mockup")

- I like the general layout and the color palette but I'm not sure I like the way they are implemented on the site elements, like the yellow on the profile window is pretty hard to read. I will probably try a few different combinations as I build it in JS
- The draggable profile window works pretty good!
- I want each page in the browser window to imitate a different type of webpage. I think I want the 'experience' page to be like a forum post (the circles would be profile images) but it looks kind of cluttered right now. I think if I change the font sizes and maybe make the titles a different font and/or color it might help the readability. We shall see!
</details>

