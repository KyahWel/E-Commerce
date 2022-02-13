export default function MessageBox(props){
    return(
       
    
        <div className="rowc top">
                <div className="col-2b Error-page">
                    <img className="Error-Pic" src="/images/error.png" alt="Error"></img>
                    <div className="col-1b Error-text">
                         {props.children}
                    </div>
                </div>
        </div>
   
        
    );
}