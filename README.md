Thank you for taking the time for this technical assignment. We suggest to finish or timecap the assignment to a maximum of ~4 hours. We encourage you to submit even if you did not completely finish. This assignment is more about getting to know your development style and how you approach building new functionalities.

After completing the assignment you may be invited to a follow-up interview where we do some collaborative coding based on your code.


## Technical Assignment

One of the main components of Devcon is of course the content programming! Whereas in past years we used a separate off-the-shelf event app to allow our attendees to view and customize their agenda during Devcon, this year we plan to make Devcon.org the central place for all agenda-related features, both web and mobile. We will be using an open-source product called Pretalx to manage our speaker applications, reviews, and scheduling. We'd like the Pretalx schedule to be available for all attendees on our PWA website devcon.org, so that attendees can access the schedule from their desktops in advance of the event and on their mobile phones during the event. 


We would like you to create a functioning schedule overview that let's visitors view, filter and sort the `Democon` event schedule. The schedule data can be found at `src/data/schedule.json`. 

### Requirements 

- [ ] Use this repository, with Next.js framework for development
- [ ] Use TypeScript
- [ ] Use React function components and hooks
- [ ] Use Sass for designing the components
- [ ] The app should be responsive and work well on mobile and desktop
- [ ] Use all the available event data `schedule.json` for the schedule overview
- [ ] You should be able to sort and filter the schedule by day, track and room
- [ ] Break out the schedule per day/track/room to separate sections or pages/URLs where you see fit
- [ ] Display the time block visually (e.g. like a calendar view) vs. merely displaying timestamps 
- [ ] Anything else you like..

This assignment purposefully lacks further details. We leave it up to your creativity to scope and build out the schedule overview and the required components. If you want to add any additional functionalities or pages that would add something to the experience, feel free, but please keep in mind the time limit.

The `schedule.json` is an export from Pretalx. You can use the json data, without having to integrate with the API. If you do want more information, please check out their documentation

- API documentation https://docs.pretalx.org/api/index.html
- Democon API https://pretalx.com/api/events/democon/

### Deliverables

Copy or create a fork of this repository into your personal account on Github. Please make it a private repository. Invite `@wslyvh` and `@lassejaco` to it.

Please include:
1. a working solution with all the code necessary to run the application
1. any documentation (if necessary) that is required to run the application (see # Getting Started)
1. any additional information on why you build the application this way, any thing you'd done differently if you had more time or any other information that you think would be hellpful to review (see # Additional Info)

## Getting Started

Running the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Additional Info

...
