import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice"
import TextField from '@mui/material/TextField';
import { StyledWrap } from "./Filter.styled"

export const Filter = () => {
    const dispatch = useDispatch()

    const handleSetFilter = ({currentTarget})=>{
        dispatch(setFilter(currentTarget.value))
    }

    return (       
        <StyledWrap>
            <TextField                                        
                    name="find"
                    type="text"
                    label="Find contacts by name"
                    autoComplete="off"
                    onChange={handleSetFilter}
            />
        </StyledWrap>            
    );
};