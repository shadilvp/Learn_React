
function ProfilePicture(){
    const imageUrl = './src/assets/imresizer-1726728260091.jpg';
    const handleclick = (e) => e.target.style.display = "none";
    

    return (<img onClick={(e)=>handleclick(e)} src={imageUrl}></img>)
}
export default ProfilePicture
