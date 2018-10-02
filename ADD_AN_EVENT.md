# Adding your event to the Florida Hackers Site

There are two ways of adding your event to the FH Site.
- Opening an issue
- Submitting a pull request

## Open an Issue

If you don't want to deal with code, or don't know how to use Git/GitHub the easiest way to get your event started is to [Open an Issue](https://github.com/floridahackers/fh-platform/issues/new) with the title
`[Add Event Request] Add "my cool event"`, and with the following event details on the body: 

- Event Name
- Event URL
- Starting Date
- End Date
- Your School/Host
- Your Location 
- Event Type 
- A preferred color hex value (optional)

Example: 

- Event Name: CoolHacks
- Event URL: http://coolhacks.io
- Starting Date: Aug 12, 6:30pm
- End Date: Aug 14, 1:00pm
- Your School/Host: Institute Of Tech
- Your Location: Orlando, FL
- Event Type: Hackathon | Workshop | Conference | Meetup | Open Event
- A preferred color hex value (optional): #F8B93E

While this is a very low effort approach, it relies on a good samaritan that will submit a pull request for your event, so it might not be immediate.

## Submit a Pull Request

The second way is a bit more involved, and maybe a bit more fun. It's a great way to make your first pull request if you have never done so (nice guide [here](https://www.thinkful.com/learn/github-pull-request-tutorial/#Time-to-Submit-Your-First-PR)).

In order to add your event, you'll need to modify the events file under `src/all-events.js`, which exports an array of event JSON object.

First head over to [http://floridahackers.com/add-event.html](http://floridahackers.com/add-event.html), where you can see a preview of your event card and generate a JSON object for your event.

You should have something that looks like this 

```JSON
{
    "name":"PolyHacks",
    "color":"#e7358b",
    "date":{
        "from":1490461063000, // Unix Timestamps
        "to":1490547492000
    },
    "event_url":"http://polyhacks.com/",
    "host":"Florida Polytechnic University",
    "event_type":"hackathon",
    "location":"Lakeland",
}
```

Then add your object as the first entry of the `all_events` array and save. 

All that's left is submitting a pull request with your change back to this repo. When you submit a PR you'll see that Netlify generates a urs to preview your changes on the site. Make sure everything looks good there or make changes as necessary. Once it gets merged it will be automatically deployed to the live site. 

**CONVINIENT NOTE** 

Although you need to fork the repo, you might not need to clone and edit it on your machine. You can simply edit the `all-events.js` file on GitHub and submit the pull request right after.
