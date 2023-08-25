import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialog(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [productName, setProductName] = React.useState('');
  const [productDescription, setProductDescription] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');

  const handleCancel = () => {
    props.handleClose('cancel');
  };

  const handleSubscribe = async() => {
    const newProduct = {
      image: imageUrl,
      name: productName,
      description: productDescription,
      price: productPrice,
    };

    // Send the newProduct object to the server or perform any necessary action
    //const res = await addProduct(newProduct)
    //console.log('New Product:', newProduct);

    props.handleClose(newProduct);
  };

  return (
    <div>
      <Dialog open={true} onClose={props.handleClose}>
      <DialogTitle className="text-2xl font-bold">Add New Product</DialogTitle>
<DialogContent>
  <DialogContentText className="text-gray-600 mb-4">
    Add a new gift product to the catalog:
  </DialogContentText>
  <TextField
    autoFocus
    margin="normal"
    id="image"
    label="Image URL"
    type="text"
    fullWidth
    variant="outlined"
    value={imageUrl}
    onChange={(e) => setImageUrl(e.target.value)}
    className="mb-4"
    style={{ backgroundColor: '#F4F4F4' }}
  />
  <TextField
    margin="normal"
    id="name"
    label="Product Name"
    type="text"
    fullWidth
    variant="outlined"
    value={productName}
    onChange={(e) => setProductName(e.target.value)}
    className="mb-4"
    style={{ backgroundColor: '#F4F4F4' }}
  />
  <TextField
    margin="normal"
    id="description"
    label="Product Description"
    type="text"
    fullWidth
    variant="outlined"
    value={productDescription}
    onChange={(e) => setProductDescription(e.target.value)}
    className="mb-4"
    style={{ backgroundColor: '#F4F4F4' }}
  />
  <TextField
    margin="normal"
    id="price"
    label="Product Price"
    type="number"
    fullWidth
    variant="outlined"
    value={productPrice}
    onChange={(e) => setProductPrice(e.target.value)}
    className="mb-4"
    style={{ backgroundColor: '#F4F4F4' }}
  />
</DialogContent>

        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSubscribe}>Add Product</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
