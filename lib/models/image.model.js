
Images = new FS.Collection("images", {
  stores: [
    new FS.Store.GridFS("original")
  ],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});
 

Images.allow({
	insert: function (userId) {
	  return (userId ? true : false);
	},
	remove: function (userId) {
	  return (userId ? true : false);
	},
	update: function (userId) {
	  return (userId ? true : false);
	}
});

Images.deny({
	download: function () {
	  return false;
	}
});


