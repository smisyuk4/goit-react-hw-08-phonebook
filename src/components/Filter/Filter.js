import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Filter = () => {
    const dispatch = useDispatch()

    const handleSetFilter = ({currentTarget})=>{
        dispatch(setFilter(currentTarget.value))
    }

    return (       
        <Box component="div" sx={{ position: "sticky", top: "70px"}}>
            <TextField                                        
                    name="find"
                    type="text"
                    label="Find contacts by name"
                    autoComplete="off"
                    onChange={handleSetFilter}
                    />
            </Box>
            
    );
};