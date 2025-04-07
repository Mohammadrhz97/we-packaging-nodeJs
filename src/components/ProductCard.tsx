// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useState } from "react";
// import { useProductstore } from "../store/product";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";

// const ProductCard = ({ product }) => {
//   const { deleteProduct } = useProductstore();

//   const [state, setState] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleDeleteProduct = async (id) => {
//     const { success, message } = await deleteProduct(id);
//     setState({
//       ...state,
//       open: true,
//       message: message,
//       severity: success ? "success" : "error",
//     });
//   };

//   const handleCloseSnackbar = () => {
//     setState({ ...state, open: false });
//   };

//   return (
//     <>
//       <Card
//         sx={{
//           maxWidth: 345,
//           width: 220,
//           margin: 2,
//           transition: "all 0.3s",
//           "&:hover": {
//             transform: "scale(1.1)",
//           },
//         }}
//       >
//         <CardMedia
//           sx={{ height: 140 }}
//           image={product.image}
//           title={product.name}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {product.name}
//           </Typography>
//           <Typography gutterBottom variant="h7" component="div">
//             ${product.price}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <EditIcon
//             sx={{
//               backgroundColor: "green",
//               cursor: "pointer",
//               borderRadius: "12px",
//               padding: "4px",
//             }}
//           />{" "}
//           <DeleteIcon
//             onClick={() => handleDeleteProduct(product._id)}
//             sx={{
//               backgroundColor: "red",
//               cursor: "pointer",
//               borderRadius: "12px",
//               padding: "4px",
//             }}
//           />
//         </CardActions>
//       </Card>
//       <Snackbar
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         open={state.open}
//         onClose={handleCloseSnackbar}
//         autoHideDuration={3000}
//         key={state.message}
//       >
//         <Alert severity={state.severity} sx={{ width: "100%" }}>
//           {state.message}
//           {console.log(state)}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// export default ProductCard;
