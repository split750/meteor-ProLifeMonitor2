Schema = {}

Schema.UserProfile = new SimpleSchema(
  name:
    type: String,
    regEx: /^[a-z0-9A-z . -]{3,30}$/,
    optional: true

  firstname:
    type: String,
    regEx: /^[a-z0-9A-z . -]{3,30}$/,
    optional: true

  lastname:
    type: String,
    regEx: /^[a-z0-9A-z . -]{3,30}$/,
    optional: true

  jobCompany:
    type: String,
    optional: true

  jobTitle:
    type: String,
    optional: true

  jobAttachment:
    type: String,
    optional: true

  jobUserSummary:
    type: String,
    optional: true

  jobEmail:
    type: String,
    regEx: SimpleSchema.RegEx.Email
    optional: true

  jobTel:
    type: String,
    optional: true

  jobWebsite:
    type: String,
    optional: true

  jobLabel:
    type: String,
    optional: true

  jobAddress:
    type: String,
    optional: true

  jobCity:
    type: String,
    optional: true

  jobPostalCode:
    type: String,
    optional: true

  jobCountryRegion:
    type: String,
    optional: true

  jobAssistant:
    type: String,
    optional: true

  twitter:
    type: String,
    optional: true

  linkedIn:
    type: String,
    optional: true

  birthday: 
    type: Date
    optional: true
  
  gender: 
    type: String
    allowedValues: ['Male', 'Female']
    optional: true
  
  organization : 
    type: String
    regEx: /^[a-z0-9A-z .]{3,30}$/
    optional: true
  
  bio: 
    type: String
    optional: true

  profilePicture: 
    type: String
    optional: true
)

Schema.User = new SimpleSchema(
  username:
    type: String
    regEx: /^[a-z0-9A-Z_]{3,15}$/
    optional: true


  emails:
    type: [Object]
    # // this must be optional if you also use other login services like facebook,
    # // but if you use only accounts-password, then it can be required
    optional: true

  "emails.$.address":
    type: String,
    regEx: SimpleSchema.RegEx.Email

  "emails.$.verified":
    type: Boolean

  createdAt:
    type: Date
  
  profile:
    type: Schema.UserProfile
    optional: true
  
  services:
    type: Object
    optional: true
    blackbox: true
  # Add `roles` to your schema if you use the meteor-roles package.
  # Option 1: Object type
  # If you specify that type as Object, you must also specify the
  # `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  # Example:
  # Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  # You can't mix and match adding with and without a group since
  # you will fail validation in some cases.
  roles:
    type: Object
    optional: true
    blackbox: true
)

# Collection2 already does schema checking
# Add custom permission rules if needed
Meteor.users.allow(
  insert : (userId, user, fields, modifier) ->
    return userId == user._id || Roles.userIsInRole(userId, ['manage-users','admin'])

  update : -> 
    return userId == user._id || Roles.userIsInRole(userId, ['manage-users','admin'])

  remove : -> 
    return userId == user._id || Roles.userIsInRole(userId, ['manage-users','admin'])
)

Meteor.users.attachSchema(Schema.User)