import { Box, Button } from "@mui/material";
import { updatePing } from "./action";
import { useAppDispatch } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(updatePing());
  };
  const { t } = useTranslation()
  return (
    <>
      <div>Home </div>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        color="primary"
      >
        {t("Username")}
      </Button>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </>
  );
};

export default Home;
