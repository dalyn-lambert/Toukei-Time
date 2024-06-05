# Toukei Time
Track native material studies for your Japanese learning journey.

The word Toukei - 統計(とうけい) - means statistics in Japanese.

## Visit the Site

[Toukei Time](https://toukei-time.vercel.app/)  
You can log in using following creditials:  
email: `shoko@jujutsuhigh.edu`  
password: `gojorules`

Please note that due to Vercel's [cold starts](https://vercel.com/docs/storage/vercel-postgres/limits#vercel-postgres-cold-starts) the log in process may take a few additional seconds. 

## Background

I have been studying Japanese with various levels of intensity since 2018. However, in 2022 I started to get serious about consuming native materials in Japanese and began tracking my time spent on things like listening to podcasts and reading manga. By 2023 I had accumulated a lot of data in Notion, but lacked any type of visualization that showed my progress.

When beginning this project I had the intention to continue to log my studies in Notion and utilize Notion's API to retrieve the data. However, after putting together a basic dashboard, I decided that things felt too slow and clunky to continue. I decided to start afresh and build a full-stack website in Next.js where I would have more freedom. As I brainstormed it was clear that there was a lot I could and wanted do with this project. To keep the initial scope manageable, I created user stories to encapsulate the basic functionality of the site that I could use as a guide to build a minimum viable product. During development I used Notion to keep track of to dos and bugs as well as to track my time spent coding. [Click here](https://dalyn-lambert.notion.site/c692a8b383f0480f92000aacd37b977a) to check out my Notion page for this project.

### User Stories

- An existing user is able to log in with an email and password.
- A user can quickly log their native material studies from their phone.
- A user can view a graph of their study time for a specific day.
- A user can view a graph of their study time for a specific month.
- A user can browse their resources.

## How to Use

Toukei Time was designed with a 'mobile first' mindset that prioritized the ability to log studies and create resources as quickly as possible. However, the site is still fully functionally on laptop and desktop computers. The Japanese text is translated to English on hover or tap.

The 'Log' page funtions as the site's homepage. Here a user can log a study session or create a new resource. The 'Today' and 'Month' pages display study data for a specific day or month based on URL parameters. On the 'Browse' page a user can view all of their resources and filter them by status or category.

## What's Next?

I hope to continue to work on Toukei Time. Here are a few things I have planned.

- Add loading indicators to assure the user that the site is processing their actions.
- Add toast notifications to assure a user that a particular operation was completed.
- Render a stacked bar graph that allows a user to compare study time between days or months.
- Create a page for weekly study overviews.
- Expand the site to better utilize the space of larger screens.
- Investigate the Spotify and YouTube APIs to be used in creating study logs and resources.
- Implement user registration.
