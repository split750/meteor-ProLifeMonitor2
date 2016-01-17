Meteor.methods({
  updateProfil: function (text) {
    // Make sure the user is logged in before inserting a task
    
    console.log(text);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    check(text, {
      name: String,
      firstname: String,
      lastname: String,
      organization: String,
      jobCompany: String,
      jobTitle: String,
      jobAttachment: String,
      jobUserSummary: String,
      jobEmail: String,
      jobTel: String,
      jobWebsite: String,
      jobLabel: String,
      jobAddress: String,
      jobCity: String,
      jobPostalCode: String,
      jobCountryRegion: String,
      jobAssistant: String,
      twitter: String,
      linkedIn: String
    });
    
    Meteor.users.update({_id: this.userId}, {$set:{
      'profile.firstname': text.firstname,
      'profile.lastname': text.lastname,
      'profile.jobCompany': text.jobCompany,
      'profile.jobTitle': text.jobTitle,
      'profile.jobAttachment': text.jobAttachment,
      'profile.jobUserSummary': text.jobUserSummary,
      'profile.jobEmail': text.jobEmail,
      'profile.jobTel': text.jobTel,
      'profile.jobWebsite': text.jobWebsite,
      'profile.jobLabel': text.jobLabel,
      'profile.jobAddress': text.jobAddress,
      'profile.jobCity': text.jobCity,
      'profile.jobPostalCode': text.jobPostalCode,
      'profile.jobCountryRegion': text.jobCountryRegion,
      'profile.jobAssistant': text.jobAssistant,
      'profile.twitter': text.twitter,
      'profile.linkedIn': text.linkedIn
    }});
  }

});