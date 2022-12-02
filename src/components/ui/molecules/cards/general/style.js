import { colors } from "../../../../constant/colors";

export const style = {
  container: {
    width: "18rem",
    height: 380,
    margin: "10px 0",
  },
  image : {
    height: 150,
    width: "100%"
  },
  header: {
    fontSize: 16,
    color: colors.green
  },
  body: {
    display : "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  link: {
    fontSize: 10,
    textAlign:"center"
  },
  centerLink: {
    fontSize: 10,
    textAlign:"center",
    borderRight: "1px solid #000",
    borderLeft: '1px solid #000',
    padding: "0 25px"
  }
};
