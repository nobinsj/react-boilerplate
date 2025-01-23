import { Button } from "@mui/material";
import { getTestState } from "./homeSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (value: string) => {
    dispatch(getTestState(value));
  };
  return (
    <>
      <div>Home </div>
      <Button
        variant="contained"
        onClick={() => handleButtonClick("Hi Redux is working")}
        color="primary"
      >
        Contained
      </Button>
    </>
  );
};

export default Home;
