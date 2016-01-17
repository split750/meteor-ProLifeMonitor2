(function(){
  angular.module('app').controller('ProfileEditCtrl', ProfileEditCtrl);

  angular.module('app').controller('ProfileViewCtrl', ProfileViewCtrl);

  //AboutCtrl.$inject = ['$meteor'];

  function ProfileEditCtrl($scope, $meteor, $state, $reactive){
  	$reactive(this).attach($scope);

  	this.subscribe("userData");

  	this.helpers({
	    profil() {
	      return Meteor.user();
	    }
	});


	$scope.updateProfil = function (profile) {
		$scope.isSubmitting = true;

		if(!profile.profile.jobCompany){ profile.profile.jobCompany = ''};
		if(!profile.profile.jobTitle){ profile.profile.jobTitle = ''};
		if(!profile.profile.jobAttachment){ profile.profile.jobAttachment = ''};
		if(!profile.profile.jobUserSummary){ profile.profile.jobUserSummary = ''};
		if(!profile.profile.jobEmail){ profile.profile.jobEmail = ''};
		if(!profile.profile.jobTel){ profile.profile.jobTel = ''};
		if(!profile.profile.jobWebsite){ profile.profile.jobWebsite = ''};
		if(!profile.profile.jobLabel){ profile.profile.jobLabel = ''};
		if(!profile.profile.jobAddress){ profile.profile.jobAddress = ''};
		if(!profile.profile.jobCity){ profile.profile.jobCity = ''};
		if(!profile.profile.jobPostalCode){ profile.profile.jobPostalCode = ''};
		if(!profile.profile.jobCountryRegion){ profile.profile.jobCountryRegion = ''};
		if(!profile.profile.jobAssistant){ profile.profile.jobAssistant = ''};
		if(!profile.profile.twitter){ profile.profile.twitter = ''};
		if(!profile.profile.linkedIn){ profile.profile.linkedIn = ''};

		console.log(profile.profile);

	    Meteor.call('updateProfil', profile.profile, function(error, result){
		  if(error){
		    console.log(error.reason);
		    return;
		  }

		});
		$scope.isSubmitting = false;
		$state.go('profile');
	};

  };

  function ProfileViewCtrl($scope, $meteor, $state, $reactive){
  	$reactive(this).attach($scope);

  	this.subscribe("user");

  	this.helpers({
	    user() {
	      return Meteor.user();
	    }
	});
  	
  	

  	/*
  	var styleDisplayNone = {'display':'none'};
	*/
	if (!this.firstname) {
        $scope.styleContainerMainFirst = {'margin': '20px auto 20px auto'};
    } else {
        $scope.styleContainerMainFirst = "";
    };
 	/*

    if (!this.jobUserSummary) {
        $scope.styleSummary = styleDisplayNone;
    };

    if (!this.twitter && !this.linkedIn) {
        $scope.styleSocialNetwork = styleDisplayNone;
    } else {
        if (!this.twitter) {
            $scope.styleSocialNetworkTwitter = styleDisplayNone;
        };
        if (!this.linkedIn) {
            $scope.styleSocialNetworkLinkedIn = styleDisplayNone;
        };
    };
	*/
  };

})();