"use client";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Props {
    cName: string,
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

const SimpleDialog = (props:Props) => {
    return (
        <Dialog
            disableScrollLock
            onClose={() => props.setOpenModal(false)}
            open={props.openModal}
        >
            <Box className={`modal-${props.cName}`}>
                <Button
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        zIndex: 2,
                    }}
                    size="small"
                    // color="secondary"
                    variant="contained"
                    onClick={() => props.setOpenModal(false)}
                >
                    X
                </Button>
                {props.children}
            </Box>
        </Dialog>
    );
};

export default SimpleDialog;
