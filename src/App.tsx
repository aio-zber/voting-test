import Result from './Result';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log("Form submitted");
    const form = e.currentTarget;
    setAge(Number((form.elements.namedItem('age') as HTMLInputElement).value));
    setName((form.elements.namedItem('name') as HTMLInputElement).value);
    setEmail((form.elements.namedItem('email') as HTMLInputElement).value);
    setPhone((form.elements.namedItem('phone') as HTMLInputElement).value);
    setGender((form.elements.namedItem('gender') as HTMLSelectElement).value);
    setAddress((form.elements.namedItem('address') as HTMLTextAreaElement).value);
    setBirthday((form.elements.namedItem('birthday') as HTMLInputElement).value);
    navigate("/result");
  }

  function handleReset(){
    setAge(0);
    setName("");
    setEmail("");
    setPhone("");
    setGender("");
    setAddress("");
    setBirthday("");
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <h1>Voting App</h1>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Contact Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" placeholder="Enter your age" required min="1" max="120" />
              </div>
              <div className="form-group">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" name="birthday" placeholder="Enter your birthday" required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" required>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea name="address" id="address" placeholder="Enter your address" required></textarea>
              </div>
              <div className="button-group">
                <button type="submit">Submit</button>
                <button type="reset" className="secondary">Reset</button>
              </div>
            </form>
          </>
        } />
        <Route path="/result" element={
          <Result 
            age={age}
            name={name}
            email={email}
            phone={phone}
            gender={gender}
            address={address}
            birthday={birthday}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;