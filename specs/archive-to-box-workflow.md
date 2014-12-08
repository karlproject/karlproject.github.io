---
layout: page
title:  "Archive to Box: Workflow"
---

The *Archive to Box* project takes seldom-used communities and moves 
their content to Box. This spec documents the workflow, from start to 
finish.

## State: To Archive

This view shows a list of candidate communities and is the start of the
process. These are communities:
 
- With activity older than the threshold (e.g. 14 months)
 
- ...which are not in the process of being archived, or finished being 
archived.

The listing of communities will provide some useful information and 
links, then a button that says "START". Clicking that button will begin
the process of archiving the community and put that community into 
the next workflow state (and thus disappears from this listing.)
 
## State: Being Archived

This is the state a community is in while the background job is running
and performing the dump to Box. Each "Being Archived" community should 
provide some information:

- How many items have been copied out of the total items

- A way to see some information about the archiving (output log, errors)

- A preview of the directories made in Box (optional)

Also, the "Being Archived" community needs a way to stop the "being 
archived" process.

When the "being archived" background process completes successfully, 
the community is put into the next state (and thus disappears from this
listing.)

### Questions

- What state should it go in if something fails or Nat clicks "stop"?

- What is the recovery from that failure?

- If you have to re-run the "Being Archived" and there is already some 
content on the other side, what should happen? Always delete first? Try
to somehow optimize with a hash and see if you need to export-and-copy?
 
## State: Half-Archived

In this state, the community is (hopefully) correctly exported to Box. 
It is then time for Nat to confirm, by looking in Box, that things seem
ok. Namely, one last human sanity check.
 
Once things look good, Nat clicks "Finish" for that community and it 
transitions to the "Archived" state. This transition performs the 
following:

- Suppress any FEEDS generation during archiving

- Replace the Community Overview with the text that Nat provided on the
 LP ticket
 
- Remove the members (moderators also)
 
- The community is uncatalogued and won't show up in searches

- All content is permanently-deleted

- All content is removed from the versioning history repository and 
pgtextindex

- Ensure that any members' alert preferences no longer show the community

- Email-in to the now-archived community results in a bounce

## State: Archived

In this state, you have to know the URL to reach it.  If there is a link
to the community or a bookmark, or it is in browser history, you can 
still reach the now-empty community.

### Questions

- If the community was private, then after removing the membership 
list, only KarlAdmin (Nat) can visit it
