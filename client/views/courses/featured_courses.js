Template.featuredCourses.helpers({
  courses: function() {
    return Courses.find({featured: true});
  }
});
