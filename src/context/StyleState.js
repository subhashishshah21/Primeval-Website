import StyleContext from "./styleContext";

const StyleState = (props) => {
  const yellowStyle = {
    color: "#ffe000",
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  
  return (
    <StyleContext.Provider value={{ yellowStyle, linkStyle }}>
      {props.children}
    </StyleContext.Provider>
  );
};
export default StyleState;
