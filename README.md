commands used:

1. npx create-react-app advanced-react-concept --template typescript
2. npm install --save prop-types (in 10-prop-types)
3. npm install react-router-dom@5.2.0 (in 11-react-router)

version 5.2.0 is used because in this project some old properties of router-dom are used which is supported by this version and not by latest version

## about hooks

Don’t call Hooks inside loops, conditions, or nested functions.

usereducer:

-> instead of updating the state directly useReducer adds actions and then useReducer goes to the reducer function. This reducer function computes how to update the next state.
