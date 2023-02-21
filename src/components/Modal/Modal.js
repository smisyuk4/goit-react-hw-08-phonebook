import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Modal as ModalMui } from '@mui/material';
import { StyledButton, StyledBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    const { title, children, closeModel } = this.props;

    return createPortal(
        <ModalMui
            open={true}
            onClose={closeModel}
        >            
            <StyledBox>
                <StyledButton 
                    aria-label="close"
                    onClick={closeModel}
                    >
                        <CloseIcon/>
                </StyledButton>

                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                { title }
                </Typography>

                { children }
            </StyledBox>
        </ModalMui>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  closeModel: PropTypes.func.isRequired,
};