import './user.css'
export function UserCard({data}){
    return(
        <div className="div">
           {
            data.map((i ,index) =>{
                return(
                    <div key = {index} className='col'>
                        <h3>Name : {i.name}</h3>
                        <p>Role : {i.role}</p>
                        <p>Country : {i.country}</p>
                    </div>
                )
            })   
           }
        </div>
    )
}