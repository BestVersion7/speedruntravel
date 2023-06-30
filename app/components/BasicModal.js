// "use client"

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { memo } from "react";

export default memo(function BasicModal(props) {
    const handleClose = () => props.setOpenModal((v) => !v);

    return (
        <Modal disableScrollLock open={props.openModal} onClose={handleClose}>
            <Box className={`modal-box-${props.size}`}>
                {props.children}
                <Button
                    variant="contained"
                    onClick={() => props.setOpenModal(false)}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
});
