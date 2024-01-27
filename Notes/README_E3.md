
# Create Script for build 
- Development build -> npx parcel index.html  --> "start": "parcel index.html"
- Production build --> npx parcel prod index.html --> "build" "parcel build index.html"
- Test --> "test": "jest"


# How do we run script
- npm run start  | npm start
- npm run prod
- npm run test

# JSX
- JSX in not HTML in side javascript, It is HTML like syntax
- if you have to give attribute use camelCase 


# React Component
- Class Based Components    // OLD Way
- Functional Components     // New Way

# React Functional Component

    const Title = () => <h1>React Title</h1>
    const Heading = () => {
    return
        <div>
            <Title />
            <Title> </Title>
            {Title()}
            <h1>Namaste React Functional Component</h1>
        </div>
    }

    // render componnet like <Heading />
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Heading />)


# JSX inside write javascript using {}
- In JSX inside { is a simple javascript }

# JSX Sanitizing what is comming from api data
- JSX handle melisious data





