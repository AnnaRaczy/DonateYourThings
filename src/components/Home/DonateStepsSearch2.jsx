// const Search = () => {
//   const { setStep, currentState, setCurrentState } = useContextForm();
//   const { handleSubmit } = useForm({});
//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setCurrentState({
//       ...currentState,
//       [name]: value,
//     });
//   };

//   const onSubmit = () => {
//     const { location, groups } = currentState;
//     console.log(location, groups);
//     if (location && groups) {
//       setStep((prevState) => prevState + 1);
//       // setError(false);
//       return;
//     }
//     // setError(true);
//   };
//   return (
//     <>
//       <Box
//         component="form"
//         id="city"
//         onSubmit={handleSubmit(onSubmit)}
//         className="donate_location--wrapper"
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//       >
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           name="customGroup"
//           value={currentState.customGroup}
//           onChange={handleChange}
//         />
//       </Box>
//       {/* <Error error={error} text="Please choose all the options" /> */}
//     </>
//   );
// };

// const SearchBox = () => {
//   return (
//     <div>
//       <StepTitle
//         text="Search for organization (optional):"
//         className="step_title"
//       />
//       <Search />
//     </div>
//   );
// };

//export { SearchBox, Combined };

//AuthContext
// signInWithPopup,
// GoogleAuthProvider,
// async function logUserInWithGoogle() {
//     const provider = new GoogleAuthProvider();

//     await signInWithPopup(auth, provider)
//       .then(() => {
//         localStorage.setItem("isLoggedIn", true);
//       })
//       .catch((error) => {
//         throw error;
//       });
//   }

//Login Card
// /import { useAuth } from "../context/AuthContext";
//<LoginGoogle onClick={onGoogleClick} />
//   logUserInWithGoogle();
// };

//<LoginGoogle onClick={onGoogleClick} />
// const LoginGoogle = ({ onClick }) => {
//     return (
//       <div className="login_email">
//         <i className="fab fa-google icon_google"></i>
//         <Link to="/" onClick={onClick} className="login_email--txt">
//           {" "}
//           Google
//         </Link>
//       </div>
//     );
//   };
