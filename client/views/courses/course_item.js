Template.courseItem.helpers({
  published: function(){

    var dateFormat = moment(this.published);
    return dateFormat.format('DD MMM YYYY');
  }
});
