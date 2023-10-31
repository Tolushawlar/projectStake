const myObject = {
  hasOwnProperty: "I'm my own hasOwnProperty!",
  otherProperty: "This is another property",
};
const result = Object.prototype.hasOwnProperty.call(myObject, "otherProperty");
