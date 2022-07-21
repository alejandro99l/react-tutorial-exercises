import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";
const fs = require('fs');
const path = require('path');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You have to call the component with right syntax", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /<Card\s*\/>/gm
  expect(regex.test(file)).toBeTruthy();
})

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="col-2 mx-auto mt-5 rounded border"
>
  <img
    alt="Wrong Image!"
    className="img-fluid w-100"
    src="../../.learn/assets/06-accessing-object-values.webp"
  />
  <div
    className="col-12 p-3"
  >
    <h5>
      Nike Mercurial Superfly 8Max
    </h5>
    <span
      className="text-secondary"
    >
      Firm-Ground Soccer Cleats
    </span>
    <p>
      $ 
      295
    </p>
    <p>
      Reviews: 
      5
    </p>
    <a
      className="w-100 btn btn-dark"
      href="https://www.nike.com/t/mercurial-superfly-8-elite-fg-firm-ground-soccer-cleats-htj6pt/CV0958-403"
      target="_blank"
    >
      Shop Now
    </a>
  </div>
</div>
`);
});