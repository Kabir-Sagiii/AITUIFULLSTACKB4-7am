function displayDesignation(years) {
  if (years > 0 && years <= 2) {
    console.log("Junior Engineer");
  } else if (years > 2 && years <= 5) {
    console.log("Senior Engineer");
  } else if (years > 5 && years <= 7) {
    console.log("Team Lead");
  } else if (years > 7 && years <= 10) {
    console.log("Project Manager");
  } else if (years > 10) {
    console.log("Software Architect");
  } else {
    console.log("Invalid year");
  }
}

displayDesignation(9);
