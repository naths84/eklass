import React from "react"
import  './contact.css';


class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }
  render() {
    return (
      
      <div className="Contact">
      <p>Contact Me</p>
      <div>
      <form action="/action_page.php">
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." 
          value={this.state.fname}
          onChange={e => this.setState({ fname: e.target.value })}
      />

      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." 
          value={this.state.lname}
          onChange={e => this.setState({ lname: e.target.value })}
      />
  
  
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" 
       value={this.state.email}
       onChange={e => this.setState({ email: e.target.value })}
       />
  
  
      <label>Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.."onChange={e => this.setState({ message: e.target.value })}
    value={this.state.message}
      ></textarea>
     <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
      </form>
      </div>
      </div>
    );
  }


}

export default Contact;

