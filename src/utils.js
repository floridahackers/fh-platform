
export const event_types = [
    "hackathon",
    "workshop",
    "conference",
    "meetup",
    "open_event"
]

export const event_types_map = {
    hackathon: "Hackathon",
    workshop: "Workshop",
    conference: "Conference",
    meetup: "Meetup",
    open_event: "Open Event"
};

export const getEventType = (event_key) => {
    return event_types_map[event_key];
}