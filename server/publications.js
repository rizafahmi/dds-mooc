/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('courses', function() {
  return Courses.find();
});
//
// Meteor.publish('newCourses', function() {
//   return Courses.find({type: 'new'});
// });


// Publish a single item

// Meteor.publish('singleItem', function(id) {
//   return Courses.find(id);
// });
