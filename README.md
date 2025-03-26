# My Portfolio Site

Hi! This is my UI project. I am experimenting with React.JS

I wanted my portfolio site to embody my childhood playing on computers in the 2000's with the retro OS-es and browsers that I'm nostalgic for.

### TODO:

<i>High Priority</i>
- [x] Fix the main content window so its bigger
- [x] Organize buttons/links on profile window
- [x] Fix resume PDF button
- [x] taskbar w/ buttons to minimize the browser and profile windows
- [x] datetime and other decorations (wifi, battery) to the taskbar (weather icons?)
- [x] title+search bar to the browser window
- [ ] Photo Gallery for projects
    - [ ] SULI Project
    - [ ] Senior Capstone Project
    - [ ] Room Raiser Project
- [ ] header and other decorations to the experience "website"
    - [x] tidy up search bar icons
    - [ ] add text to home page
    - [x] make liked buttons pink
    - [ ] make window draggable
- [x] command prompt program for the education
- [ ] animations for opening/closing windows and menus
- [ ] cool desktop background

FIXES
- [ ] windows should come to top when corresponding top bar is dragged
- [ ] hitting the program buttons in the task bar should center the windows and bring them to the top


<i>Up Next</i>
- Photo Gallery for projects
- draw icons
- draw experience banner
- cute boot screen
- unit tests
- start working on phone view
- where are we hosting?


<i>Extra Juicy Bits</i>
- Animation for PFP that follows the mouse (only on computers?)
- parallax on the desktop background?


<details>

<summary> <h3>3/4/25</h3>  </summary>
Finally added all of the files I've been working on, very rough for the first upload but I just wanted to get the ball rolling. I focused mainly on getting the most important elements like the Profile Window and the Browser Window. This is the mockup I'm working off of:
<br>

![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/main_screen_D1.png "Image of the first draft of the mockup")

- I like the general layout and the color palette but I'm not sure I like the way they are implemented on the site elements, like the yellow on the profile window is pretty hard to read. I will probably try a few different combinations as I build it in JS
- The draggable profile window works pretty good!
- I want each page in the browser window to imitate a different type of webpage. I think I want the 'experience' page to be like a forum post (the circles would be profile images) but it looks kind of cluttered right now. I think if I change the font sizes and maybe make the titles a different font and/or color it might help the readability. We shall see!
</details>

<details>

<summary> <h3>3/5/25</h3>  </summary>

- Fixed the resume button, it was messed up and only downloading a HTML page but now its working and with a lot less lines
- Changed the layout of the content on the profile window so its neater. Also the links go to the proper sites.
- I changed the colors slightly, still not sold on the colors, I think the contrast is too low but I still like how it looks.

Mostly minor changes but its coming along.

</details>

<details>

<summary> <h3>3/17/25</h3>  </summary>

I uploaded all the edits I've made since the last update, but I am trying to go feature by feature and I just did a lot with the browser window stuff.

I saw another SWE on TikTok (@jjrangzx) who made basically the exact same idea for a fake desktop portfolio site which was kind of demoralizing (😭) but I will not be discouraged! It just means I have to really make it my own. Also I've been sittin

I am going to take some inspiration from her; I think I kind of want to split up some of the stuff in the browser window. For now I'm gonna keep the things as they are while I work on other parts of the desktop. Immediately I think it would be cool to have a console/commandline app for the intro where the text comes up automatically Matrix style. I have to think on the education part a bit more.

</details>

<details>
  
<summary> <h3>3/22/25</h3>  </summary>

I took inspiration from the tiktok I watched and added a taskbar and some shortcuts to the page. I'm pretty pleased with how they look. Was having a couple issues with the way the divs in App.js were interacting but I think they are better organized now.

![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/site_v0.4.png "Image of the latest version of the website")
Jumping off of that I don't fully know the best practices for formatting JS and CSS, it makes sense to me and everything seems pretty well organized for now but I think I will look for some "best practices" guides or something to see if it can be improved.
I have the next week off work, I would like to have the site up and running by next Saturday. I think I have outlined everything I want to include, everything up to "Up Next" should be finished to be ready go live. I'll aim for that but I guess its not the end of the world if it doesn't happen.

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
<summary> <h3>3/25/25</h3>  </summary>

What I got done:
- Made the console page
    - a very arduous journey. I spent like 2 hours trying to make the typing animation for the typewriter text on the console just to find out there was a module for it the whole time I hate it here. Eventually I want to make it so that the command is at the bottom then when you click the window the animation starts but I can't be bothered right now I'm leaving it :skull:
    ![alt text](https://github.com/Lavender-C/portfolio-site/blob/main/mockups/console_window.png "Image of the latest version of the new console window")
- Added the bare minimum to the browser
    - IDK why but I really do not want to do this so we are doing anything other than that right now. It is very ok. It shows up. I also have no clear direction for what I want to put in the experience page to make it look more real so we are putting it off.

I feel like I did a lot today but idk if I'm on pace to be done by the end of the week. But I definitely want to get as much done as possible so once I go back to work the heavy lifting is mostly done. I experimented with Typescript. I might switch all the JS over but I don't quite see a reason to yet. I'm tired.

</details>
