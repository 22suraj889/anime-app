const StyleElement = ({ darkMode }) => {
  if (darkMode) {
    document.documentElement.style.setProperty(
      "--background-dark-light-color",
      "#232323"
    );
    document.documentElement.style.setProperty(
      "--font-dark-light-color",
      "white"
    );
    document.documentElement.style.setProperty(
      "--item-dark-light-color",
      "#434343"
    );
  } else {
    document.documentElement.style.setProperty(
      "--background-dark-light-color",
      "white"
    );
    document.documentElement.style.setProperty(
      "--item-dark-light-color",
      "white"
    );
  }
};
export default StyleElement;
