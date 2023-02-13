import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice"
import { StyledWrap, StyledTextField } from "./Filter.styled"

export const Filter = () => {
    const dispatch = useDispatch()

    const handleSetFilter = ({currentTarget})=>{
        dispatch(setFilter(currentTarget.value))
    }

    return (       
        <StyledWrap>
            <StyledTextField                                        
                    name="find"
                    type="text"
                    label="Find contacts by name"
                    autoComplete="off"
                    onChange={handleSetFilter}
            />
        </StyledWrap>            
    );
};