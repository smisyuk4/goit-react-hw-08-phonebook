import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice"
import { selectFilter } from "redux/selectors";
import { StyledWrap, StyledTextField } from "./Filter.styled"

export const Filter = () => {
    const filterValue = useSelector(selectFilter)
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
                    value={filterValue}
            />
        </StyledWrap>            
    );
};