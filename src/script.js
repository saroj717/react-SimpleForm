class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name } = this.state;
    return <input name="name" value={name} onChange={this.handleChange}/>
  }
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<SimpleForm/>);