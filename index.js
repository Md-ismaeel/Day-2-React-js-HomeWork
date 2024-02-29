console.log(React);
const H1 = React.createElement("h1", {id: 'h1Tag'}, "Topics covered");
const P = React.createElement("p",{style: {fontSize: "18px"}},"The following is a list of all the topics we cover in the MDN learning area."
);

//  fistDiv
const A = React.createElement("a",{href: `https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web`, id:'acnTag'},"Getting started with the web");
const P1 = React.createElement("p",{id: 'pTag'},"Provides a practical introduction to web development for complete beginners.");
const DIV1 = React.createElement("div", {id: 'childDiv'}, [A, P1]);

//  secondDiv
const A1 = React.createElement("a",{ href: `https://developer.mozilla.org/en-US/docs/Learn/HTMLb`},"HTML — Structuring the web");
const P2 = React.createElement("p",{id: 'pTag'},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");
const DIV2 = React.createElement("div", {id: 'childDiv'}, [A1, P2]);

//3rdDiv
const A2 = React.createElement("a",{ href: `https://developer.mozilla.org/en-US/docs/Learn/CSS`},"CSS — Styling the web");
const P3 = React.createElement("p",{id: 'pTag'},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");
const DIV3 = React.createElement("div", {id: 'childDiv'}, [A2, P3]);

const parentDiv = React.createElement("div", { id: "parentDiv" }, [
  H1,
  P,
  DIV1,
  DIV2,
  DIV3
]);
ReactDOM.render(parentDiv, document.querySelector("#root"));
