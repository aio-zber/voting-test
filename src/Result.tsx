import { useNavigate } from 'react-router-dom';

const Result = (props: {age: number, name: string, email: string, phone: string, gender: string, address: string, birthday: string}) => {
    const {age, name, email, phone, gender, address, birthday} = props;
    const navigate = useNavigate();

    function handleCanVote() {
        return age >= 18;
    }
    
    function handleGender() {
        if (gender === "male") {
            return "Mr. " + name;
        } else if (gender === "female") {
            return "Ms. " + name;
        }
        return name;
    }

    return (
        <div className="result-container">
            <h1>Result</h1>
            <div className="vote-status">
                {handleGender()}, you {handleCanVote() ? "are eligible to vote!" : "are not eligible to vote yet."}
            </div>
            <div className="result-header">Personal Information</div>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Contact Number:</strong> {phone}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Birthday:</strong> {birthday}</p>
            <p><strong>Address:</strong> {address}</p>
            <div className="button-group">
                <button className="secondary" onClick={() => navigate('/')}>Back to Form</button>
            </div>
        </div>
    )
}

export default Result;