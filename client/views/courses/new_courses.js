Template.newCourses.helpers({
  courses: function() {
    return Courses.find({}, {sort: {published: -1}, limit: 10});
  }
});
