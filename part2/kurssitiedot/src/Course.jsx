const Header = ({name}) => (
    <h2>{name}</h2>
)
const Content = ({parts}) => (
    <>
    {parts.map((part, i) =>
        <Part key={part.id} part={parts[i]} />
    )}
    </>
)
const Total = ({parts}) => (
    <p><b>total of {parts.reduce((accumulator, part) => accumulator + part.exercises, 0)} exercises</b></p>
)
const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)
const Course = ({course}) => (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
)

export default Course