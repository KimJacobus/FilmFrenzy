import Button from '@mui/material/Button';
import React from "react" ;

const UserAvatar = () => {

    const inputRef= React.useRef<HTMLInputElement>(null);
    
    return ( 

        <div className="container">
            <div className="container-crop"></div>
            <div className="container-buttons" ref={inputRef}>
                <input type="file" accept='image/*'/>
                <Button variant="contained" color='info'onClick={()=> inputRef.current?.focus() }
                >
                    Choose
                    </Button>
                <Button variant='contained' color='warning'>Download</Button>
            </div>
        </div>
        




     );
}
 
export default UserAvatar;