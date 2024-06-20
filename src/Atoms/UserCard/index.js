const UserCard =({image, fullName,age,gender,email})=>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`} />
            <h2>{fullName}</h2>
            <h3>{email}</h3>
            <h3>{gender}</h3>
            <h3>{age}</h3>
             
        </div>
    );
};

export default UserCard;