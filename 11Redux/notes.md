react redux is a state management library
if we want to use redux in react we have to use react-redux
flux data flow pr jyada dhyn deta hai
theoritical kahani of react-redux and flux that was being used before redux
now comes redux-toolkit  which is the official toolkit for building Redux applications. It provides utility functions to simplify common tasks
-----> Piyush Garg
state ko app component m na rakhke store m rakh lete hain , is store ko koi bhi component directly access kar skta hai
redux kahta h ki ap apni state ko kisi app level par ya kisi root level par mat rakho , ap apni state ko ek single source of truth ya ek store m rakh skte ho
components apne changes ko store m karenge and jisko bhi value read karna hai vo directly store se le lega
store k andar reducer hota hai jo events ko handle karta hai cuz store ko nhi pta kyuki store ko nahi pta ki events jo change hue h what to do with that
provider banate hai and then app component ko provider m wrap kar dete hai so that puri app component k paas access ho humare store ka