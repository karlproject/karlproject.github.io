---
layout: page
title:  "Archive to Box: Proposal"
---

KARL is currently on a path of infinite content growth. This leads 
to scaling issues (performance, signal-to-noise ratio in search.) With 
this work we will identify unneeded communities and archive the content 
to a trusted external system (Box.)

## Preparation

- Produce a report showing the delta between archiving just the 
community files vs. archiving the entire community (count, total size, 
searchable text size)

- Based on this report, decide whether to remove all community 
content or just files

## Specification

- Nat is the target audience

- This is “Archive”. Read-only.

- The target for this is old, inactive communities that few people care 
about. We move it over into a space in Box that essentially nobody 
sees. We leave behind an empty community that says, “if you want to see 
anything in here, contact Nat.” Nat then twiddles security settings on 
the Box side to give access.

- The archived community gets a special status and a badge to say it was
 archived, might not show up in searches. You have to know the URL.

- Make a new Box user “karl” and put stuff under there.

- Provide a KARL view that show communities whose activity is older 
than X date (e.g. 14 months.)

- Allow Nat to mark a community as scheduled for archiving

- A process runs (perhaps during the night) that performs the archiving 
in 3 passes:

    * Prep: remove members/moderators, update Community Overview to explain
    * Upload: Remove content and upload to the KARL account in Box as a 
    subfolder for the community
    * Archive: Remove content and tools, zap the history repository, remove
    the community from the index
    
- Ensure that no content feed events nor alert emails are generated

- Clean up any profile alert settings pointed at that community

- Representations of content (e.g. blog entry) would not have the KARL 
chrome and would be very presentation-neutral (simple)

- No tag information, but have a non-fancy amount of member information

- Ensure email-in results in a bounce

## Results

- The archived community has no members and only an Overview that 
explains that it used to exist but is now archived in Box
- Re-run the report to see how much decrease was made in the various 
systems (content count, size, search index, repository)