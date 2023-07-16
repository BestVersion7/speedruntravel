import Button from "@mui/material/Button";

const SubscriberFormSuccess = (props: {setOpenModal: React.Dispatch<React.SetStateAction<Boolean>>}) => {
    const handleClose = () => {
        props.setOpenModal(false);
    };
    return (
        <div>
            <h2>SpeedRunTravel Blog</h2>
            <p>
                Thank you for subscribing! 💖 You will now receive updates when
                a new article is posted. You may now close this page.
            </p>
            <Button variant="contained" onClick={handleClose}>
                Close
            </Button>
        </div>
    );
};

export default SubscriberFormSuccess;
