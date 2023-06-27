// "use client"

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25em",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const handleClose = () => props.setOpenModal((v) => !v);

    return (
        <Modal disableScrollLock open={props.openModal} onClose={handleClose}>
            <Box className="modal-box">
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
}
