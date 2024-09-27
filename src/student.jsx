import proptypes from 'prop-types'

function Student(props){

    return (
        <div className="student-details">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.proptypes ={
    name: proptypes.string ,
    age : proptypes.number,
    isStudent : proptypes.bool,
}

export default Student 