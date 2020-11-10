const formatTitle = (title) => {
    if (title.length > 15) {
      var slicedTitle = title.slice(0, 15);
      return slicedTitle + "..."
    }
  
    return title;
  };


  export default formatTitle;