function Backdrop(props){
return <div className='backdrop' onClick={props.onCancel}/>
}
export default Backdrop;

//Block interaction when modal is open
//Here div is built in component so we can use onClick prop here and props can trigger onCancel value provided in the Todo component

