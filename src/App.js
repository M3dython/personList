import "./App.css";

const App = () => <PersonList />;

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <h3>{children}</h3>
      </div>
    </div>
  );
};

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      job: "developer"
    },
    { img: 24, name: "Bob", job: "designer" },
    { img: 89, name: "peter", job: "artist" }
  ];

  return (
    <section>
      <Person person={people[0]}></Person>;
      <Person person={people[1]}>This is the best job I've ever had.</Person>;
      <Person person={people[2]}></Person>;
    </section>
  );
};

export default App;
