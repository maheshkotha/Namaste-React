# Create Element though React
<!--  Useing React.createElement() it takes three arguments -->
<!-- First argument is what tag you need to create -->
<!-- Second is object, is the place where you will give attributes to you tags -->
<!-- Third arguments is  What ever you need to inside tag (also known as children) -->

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

<script>
    const heading = React.createElement("h1", {}, "Hello World from React...")

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(heading);
</script>
</body>
</html>

