# React code moved to external Javascript file

# App.js
const heading = React.createElement("h1", {}, "Hello World from React...")

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);



# index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root">
    </div>

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<script src="./App.js"></script>
</body>
</html>


# Type of React Element is
{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
$$typeof
: 
Symbol(react.element)
key
: 
null
props
: 
{id: 'heading', children: 'Hello World from React...'}
ref
: 
null
type
: 
"h1"
_owner
: 
null
_store
: 
{validated: false}
_self
: 
null
_source
: 
null
[[Prototype]]
: 
Object