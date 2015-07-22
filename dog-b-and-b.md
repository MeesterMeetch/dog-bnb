Dog B&B

Mission: Find a loving dog sitter near you.  We fetch local dog sitters near you.

Elevator

Have you ever asked a friend or family member if they could dog sit Fido while you are unavailable?  Or perhaps you’ve been asked to dog sit for someone else.

At Dog B&B, we help people find the perfect home away from home for their dogs while they are away. We connect dog parents to nearby loving, caring, dog sitters.  Americans spent Billions last year boarding their pets, and we want to offer a better solution.  We believe dogs are happier in a loving home, with custom care than sitting in a kennel with limited human contact.



Technologies

nodejs
angular
angular-ui
angular-ui/bootstrap
angular-route
google maps api
express
gulp
mongodb
mongolabs
heroku
javascript
jQuery
html
css



Features (MVP)

(1) Sitter Profile with location, contact information, and availability
(2) Dog/Dog Owner Profile with location
(3) View of all the Sitters near me
(4) User auth/login (sign in with Google)
(5) Filter to return Sitters by rate
(6) Map feature to more easily locate nearby Sitters


Roadmap (for future development)


Mobile app via Ionic
Messaging & Communication between the Owner and the Sitter
Ability to schedule stays (Calendar)
Reminder of Scheduled Visit
Ability to upvote on Sitter Profiles
Ability to order Sitters based on distance and votes
Users can make reviews & comments on Sitter's profiles



User Stories



Story Name: Sitter Profile with location, contact information, and availability

Story size: Large

Statement: As a Dog Sitter, I need dog owners to be able to find me and stay with me.

Assumption:
Create, Read, Update, Destroy

Acceptance Criteria:
Dog Sitter can create a profile that has following attributes:
sitter name (text)
location/address (text)
available dates/times (text)
contact information (text)

Sitter Profile needs to have following styles according to wireframe (see notes)




Story Name: Dog/Dog Owner Profile with location

Story size: Large

Statement: As a Dog Sitting user, I need the ability to see Dog Owner Profiles so that I know who I am accepting.
As a Dog Owning user, I want a profile because its fun and keeps me from repeating myself.

Assumption:
Create, Read, Update, Destroy

Acceptance Criteria:
A dog owner can view a list of nearby dog sitter’s profiles.
The dog owner’s profile view needs to have following styles according to wireframe (see notes)




Story Name: View All Sitter Profiles Near Me

Story size: Large

Statement: As a dog owning user of Dog B&B, I need the ability to see Dog Sitter Profiles so that I can find a proper place for Fido to stay.

Assumption:
Create, Read, Update, Destroy

Acceptance Criteria:
A dog owner can view a list of nearby dog sitter’s profiles.
The all sitters profiles view needs to have following styles according to wireframe (see notes)




Story Name: User Authorization/Login (sign in with Google)

Story size: Large

Statement: I want to be the only user with access to my profile, and edit my profile.  Therefore, I’d like to log in securely via Google.


Acceptance Criteria:
Securely login using ng-auth.
Login as the type of user that you are (dog owner or dog sitter).



Story Name: Filter to return sitters by Rate

Story size: Medium

Statement: As a dog owning user of Dog B&B on a budget, I want to sort dog sitters by price.

Acceptance Criteria:
A dog owner can sort dog sitters by price.



Story Name: User Authorization/Login (sign in with Google)

Story size: Large

Statement: I want to be the only user with access to my profile, and edit my profile.  Therefore, I’d like to log in securely via Google.


Acceptance Criteria:
Securely login using ng-auth.
Login as the type of user that you are (dog owner or dog sitter).




Story Name: Map feature to more easily locate nearby dog sitters

Story size: Large

Statement: As a dog owning user of Dog B&B on a budget, I want to sort dog sitters by price.

Acceptance Criteria:  
Map needs to use the user’s geolocation.  
The map needs to mark the addresses of dog sitters.
