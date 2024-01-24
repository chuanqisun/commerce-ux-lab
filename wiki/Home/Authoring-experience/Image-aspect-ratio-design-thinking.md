I vote for option 1, on condition that auto play is turned off by default. User can still upload different images to fix the height jump. 

I think of this problem as choosing aspect ratio, instead of choosing height. Consider width as given parameter:
•	Option 1 uses the intrinsic aspect ratio of each image to determine a unique height for each image. 
•	Option 2 picks the extrinsic aspect ratio for the user and enforces on all images.
o	Option 2.1 Pick the intrinsic aspect ratio of the widest image as the extrinsic aspect ratio
o	Option 2.2 Pick the intrinsic aspect ratio of the widest image for desktop, and the narrows image for mobile as the extrinsic aspect ratio.
o	Option 2.3 Pick the intrinsic aspect ratio of the narrowest image as the extrinsic aspect ratio
o	Option 2.4 Pick the intrinsic aspect ratio of the narrowest image for desktop, and the widest image for mobile as the extrinsic aspect ratio.
•	Option 3 asks user to specify extrinsic aspect ratio for mobile and desktop each respectively, and we lock down the height based the desired aspect ratio
o	Option 3.1 asks user to pick a set of fixed extrinsic aspect ratios (e.g. 16:9, 4:3, 1:1, 3:4) for mobile and desktop each respectively
o	Option 3.2 adopt the current browser viewport aspect ratio as the extrinsic aspect ratio.
o	Option 3.3 In addition to 3.1 and 3.2, allow user to add offset (e.g. Start with 16:9 and reduce height by 40px).
In option 2 and 3, the extrinsic aspect ratio may not match the intrinsic aspect ratio of some images, in those cases we have two options
•	Option A: Shrink to fit the image within the container, but we must allow user to choose what color the white space is, so they can match the image background with the additional whitespace.
•	Option B: Scale and crop the image to cover the container, but we must allow user pick a focal point so the scaling and cropping won’t damage the art direction.

I would not use the height of the images without considering their widths. Design agency would hand off 2X, 4X images to improve resolution. The height of the image is too unpredictable to be used as the height of the carousel. They can be way too height, or way to short. C1 can always post-process their images to fit our system but we would create overhead for C1.

In my opinion, a best solution should be decoupled from DAM. Whatever DAM throws at us, we should do our best to render a good presentation out of it, and controlling aspect ratio on rendering side will get us one step closer to that goal. (cc @Kerryn, in case she has a different opinion).

So if your team is feeling adventurous, I would vote for Option 3.2 + B as the next option to support. After that, Option 2.2 + A. Neither one is an easy task so I won’t expect that for public preview. I’ll defer prioritization to you and Anu.


Chuánqí [ ♪ ]

From: Kumud Ranjan
Sent: Thursday, August 8, 2019 5:52 PM
To: Zach Linster; Chuánqí Sun; Anupama Raju
Cc: Sumitra Dash
Subject: Carousel module default height

Hi Zach,

In carousel container, you can add different modules like hero, feature and video. Each of these modules can be of different height. With the different height the page shifts up and down. We wanted to get the recommendation from design team on this issue.

Following are the options:
1.	Shifting is fine in carousel and not do anything in public preview.
2.	Find the tallest slide in carousel and set the height of the all the slide to be that height. The slide with smaller height will have white space on top or bottom.

Do let me know if you have some better approach to fix this issue apart from the option 2 that we should take.

Thanks,
Kumud Ranjan

